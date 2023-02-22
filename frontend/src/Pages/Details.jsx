import { Container, Heading, Text, VStack } from '@chakra-ui/react'
import React,{useState} from 'react'



function Details({data}) {
    // time calculation module

    var diffHrs;
   
    var now = new Date();

    // Set the start and end times
    var startTime = new Date();
    startTime.setHours(10, 0, 0); // Set to 10:00 am
    var endTime = new Date();
    endTime.setHours(18, 0, 0); // Set to 6:00 pm
    
 
    if (now.getTime() >= startTime.getTime() && now.getTime() <= endTime.getTime()) {
     
      var diffMs = endTime.getTime() - now.getTime();
      var diffHrs = Math.floor(diffMs / 1000 / 60 / 60);
      var diffMins = Math.floor((diffMs / 1000 / 60) % 60);
      console.log(diffHrs)
    }

  
    // console.log(time);
    // console.log(presentTime)
    console.log(data);
  return (
    <VStack  mb="23%" >
   <VStack spacing={4} p={5} justifyContent={"center"} textAlign={"center"} alignItems="center" borderRadius={"12px"} mb="33%" bg={"#FFFFFF"} maxH={"280px"} maxW={"200px"}>
     <Heading  color={"#CD7676"} size={"xs"}>Day Details</Heading>
     <Text fontSize={"14px"}>Total PresentTime: 0{diffHrs}:00</Text>
     <Text  fontSize={"14px"}>Total Absent  Time: 00:30</Text>
     <Text  fontSize={"14px"}>Total  Exhemption: 00:00</Text>
     <Text   fontSize={"14px"}>Total Deduction: 00:00</Text>
   </VStack>
   {data.inconclusive  ==  "true" && data.incomplete == false? <Text fontSize={"15px"} fontWeight={"bold"} textAlign={"end"}>Status: inconclusive</Text> : <Text fontSize={"15px"} fontWeight={"bold"} textAlign={"end"}>Status:Absent</Text> }
   </VStack>
  )
}

export default Details
