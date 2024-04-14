import { Box, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import React from "react";
interface FormValues {
  requisition_title: string;
  opening: string;
  gender: string;
  urgency: string;
  job_title: string;
  job_details: string;
  job_location: string;
  interview_duration: string;
  interview_mode: string;
  interview_language: string;
}
interface CandidateCardPreviewProps {
  formValues: FormValues;
}
const CandidateCardPreview: React.FC<CandidateCardPreviewProps> = ({
  formValues,
}) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      borderRadius={"10px"}
      bg="#44a8dd21"
    >
      <Box display={"flex"} justifyContent={"space-between"}>
        <Heading size="md" fontStyle={"italic"} px={"6"}>
          Draft
        </Heading>
        <Box
          background="#dd5144"
          textColor={"white"}
          fontStyle={"italic"}
          fontWeight={"bold"}
          py={"3"}
          px="8"
          borderRadius={" 0 10px 0 0 "}
        >
          Preview
        </Box>
      </Box>
      <Box
        display={"flex"}
        background="#4f1089"
        textColor={"white"}
        borderRadius={"10px"}
        fontWeight={"bold"}
        py={"4"}
        px="8"
        m="5"
        justifyContent={"space-between"}
      >
        <Box>{formValues.requisition_title}</Box>
        <Box
          fontWeight={"light"}
          display={"flex"}
          alignItems={"center"}
          fontSize={"12px"}
        >
          OPENINGS{" "}
          <Box fontWeight={"900"} fontSize={"16px"} ml={"3"}>
            {formValues.opening}
          </Box>
        </Box>
      </Box>
      <Box bg={"white"} mx="5" borderRadius={"15px"} p="5">
        <Heading size="md">Requisition Details</Heading>
        <Grid templateColumns="repeat(2, 1fr)" mt={"4"} gap={6}>
          <GridItem w="100%">
            <Text color={"gray.500"} fontWeight={"200"}>
              Urgency
            </Text>
            <Text color={"gray.900"} mt={"3"}>{formValues.urgency}</Text>
          </GridItem>
          <GridItem w="100%">
            <Text color={"gray.500"} fontWeight={"200"}>
              Gender
            </Text>
            <Text color={"gray.900"} mt={"3"}>{formValues.gender}</Text>
          </GridItem>
        </Grid>
      </Box>
      <Box bg={"white"} mt="5" mx="5" borderRadius={"15px"} p="5">
        <Heading size="md">Job Details</Heading>
        <Grid templateColumns="repeat(2, 1fr)" mt={"4"} gap={6}>
          <GridItem w="100%">
            <Text color={"gray.500"} fontWeight={"200"}>
              Jobt Title
            </Text>
            <Text color={"gray.900"} mt={"3"}>{formValues.job_title}</Text>
          </GridItem>
          <GridItem w="100%">
            <Text color={"gray.500"} fontWeight={"200"}>
              Job Details
            </Text>
            <Text color={"gray.900"} mt={"3"}>{formValues.job_details}</Text>
          </GridItem>
          <GridItem w="100%">
            <Text color={"gray.500"} fontWeight={"200"}>
              Job Location
            </Text>
            <Text color={"gray.900"} mt={"3"}>{formValues.job_location}</Text>
          </GridItem>
        </Grid>
      </Box>
      <Box bg={"white"} my="5" mx="5" borderRadius={"15px"} p="5">
        <Heading size="md">Interview Settings</Heading>
        <Grid templateColumns="repeat(2, 1fr)" mt={"4"} gap={6}>
          <GridItem w="100%">
            <Text color={"gray.500"} fontWeight={"200"}>
              Interview Duration
            </Text>
            <Text color={"gray.900"} mt={"3"}>{formValues.interview_duration}</Text>
          </GridItem>
          <GridItem w="100%">
            <Text color={"gray.500"} fontWeight={"200"}>
              Interview Language
            </Text>
            <Text color={"gray.900"} mt={"3"}>{formValues.interview_language}</Text>
          </GridItem>
          <GridItem w="100%">
            <Text color={"gray.500"} fontWeight={"200"}>
              Interview Mode
            </Text>
            <Text color={"gray.900"} mt={"3"}>{formValues.interview_mode}</Text>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default CandidateCardPreview;
