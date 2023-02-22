import { Box, Container, Divider, HStack, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React,{useState} from 'react'
import { AiTwotonePlusCircle } from "react-icons/ai";
import Details from './Details';
import Sidebar from './Sidebar';
import Newmiddle from './Newmiddle';

function Middle({data}) {
    const [timingdata] = useState([]) 


  return (
    <>
    {/* loop throgh all the ele ments */}
    {data.map((ele,i)=>(
    <Container key={i} p={10} maxH={"700px"} boxShadow={'2xl'} maxW={"container.xl"}  display={"flex"}>

        
           
        <Sidebar 
        data = {ele}
        
        />

       
        
        <Newmiddle  
        
        data = {ele.dates.first}
        
        />
    
    
    </Container>
     ))}
     </>
  )
}

export default Middle
