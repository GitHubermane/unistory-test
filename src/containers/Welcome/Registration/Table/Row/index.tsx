import { CrossIcon } from 'assets';
import { useAppDispatch, useAppSelector } from 'hooks';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { USER_ROUTE } from 'routes';
import { deleteUser } from 'store/users/slice';

type PropsType = {
  id: number;
  username: string;
  email: string;
  address: string;
};

export const Row: FC<PropsType> = ({
  id, username, email, address, 
}) => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id: myId } = useAppSelector((state) => state.profile);

  const isMyself = myId === id;

  const onNavigateClick = () => {
    if (isMyself) return;
    navigate(`${USER_ROUTE}/${id}`);
  };

  const onDeleteClick = () => {
    dispatch(deleteUser());
  };

  return (
    <button
      className="flex items-center w-full py-4 text-sm text-left border-b last-of-type:border-none hover:text-orange-light transition-colors cursor-pointer"
      key={id}
      onClick={onNavigateClick}
    >
      <div className="inline-block w-1/5 pr-4 overflow-hidden text-ellipsis">
        {username}
      </div>
      <div className="inline-block w-2/5 pr-4 overflow-hidden text-ellipsis">
        {email}
      </div>
      <div className="inline-flex justify-between items-center w-2/5">
        <span className="w-auto overflow-hidden text-ellipsis pr-4">
          {address}
        </span>
        {isMyself && (
          <button onClick={onDeleteClick}>
            <img
              className="h-min"
              src={CrossIcon}
              alt="Cross"
            />
          </button>
        )}
      </div>
    </button>
  );
};
