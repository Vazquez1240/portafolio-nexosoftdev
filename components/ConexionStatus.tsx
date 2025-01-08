import { Modal, ModalHeader, ModalBody } from "@nextui-org/modal";

interface Props {
  isOnline: boolean;
}

export default function ConexionStatus({ isOnline }: Props) {
  return (
    <Modal
      closeButton
      aria-labelledby="offline-alert"
      isOpen={!isOnline}
    >
      <ModalHeader>
        <p>No estás conectado a Internet</p>
      </ModalHeader>
      <ModalBody>
        <p>
          Has perdido la conexión a Internet. Puedes seguir navegando en las
          páginas ya cargadas.
        </p>
      </ModalBody>
    </Modal>
  );
}
