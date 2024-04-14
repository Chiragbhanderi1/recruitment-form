"use client";
import CandidateForm from "@/Components/CandidateForm";
import {
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
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
export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [formValues, setFormValues] = useState<FormValues>({
    requisition_title: "",
    opening: "",
    gender: "",
    urgency: "",
    job_title: "",
    job_details: "",
    job_location: "",
    interview_duration: "",
    interview_language: "",
    interview_mode: "",
  });
  const [section, setSection] = useState("requisition");
  const handleNextStep = () => {
    if (activeTab < 2) {
      setActiveTab((prevTab) => prevTab + 1);
      switch (activeTab + 1) {
        case 1:
          setSection("job");
          break;
        case 2:
          setSection("interview");
          break;
        default:
          break;
      }
    } else {
      alert("Form successfully submitted");
    }
  };
  const handleBackStep = () => {
    if (activeTab > 0) {
      setActiveTab((prevTab) => prevTab - 1);
      switch (activeTab + 1) {
        case 2:
          setSection("job");
          break;
        case 3:
          setSection("interview");
          break;
        default:
          break;
      }
    } else {
      alert("Form successfully submitted");
    }
  };

  return (
    <Box px="80" py="10">
      <Box mb="4">
        <Heading as="h1" fontWeight="bold" fontSize="2xl">
          Create Candidate Requisition
        </Heading>
      </Box>
      <Flex>
        <Tabs
          flex="1"
          index={activeTab}
          onChange={(index) => setActiveTab(index)}
        >
          <TabList>
            <Tab>Requisition Details</Tab>
            <Tab>Job Details</Tab>
            <Tab>Interview Settings</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <CandidateForm
                section="requisition"
                onNextStep={handleNextStep}
                isLastStep={false}
                handleBackStep={handleBackStep}
                formValues={formValues} setFormValues={setFormValues}
              />
            </TabPanel>
            <TabPanel>
              <CandidateForm
                section="job"
                onNextStep={handleNextStep}
                isLastStep={false}
                handleBackStep={handleBackStep}
                formValues={formValues} setFormValues={setFormValues}
              />
            </TabPanel>
            <TabPanel>
              <CandidateForm
                section="interview"
                onNextStep={handleNextStep}
                isLastStep={true}
                handleBackStep={handleBackStep}
                formValues={formValues} setFormValues={setFormValues}
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Box>
  );
}
