import { PlanetImg } from 'assets';

export const Planet = () => (
  <div className="blured planet size-[526px] bg-black-dark">
    <div className="planet flex items-center justify-center size-[486px] border border-l-0 border-t-0 border-orange-light">
      <div className="planet bg-black-light size-[446px]">
        <div className="planet size-[393px] border border-smoky">
          <div className="planet size-[370px] border border-smoky">
            <img
              src={PlanetImg}
              alt="Planet"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);
