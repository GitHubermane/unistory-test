import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { useEffect, useState } from 'react';
import { useGetUsersQuery } from 'services/user';
import { addUsers, setUsersState } from 'store/users/slice';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import { Loader } from 'components';
import { Row } from './Row';

export const Table = () => {
  const dispatch = useAppDispatch();

  const { users } = useAppSelector((state) => state.users);

  const [currentPage, setCurrentPage] = useState(0);

  const { data, isError, isLoading } = useGetUsersQuery({
    page: currentPage,
  });

  useEffect(() => {
    if (data) dispatch(addUsers(data?.items));
  }, [data]);

  // При возвращении с другой страницы записи в таблице начинают повторяться
  // поэтому при переходе на другую страницу очищаю таблицу
  useEffect(
    () => () => {
      dispatch(setUsersState({ users: [] }));
    },
    [],
  );

  // infinite scroll
  let hasNextPage = true;
  if (data?.meta) hasNextPage = data.meta.currentPage < data.meta.totalPages;

  const onLoadMore = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const [sentryRef, { rootRef }] = useInfiniteScroll({
    loading: isLoading,
    hasNextPage,
    onLoadMore,
    disabled: isError,
    rootMargin: '0px 0px 0px 0px',
  });

  return (
    <div>
      {isError ? (
        <div className="font-AvenirNextCyr text-3xl text-orange-light">
          Fetching failed
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="text-left pb-4 text-2xl border-b">
            <div className="inline-block w-1/5">Name</div>
            <div className="inline-block w-2/5">Email</div>
            <div className="inline-block w-2/5">Wallet</div>
          </div>
          <div
            className="font-AvenirNextCyr overflow-y-auto h-[200px] -mr-7 scroll"
            ref={rootRef}
          >
            <div className="mr-7">
              {users?.map((user) => (
                <Row
                  key={user.id}
                  {...user}
                />
              ))}
              {hasNextPage && (
                <div
                  className="flex justify-center mt-4"
                  ref={sentryRef}
                >
                  <Loader />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
