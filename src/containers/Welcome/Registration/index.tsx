import { Button } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';
import { isRegisteredSelector } from 'store/profile/selectors';
import { addUser } from 'store/users/slice';
import { Table } from './Table';
import { RegistrationForm } from './RegistrationForm';

export const Registration = () => {
  const dispatch = useAppDispatch();

  const { name, email, address } = useAppSelector((state) => state.profile);
  const isRegistered = useAppSelector((state) => isRegisteredSelector(state));

  const onAddClick = () => {
    if (!!address && !!name && !!email) {
      dispatch(
        addUser({
          id: 0,
          address,
          username: name,
          email,
        })
      );
    }
  };

  return (
    <div className="flex justify-between">
      <div className="mr-32">
        <h3 className="mb-4 font-bold text-4xl text-orange-light">
          Beta test registration
        </h3>
        <p className="mb-9 font-AvenirNextCyr">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        {isRegistered ? (
          <div>
            <div className="flex flex-col font-bold mb-5">
              <span className="mb-2 text-2xl">Name</span>
              <span className="text-orange-light text-3xl">{name}</span>
            </div>
            <div className="flex flex-col font-bold mb-7">
              <span className="mb-2 text-2xl">Email</span>
              <span className="text-orange-light text-3xl">{email}</span>
            </div>
            <Button onClick={onAddClick}>List me to the table</Button>
          </div>
        ) : (
          <RegistrationForm />
        )}
      </div>
      {isRegistered && (
        <div className="flex flex-col">
          <span className="mb-9 text-4xl font-bold">
            Participation listing (enable only for participants)
          </span>
          <Table />
        </div>
      )}
    </div>
  );
};
