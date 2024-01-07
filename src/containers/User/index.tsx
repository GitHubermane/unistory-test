import { PlanetImg } from 'assets';

const arr = [
  {
    title: 'Name',
    value: 'Rojer waters',
  },
  {
    title: 'Email',
    value: 'Charadeyouare@gmail.com',
  },
  {
    title: 'Wallet',
    value: '0xe02354bdbb79b935407488c4276ff7898802e574',
  },
];

export const User = () => (
  <div className="overflow-hidden">
    <div className="relative z-10">
      <h2 className="mt-24 mb-12 text-5xl font-bold">Personal data</h2>
      <div>
        {arr.map(({ title, value }) => (
          <div
            className="flex flex-col mb-5 font-bold"
            key={title}
          >
            <span className="mb-2 text-2xl ">{title}</span>
            <span className="text-3xl text-orange-light">{value}</span>
          </div>
        ))}
      </div>
    </div>
    <img
      className="absolute top-52 -right-24 z-0"
      src={PlanetImg}
      alt="Planet"
    />
  </div>
);
