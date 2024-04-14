import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  FormErrorMessage,
  Box,
  Stack,
} from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import CandidateCardPreview from "./CandidateCardPreview";
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
interface CandidateFormProps {
  section: string;
  onNextStep: () => void;
  handleBackStep: () => void;
  isLastStep: boolean;
  formValues: FormValues;
  setFormValues: any;
}

const CandidateForm: React.FC<CandidateFormProps> = ({
  section,
  onNextStep,
  handleBackStep,
  isLastStep,
  formValues,
  setFormValues,
}) => {
  const [value, setValues] = useState({});
  const handleSubmit = (values: FormValues, actions: any) => {
    onNextStep();
    actions.setSubmitting(false);
  };
  const handleChange = (fieldName: string, value: string) => {
    setFormValues((prevFormValues:any) => ({
      ...prevFormValues,
      [fieldName]: value,
    }));
  };

  const validate = (values: FormValues) => {
    const errors: Partial<FormValues> = {};
    if (section === "requisition") {
      if (!values.requisition_title) {
        errors.requisition_title = "Requisition title is required";
      }
      if (!values.opening || values.opening == "0") {
        errors.opening = "Enter a valid number";
      }
      if (!values.gender) {
        errors.gender = "Gender is required";
      }
      if (!values.urgency) {
        errors.urgency = "Urgency is required";
      }
    } else if (section === "job") {
      if (!values.job_title) {
        errors.job_title = "Job title is required";
      }
      if (!values.job_details) {
        errors.job_details = "Job details is required";
      }
      if (!values.job_location) {
        errors.job_location = "Job location is required";
      }
    } else {
      if (!values.interview_duration) {
        errors.interview_duration = "Interview duration is required";
      }
      if (!values.interview_language) {
        errors.interview_language = "Interview language is required";
      }
      if (!values.interview_mode) {
        errors.interview_mode = "Interview mode is required";
      }
    }

    return errors;
  };

  return (
    <Box display="flex" flexDirection="row" width="full">
      <Box width="60%" mr={4}>
        <Formik
          initialValues={formValues}
          onSubmit={handleSubmit}
          validate={validate}
          enableReinitialize // This ensures initialValues is reset when formValues change
        >
          {({ isSubmitting, isValid }) => (
            <Form>
              {section === "requisition" && (
                <>
                  <Field name="requisition_title">
                    {({ field, form }: any) => (
                      <FormControl
                        id="requisition_title"
                        mb="4"
                        isInvalid={
                          form.errors.requisition_title &&
                          form.touched.requisition_title
                        }
                      >
                        <FormLabel>Requisition Title</FormLabel>
                        <Input
                          type="text"
                          {...field}
                          placeholder="Enter requisition title"
                          onChange={(
                            e: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            form.setFieldValue(
                              "requisition_title",
                              e.target.value
                            );
                            handleChange("requisition_title", e.target.value);
                          }}
                        />
                        <FormErrorMessage>
                          {form.errors.requisition_title}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="opening">
                    {({ field, form }: any) => (
                      <FormControl
                        id="opening"
                        mb="4"
                        isInvalid={form.errors.opening && form.touched.opening}
                      >
                        <FormLabel>Number of openings</FormLabel>
                        <Input
                          type="number"
                          {...field}
                          placeholder="Enter number of openings"
                          onChange={(
                            e: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            form.setFieldValue("opening", e.target.value);
                            handleChange("opening", e.target.value);
                          }}
                        />
                        <FormErrorMessage>
                          {form.errors.opening}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="gender">
                    {({ field, form }: any) => (
                      <FormControl
                        id="gender"
                        mb="4"
                        isInvalid={form.errors.gender && form.touched.gender}
                      >
                        <FormLabel>Gender</FormLabel>
                        <Select
                          {...field}
                          placeholder="Select Gender"
                          onChange={(
                            e: React.ChangeEvent<HTMLSelectElement>
                          ) => {
                            form.setFieldValue("gender", e.target.value);
                            handleChange("gender", e.target.value);
                          }}
                        >
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </Select>
                        <FormErrorMessage>
                          {form.errors.gender}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="urgency">
                    {({ field, form }: any) => (
                      <FormControl
                        id="urgency"
                        mb="4"
                        isInvalid={form.errors.urgency && form.touched.urgency}
                      >
                        <FormLabel>Urgency</FormLabel>
                        <Select
                          {...field}
                          placeholder="Select Urgency"
                          onChange={(
                            e: React.ChangeEvent<HTMLSelectElement>
                          ) => {
                            form.setFieldValue("urgency", e.target.value);
                            handleChange("urgency", e.target.value);
                          }}
                        >
                          <option value="Urgent">Urgent</option>
                          <option value="Immediate joining">
                            Immediate joining
                          </option>
                          <option value="Rexaled">Rexaled</option>
                        </Select>
                        <FormErrorMessage>
                          {form.errors.urgency}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </>
              )}

              {section === "job" && (
                <>
                  <Field name="job_title">
                    {({ field, form }: any) => (
                      <FormControl
                        id="job_title"
                        mb="4"
                        isInvalid={
                          form.errors.job_title && form.touched.job_title
                        }
                      >
                        <FormLabel>Job Title</FormLabel>
                        <Input
                          type="text"
                          {...field}
                          placeholder="Enter job title"
                          onChange={(
                            e: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            form.setFieldValue("job_title", e.target.value);
                            handleChange("job_title", e.target.value);
                          }}
                        />
                        <FormErrorMessage>
                          {form.errors.job_title}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="job_details">
                    {({ field, form }: any) => (
                      <FormControl
                        id="job_details"
                        mb="4"
                        isInvalid={
                          form.errors.job_details && form.touched.job_details
                        }
                      >
                        <FormLabel>Job Details</FormLabel>
                        <Input
                          type="text"
                          {...field}
                          placeholder="Enter job details"
                          onChange={(
                            e: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            form.setFieldValue("job_details", e.target.value);
                            handleChange("job_details", e.target.value);
                          }}
                        />
                        <FormErrorMessage>
                          {form.errors.job_details}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="job_location">
                    {({ field, form }: any) => (
                      <FormControl
                        id="job_location"
                        mb="4"
                        isInvalid={
                          form.errors.job_location && form.touched.job_location
                        }
                      >
                        <FormLabel>Job Location</FormLabel>
                        <Input
                          type="text"
                          {...field}
                          placeholder="Enter job location"
                          onChange={(
                            e: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            form.setFieldValue("job_location", e.target.value);
                            handleChange("job_location", e.target.value);
                          }}
                        />
                        <FormErrorMessage>
                          {form.errors.job_location}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </>
              )}

              {section === "interview" && (
                <>
                  <Field name="interview_mode">
                    {({ field, form }: any) => (
                      <FormControl
                        id="interview_mode"
                        mb="4"
                        isInvalid={
                          form.errors.interview_mode &&
                          form.touched.interview_mode
                        }
                      >
                        <FormLabel>Interview Mode</FormLabel>
                        <Select
                          {...field}
                          placeholder="Select Interview Mode"
                          onChange={(
                            e: React.ChangeEvent<HTMLSelectElement>
                          ) => {
                            form.setFieldValue(
                              "interview_mode",
                              e.target.value
                            );
                            handleChange("interview_mode", e.target.value);
                          }}
                        >
                          <option value="Online">Online</option>
                          <option value="Offline">Offline</option>
                        </Select>
                        <FormErrorMessage>
                          {form.errors.interview_mode}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="interview_duration">
                    {({ field, form }: any) => (
                      <FormControl
                        id="interview_duration"
                        mb="4"
                        isInvalid={
                          form.errors.interview_duration &&
                          form.touched.interview_duration
                        }
                      >
                        <FormLabel>Interview Duration</FormLabel>
                        <Select
                          {...field}
                          placeholder="Select Interview Duration"
                          onChange={(
                            e: React.ChangeEvent<HTMLSelectElement>
                          ) => {
                            form.setFieldValue(
                              "interview_duration",
                              e.target.value
                            );
                            handleChange("interview_duration", e.target.value);
                          }}
                        >
                          <option value="Short">Short</option>
                          <option value="Medium">Medium</option>
                          <option value="Long">Long</option>
                        </Select>
                        <FormErrorMessage>
                          {form.errors.interview_duration}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="interview_language">
                    {({ field, form }: any) => (
                      <FormControl
                        id="interview_language"
                        mb="4"
                        isInvalid={
                          form.errors.interview_language &&
                          form.touched.interview_language
                        }
                      >
                        <FormLabel>Interview Language</FormLabel>
                        <Select
                          {...field}
                          placeholder="Select Interview Language"
                          onChange={(
                            e: React.ChangeEvent<HTMLSelectElement>
                          ) => {
                            form.setFieldValue(
                              "interview_language",
                              e.target.value
                            );
                            handleChange("interview_language", e.target.value);
                          }}
                        >
                          <option value="Hindi">Hindi</option>
                          <option value="English">English</option>
                        </Select>
                        <FormErrorMessage>
                          {form.errors.interview_language}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </>
              )}
              <Box display={"flex"} justifyContent={"end"}>
                <Stack direction="row" spacing={4}>
                  {section !== "requisition" && (
                    <Button
                      type="button"
                      mt="4"
                      onClick={() => handleBackStep()}
                    >
                      Previous
                    </Button>
                  )}
                  <Button
                    type="submit"
                    mt="4"
                    colorScheme="red"
                    //   background={"red"}
                    disabled={isSubmitting || !isValid}
                  >
                    {isLastStep ? "Submit" : "Next"}
                  </Button>
                </Stack>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>

      <Box width="40%">
        <CandidateCardPreview formValues={formValues} />
      </Box>
    </Box>
  );
};

export default CandidateForm;
