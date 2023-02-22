import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue,
    Container,
    VStack,
    Flex,
    HStack,
  } from '@chakra-ui/react';
  import { BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill } from "react-icons/bs";
  
  export default function Sidebar({data}) {
   
    return (

       

       
        <Container>

      <Container h={"600px"} color={"white"} maxW={'320px'} boxShadow={'2xl'} bg={"#CD7676"} py={6}>
         <Heading size={"md"} textAlign={"left"}>EMS</Heading>
         <HStack pl={15} mt={5} gap={40}>
          <BsFillArrowLeftCircleFill size={30} color='white'/>
          <BsFillArrowRightCircleFill size={30} color='white'/>
        </HStack>
        <VStack
          maxW={'320px'}
          w={'full'}
         
          alignItems={"left"}
          rounded={'lg'}
          p={6}
         >
            
           
          <Avatar
            size={'xl'}
            src={
                data.dates.first.img
            }
            ml={"60px"}
            alt={'Avatar Alt'}
            mb={4}
            pos={'relative'}
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: 'green.300',
              border: '2px solid white',
              rounded: 'full',
              pos: 'absolute',
              bottom: 0,
              right: 3,
            }}
          />
          <Text textAlign={"left"} fontFamily={'body'}>
         Name: {data.dates.first.name}
          </Text>
          <Text textAlign={"left"} >
            Id: {data.dates.first.id}
          </Text>
          <Text textAlign={"left"}>
             Phone No: +91 {data.dates.first.phone}
          </Text>
          <Box pt={20}>
          <Text  textAlign={"left"} >
            Day: {data.dates.first.day}
            </Text>
            <Text  textAlign={"left"} >
             Date: {data.dates.first.date}
            </Text>
            </Box>
  
          <VStack  mt={"100px"}>
           
            
          </VStack>
  
        </VStack>
      </Container>
      </Container>
      
    );
  }