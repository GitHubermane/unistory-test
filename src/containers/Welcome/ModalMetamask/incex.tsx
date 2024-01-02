import { Button, Modal } from 'components';

export const ModalMetamask = () => (
  <Modal>
    <div className="flex flex-col items-center">
      <h3 className="mb-7 text-4xl font-bold text-orange-light">
        Metamask extension
      </h3>
      <p className="w-80 mb-12 font-Inter leading-5">
        {'To work with our application, you have to install the '}
        <span className="text-orange-light">Metamask browser extension</span>
      </p>
      <Button onClick={() => {}}>Skip this step</Button>
    </div>
  </Modal>
);
