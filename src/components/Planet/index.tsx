import { PlanetImg } from 'assets';

export const Planet = () => (
  <div className="blured centered size-[526px] bg-black-dark">
    <div className="centered bg-black-light size-[446px]">
      <div className="centered size-[393px] border border-smoky">
        <div className="centered size-[370px] border border-smoky">
          <div className="centred">
            <img
              src={PlanetImg}
              alt="Planet"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="absolute size-full">
      <div className="absolute top-1/2 right-[17px] -translate-y-1/2 orange-point" />
      <div className="absolute bottom-[17px] right-1/2 translate-x-1/2 orange-point" />
      <div className="absolute top-[17px] right-1/2 -translate-x-1/2 orange-point" />

      <div className="rotation ">
        <div className="ornage-line" />
      </div>
    </div>
  </div>
);
