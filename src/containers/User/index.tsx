import { Loader, Planet } from 'components';
import { useParams } from 'react-router-dom';
import { useGetUserbyIdQuery } from 'services/user';

export const User = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useGetUserbyIdQuery(Number(id));

  // Секции с информацией о пользователе
  const sections = [
    {
      title: 'Name',
      value: data?.username,
    },
    {
      title: 'Email',
      value: data?.email,
    },
    {
      title: 'Wallet',
      value: data?.address,
    },
  ];

  return (
    <div className="absolute w-[calc(100%-4rem)] h-4/5 overflow-x-hidden">
      <div className="relative z-10">
        <h2 className="mt-24 mb-12 text-5xl font-bold">Personal data</h2>
        {isError ? (
          <div className="text-xl font-AvenirNextCyr text-orange-light">
            Error occured
          </div>
        ) : (
          <div>
            {!isLoading ? (
              sections.map(({ title, value }) => (
                <div
                  className="flex flex-col mb-5 font-bold"
                  key={title}
                >
                  <span className="mb-2 text-2xl ">{title}</span>
                  <span className="text-3xl text-orange-light">{value}</span>
                </div>
              ))
            ) : (
              <Loader />
            )}
          </div>
        )}
      </div>
      <div className="absolute top-[35px] -right-[199px]">
        <Planet />
      </div>
    </div>
  );
};
