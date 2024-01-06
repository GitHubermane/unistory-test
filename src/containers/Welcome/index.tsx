import { PlanetImg } from 'assets';
import { fromatNumber } from 'utils';
import { Registration } from './Registration';

export const Welcome = () => {
  const stats = [];

  for (let i = 0; i < 3; i++) {
    stats.push({ count: 12345, name: 'Lorem ipsum dolor' });
  }

  return (
    <div className="mt-36">
      <div className="flex">
        <div>
          <div className="text-9xl font-bold mb-11">
            <img
              className="absolute top-40 right-96 z-0"
              src={PlanetImg}
              alt="Planet icon"
            />
            <h2 className="relative z-10 mix-blend-difference">
              Explore Your own planet
            </h2>
            <h2 className="relative z-10 mix-blend-difference">
              {'In '}
              <span className="outline-title">our New</span>
              {' metaverse'}
            </h2>
          </div>
          <p className="font-AvenirNextCyr w-1/3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <span className="mb-10 font-bold text-center text-3xl">
            Roadmap stats
          </span>
          {stats.map(({ count, name }, ind) => (
            <div
              className="flex flex-col items-center w-48 pb-2 mb-2 border-b border-gray last-of-type:border-none"
              // eslint-disable-next-line
              key={ind}
            >
              <div className="mb-3 text-3xl font-bold text-orange-light">
                {fromatNumber(count)}
              </div>
              <div className="text-lg">{name}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Registration />
      </div>
    </div>
  );
};
