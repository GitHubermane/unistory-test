import { Button, Input } from 'components';
import { useState } from 'react';
import { Table } from './Table';

export const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const isRegistred = true;

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
        {isRegistred ? (
          <div>
            <div className="flex flex-col font-bold mb-5">
              <span className="mb-2 text-2xl">Name</span>
              <span className="text-orange-light text-3xl">Rojer waters</span>
            </div>
            <div className="flex flex-col font-bold mb-7">
              <span className="mb-2 text-2xl">Email</span>
              <span className="text-orange-light text-3xl">
                Charadeyouare@gmail.com
              </span>
            </div>
            <Button
              onClick={() => {}}
              isDisabled
            >
              Get early access
            </Button>
          </div>
        ) : (
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
            <Button onClick={() => {}}>Get early access</Button>
          </>
        )}
      </div>
      {isRegistred && (
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
