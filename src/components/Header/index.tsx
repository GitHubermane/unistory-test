import { Button } from 'components';

export const Header = () => {
  const isConnected = false;
  const adress = '0x1HB5XMLmzFVj8ALj6mfBsbifRoD4miY36v';

  return (
    <div className="flex justify-between items-center fixed top-0 w-full h-20 px-16 bg-black-dark z-20">
      <div className="flex items-center justify-center h-11 w-48 text-gray-light bg-gray-dark border border-dashed border-gray-light">
        LOGO
      </div>

      {isConnected ? (
        <div className="max-w-36 overflow-hidden text-ellipsis text-orange-light">
          <span className="text-lg   whitespace-nowrap">{adress}</span>
        </div>
      ) : (
        <Button onClick={() => {}}>Connect metamask</Button>
      )}
    </div>
  );
};
