import { fromatNumber } from 'utils';
import { useModal } from 'react-modal-hook';
import { Planet } from 'components';

import { useEffect } from 'react';
import { ModalMetamask } from './ModalMetamask';
import { Registration } from './Registration';

export const Welcome = () => {
  const [showModal, hideModal] = useModal(() => (
    <ModalMetamask onClose={hideModal} />
  ));

  useEffect(showModal, []);

  const stats = [];

  for (let i = 0; i < 3; i++) {
    stats.push({ count: 12345, name: 'Lorem ipsum dolor' });
  }

  return (
    <div className="mt-[260px]">
      <div className="flex mb-28">
        <div>
          <div className="text-9xl font-bold mb-11">
            <div className="absolute -z-10 top-28 right-72">
              <div className="absolute top-[5px] left-[200px] flex items-center justify-center h-[30px] w-20 text-sm bg-white text-black-dark rounded-full z-10">
                <span className="pr-2">Q1 2022</span>
                <div className="flex flex-col items-center justify-center shadowed size-3.5 rounded-full">
                  <div className="bg-orange-light size-1.5 rounded-full" />
                </div>
              </div>
              <Planet />
            </div>
            <h2 className="relative mix-blend-difference">
              Explore Your own planet
            </h2>
            <h2 className="relative mix-blend-difference">
              {'In '}
              <span className="outline-title">our New</span>
              {' metaverse'}
            </h2>
          </div>
          <p className="relative w-1/3 font-AvenirNextCyr">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="flex flex-col items-center relative">
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
      <div className="pb-40">
        <Registration />
      </div>
    </div>
  );
};
