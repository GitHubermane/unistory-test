import { Button, Input } from 'components';
import { useEffect, useState } from 'react';

import { useLazyGetUsersQuery } from 'services/user';
import { useAppDispatch } from 'hooks/redux';
import { setProfileState } from 'store/profile/slice';
import { setUsersState } from 'store/users/slice';

export const RegistrationForm = () => {
  const dispatch = useAppDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [getUsers, { data }] = useLazyGetUsersQuery();

  useEffect(() => {
    dispatch(setUsersState({ users: data?.items }));
  }, [data]);

  const onRegisterClick = () => {
    if (!name || !email) return;
    getUsers({ page: 0 });
    dispatch(setProfileState({ id: 0, email, name }));
  };

  return (
    <>
      <div className="flex flex-col gap-4 mb-6">
        <Input
          value={name}
          onChange={setName}
          placeholder="We will display your name in participation list"
          label="Name"
        />
        <Input
          value={email}
          onChange={setEmail}
          placeholder="We will display your email in participation list"
          label="Email"
        />
      </div>
      <Button onClick={onRegisterClick}>Get early access</Button>
    </>
  );
};
