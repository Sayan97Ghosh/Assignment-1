import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button
  } from '@chakra-ui/react';
  import { AiTwotonePlusCircle } from "react-icons/ai";

function Modalshow() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <AiTwotonePlusCircle onClick={onOpen} color='green'/>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo accusantium quaerat beatae porro voluptates atque sunt molestias asperiores autem deleniti! Quos, vitae quaerat!
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Modalshow
