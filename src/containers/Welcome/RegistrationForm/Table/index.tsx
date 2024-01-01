const arr = [
  {
    name: 'Rojer Waters',
    email: 'Charadeyouare@gmail.com',
    adress: '0x1HB5XMLmzFVj8ALj6mfBsbifRoD4miY36v',
  },
  {
    name: 'Hamish Gilmore',
    email: 'walob95230@nubotel.com',
    adress: '0x1HB5XMLmzFVj8ALj6mfBsbifRoD4miY36v',
  },
  {
    name: 'Sam Crawford',
    email: 'Charadeyouare@gmail.com',
    adress: '0x1HB5XMLmzFVj8ALj6mfBsbifRoD4miY36v',
  },
  {
    name: 'Lenny Barrett',
    email: 'walob95230@nubotel.com',
    adress: '0x1HB5XMLmzFVj8ALj6mfBsbifRoD4miY36v',
  },
];

export const Table = () => (
  <div className="flex flex-col">
    <div className="flex text-left">
      <div className="flex-1 w-1/5">Name</div>
      <div className="flex-1 w-2/5">Email</div>
      <div className="flex-1 w-2/5">Wallet</div>
    </div>
    <div>
      {arr.map(({ name, email, adress }) => (
        <div className="flex text-left">
          <div className="flex-1 w-1/5 pr-4">{name}</div>
          <div className="flex-1 w-2/5 pr-4">{email}</div>
          <div className="flex-1 w-2/5 pr-4">{adress}</div>
        </div>
      ))}
    </div>
  </div>
);
