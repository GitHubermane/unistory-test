import { Button, Input } from 'components';
import { useState } from 'react';

import { useAppDispatch } from 'hooks/redux';
import { setProfileState } from 'store/profile/slice';
import { validateEmail } from 'utils';

export const RegistrationForm = () => {
  const dispatch = useAppDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const onRegisterClick = () => {
    if (!name || !email) return;
    if (!validateEmail(email)) {
      setEmailError("Email isn't valid");
      return;
    }
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
          error={emailError}
          setError={setEmailError}
        />
      </div>
      <Button onClick={onRegisterClick}>Get early access</Button>
    </>
  );
};
