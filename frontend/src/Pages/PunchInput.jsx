import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    Input,
    FormLabel,
    Text
  } from '@chakra-ui/react'
import React from 'react'

function PunchInput() {
    const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  return (
    <>
     <a href='#'>

   
    <Text onClick={onOpen}>edit</Text>
    </a>
    

    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create your account</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Scan Type</FormLabel>
            <Input ref={initialRef} placeholder='First name' />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Machine Id</FormLabel>
            <Input placeholder='Last name' />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Total Time</FormLabel>
            <Input placeholder='Last name' />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Deductions</FormLabel>
            <Input placeholder='Last name' />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Exhemptions</FormLabel>
            <Input placeholder='Last name' />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3}>
            edit & Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
    </>
  )
}

export default PunchInput
