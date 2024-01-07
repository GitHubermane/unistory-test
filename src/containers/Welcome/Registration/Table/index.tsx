import { CrossIcon } from 'assets';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { deleteUser } from 'store/users/slice';

export const Table = () => {
  const dispatch = useAppDispatch();

  const { id: myId } = useAppSelector((state) => state.profile);
  const { users } = useAppSelector((state) => state.users);

  const onDeleteClick = () => {
    dispatch(deleteUser());
  };

  return (
    <div className="flex flex-col">
      <div className="text-left pb-4 text-2xl border-b">
        <div className="inline-block w-1/5">Name</div>
        <div className="inline-block w-2/5">Email</div>
        <div className="inline-block w-2/5">Wallet</div>
      </div>
      <div className="font-AvenirNextCyr overflow-y-auto h-96 -mr-7 scroll">
        <div className="mr-7">
          {users?.map(({
            username, email, address, id, 
          }) => (
            <div
              className="flex items-center py-4 text-sm text-left border-b last-of-type:border-none"
              key={id}
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
                {myId === id && (
                <button onClick={onDeleteClick}>
                  <img
                    className="h-min"
                    src={CrossIcon}
                    alt="Cross"
                  />
                </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
