import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

interface Props {
  titulo: string;
  message: string;
  textBtn: string;
  status: boolean;
}

export default function ComponenteModal({
  titulo,
  message,
  textBtn,
  status,
}: Props) {
  const { onOpenChange } = useDisclosure();

  return (
    <>
      <Modal
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        isOpen={status}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {titulo}
              </ModalHeader>
              <ModalBody>
                <p>{message}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  {textBtn}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
