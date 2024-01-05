import { CrossIcon } from 'assets';

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
    <div className="text-left pb-4 text-2xl border-b">
      <div className="inline-block w-1/5">Name</div>
      <div className="inline-block w-2/5">Email</div>
      <div className="inline-block w-2/5">Wallet</div>
    </div>
    <div className="font-AvenirNextCyr overflow-y-auto h-96 -mr-7 scroll">
      <div className="mr-7">
        {arr.map(({ name, email, adress }) => (
          <div
            className="flex items-center py-4 text-sm text-left border-b last-of-type:border-none"
            key={adress}
          >
            <div className="inline-block w-1/5 pr-4 overflow-hidden text-ellipsis">
              {name}
            </div>
            <div className="inline-block w-2/5 pr-4 overflow-hidden text-ellipsis">
              {email}
            </div>
            <div className="inline-flex justify-between items-center w-2/5">
              <span className="w-auto overflow-hidden text-ellipsis pr-4">
                {adress}
              </span>
              <button>
                <img
                  className="h-min"
                  src={CrossIcon}
                  alt="Cross"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
