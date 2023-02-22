import React,{useState,useEffect} from 'react'
import { Box, Container, Divider, Flex, HStack, Heading, Stack, Text, VStack } from '@chakra-ui/react'

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
    
  } from '@chakra-ui/react'
import Details from './Details';
import { Tooltip } from '@chakra-ui/react'
import PunchInput from './PunchInput';
import Modalshow from './Modalshow';


function Newmiddle({data}) {
   const [scanned,setScanned] = useState([]);

  console.log(scanned);

   const scannedData = async () =>{
    await fetch("http://localhost:9870/timing/")
    .then((res)=>res.json())
    .then((res)=>setScanned(res))
    
    
}


    const { isOpen, onOpen, onClose } = useDisclosure()

    const[timings] = useState([data.deductions
    ])
    console.log(timings);



   useEffect(()=>{
    scannedData()
   },[])




  return (
    <Container  h={"700px"}  maxW={"800px"} >
    <Heading textAlign={"left"} size={"xs"}>Emf/Admin/predator</Heading>
   
    <Box gap={30} display={"flex"} alignItems="center" p={5} borderRadius={"15px"}  h={"550px"} maxW={"800px"} bg={"#DDD7D7"}>
      {/* first box */}
      <VStack  p={5} justifyContent={"center"}  borderRadius={"12px"}  h={"500px"} W={"390px"} bg={"#FFFFFF"}>
           <Heading size={"xs"} color={"#CD7676"}>Timeline</Heading>
           {/* punch time */}
           <HStack spacing={10} >
            <Text fontSize={"14px"}> 09:15 A.M.</Text>
            
           
            <Modalshow/>
              
            <VStack alignItems={"left"}>
            <Text fontSize={"15px"}> Punch-In</Text>
            <PunchInput size="xs"/>
            </VStack>

            {/* 2nd  */}
           </HStack>
           <Divider  h="300px"  orientation='vertical' border={"1px"}   color="black"/>
           <HStack spacing={10} >
            <Text fontSize={"14px"}> 09:15 A.M.</Text>
            <Modalshow/>
            <VStack alignItems={"left"}>
            <Text fontSize={"15px"}> Punch-In</Text>
            <PunchInput size="xs"/>
            </VStack>
           </HStack>

           <Divider  h="300px" orientation='vertical' border={"1px"}   color="black"/>
           
           <HStack spacing={10} >
            <Text fontSize={"14px"}> 09:15 A.M.</Text>
            <Modalshow/>
            <VStack alignItems={"left"}>
            <Text fontSize={"15px"}> Punch-In</Text>
            <PunchInput size="xs"/>
            </VStack>
           </HStack>
          
           <Divider  h="300px" orientation='vertical' border={"1px"}   color="black"/>
           
           <HStack spacing={10} >
            <Text fontSize={"14px"}> 09:15 A.M.</Text>
            <Modalshow/>
            <VStack alignItems={"left"} >
            <Text textAlign={"left"} fontSize={"15px"}>  Punch-In</Text>
            <PunchInput size="xs"/>
            </VStack>

           </HStack>
          
           <Divider  h="300px"  orientation='vertical' border={"1px"}   color="black"/>

           <HStack spacing={10} >
            <Text fontSize={"14px"}> 09:15 A.M.</Text>
            <Modalshow/>
            <VStack alignItems={"left"}>
            <Text fontSize={"15px"}>  Punch-In</Text>
            <PunchInput size="xs"/>
            </VStack>
           </HStack>
          
        
           
          
           <Divider h="300px"  orientation='vertical' border={"1px"}    color="black"/>
           
       
      </VStack>

     {/* this is the second box */}

    
        <Details
        
            data = {data}
        
        />
   

    </Box>


  </Container>
  )
}

export default Newmiddle
