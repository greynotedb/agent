"use client";
import { FC, useState } from "react";
import {
  Box,
  Text,
  Flex,
  Image,
  Input,
  Button,
  Link,
  Tabs,
  TabPanel,
  TabPanels,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useDisclosure,
  Avatar,
  Select,
  Checkbox,
  useToast,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import ImageUpload from "@/components/shared/ImageUpload";
import * as Yup from 'yup'

interface SignupProps {}

const Signup: FC<SignupProps> = ({}) => {
  const [tabIndex, setTabIndex] = useState(0);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [profileUrl, setProfileUrl] = useState("");
  const toast = useToast();

  const handleTabsChange = () => {
    setTabIndex(tabIndex + 1);
  };

  const handleProfileUrlChange = (url: any) => {
    setProfileUrl(url);
  };

  // Yup schema to validate the form
  const schema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    middleName: Yup.string().required("Middle name is required"),
    phoneNumber: Yup.number().required("Phone number is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid Email Format"),
    password: Yup.string().required().min(7),
  });

  return (
    <Flex justifyContent={"center"} minH={"100vh"} alignItems={"center"}>
      <Box
        backgroundColor={"#313131"}
        p={"1.5rem"}
        rounded={"lg"}
        w={{ base: "25rem", lg: "35rem" }}
      >
        <Flex justifyContent={tabIndex > 1 ? "center" : "space-between"}>
          <Image
            src={"/images/agentslogo.svg"}
            width={{ base: "10rem", md: "13rem" }}
          />
          <Box
            border={"2px solid #fff"}
            rounded={"full"}
            justifyContent={"center"}
            alignItems={"center"}
            w={{ base: "1rem", md: "2rem" }}
            h={{ base: "1rem", md: "2rem" }}
            display={"flex"}
          >
            <Text color={"#fff"}>{tabIndex + 1}</Text>
          </Box>
        </Flex>

        <Box my={tabIndex > 1 ? "0" : "1.5rem"} textAlign={"center"}>
          <Text
            color={"#EAEAEA"}
            mt={tabIndex > 1 ? "2rem" : "0"}
            fontSize={{ base: "lg", md: "2xl" }}
            fontWeight={"600"}
          >
            {tabIndex === 0
              ? "Become a Greynote Agent"
              : "Profile Verification"}
          </Text>
        </Box>

        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            middleName: "",
            email: "",
            phoneNumber: "",
            password: "",
            docType: "",
            file: "",
            docConsent: false,
          }}
          onSubmit={(values, actions) => {
            toast({
              title: "Account created",
              description:
                "Your account was created successfully, you will be redirected soon.",
              position: "bottom",
              isClosable: true,
              status: "success",
            });
            actions.setSubmitting(false);
          }}
          validationSchema={schema}
        >
          {(props) => (
            <Form>
              <Tabs
                index={tabIndex}
                variant="unstyled"
                onChange={handleTabsChange}
              >
                <TabPanels>
                  <TabPanel p={0}>
                    <Flex
                      gap={5}
                      mb={"1.2rem"}
                      flexDir={{ base: "column", md: "row" }}
                    >
                      <Field name="firstName">
                        {({ field, form }: any) => (
                          <FormControl
                            isInvalid={
                              form.errors.firstName && form.touched.firstName
                            }
                          >
                            <Box w={"full"}>
                              <FormLabel color={"#999999"} fontSize={"xs"}>
                                First Name
                              </FormLabel>
                              <Input
                                {...field}
                                autoFocus={true}
                                border={"1px solid #747474"}
                                size={{ base: "sm", md: "lg" }}
                                h={"2.3rem"}
                                rounded={"md"}
                                color={"#fff"}
                                fontSize={"sm"}
                              />
                              <FormErrorMessage>
                                {form.errors.firstName}
                              </FormErrorMessage>
                            </Box>
                          </FormControl>
                        )}
                      </Field>

                      <Field name="lastName">
                        {({ field, form }: any) => (
                          <FormControl
                            isInvalid={
                              form.errors.lastName && form.touched.lastName
                            }
                          >
                            <Box w={"full"}>
                              <FormLabel color={"#999999"} fontSize={"xs"}>
                                Last Name
                              </FormLabel>
                              <Input
                                {...field}
                                border={"1px solid #747474"}
                                size={{ base: "sm", md: "lg" }}
                                h={"2.3rem"}
                                rounded={"md"}
                                color={"#fff"}
                                fontSize={"sm"}
                              />
                              <FormErrorMessage>
                                {form.errors.lastName}
                              </FormErrorMessage>
                            </Box>
                          </FormControl>
                        )}
                      </Field>
                    </Flex>

                    <Field name="middleName">
                      {({ field, form }: any) => (
                        <FormControl
                          isInvalid={
                            form.errors.middleName && form.touched.middleName
                          }
                        >
                          <Box w={"full"} mb={"1.2rem"}>
                            <FormLabel color={"#999999"} fontSize={"xs"}>
                              Middle Name
                            </FormLabel>
                            <Input
                              {...field}
                              border={"1px solid #747474"}
                              size={{ base: "sm", md: "lg" }}
                              h={"2.3rem"}
                              rounded={"md"}
                              color={"#fff"}
                              fontSize={"sm"}
                            />
                            <FormErrorMessage>
                              {form.errors.middleName}
                            </FormErrorMessage>
                          </Box>
                        </FormControl>
                      )}
                    </Field>

                    <Flex
                      gap={5}
                      mb={"1.2rem"}
                      flexDir={{ base: "column", md: "row" }}
                    >
                      <Field name="email">
                        {({ field, form }: any) => (
                          <FormControl
                            isInvalid={form.errors.email && form.touched.email}
                          >
                            <Box w={"full"}>
                              <FormLabel color={"#999999"} fontSize={"xs"}>
                                Email Address
                              </FormLabel>
                              <Input
                                {...field}
                                type="email"
                                border={"1px solid #747474"}
                                size={{ base: "sm", md: "lg" }}
                                h={"2.3rem"}
                                rounded={"md"}
                                color={"#fff"}
                                fontSize={"sm"}
                              />
                              <FormErrorMessage>
                                {form.errors.email}
                              </FormErrorMessage>
                            </Box>
                          </FormControl>
                        )}
                      </Field>

                      <Field name="phoneNumber">
                        {({ field, form }: any) => (
                          <FormControl
                            isInvalid={
                              form.errors.phoneNumber &&
                              form.touched.phoneNumber
                            }
                          >
                            <Box w={"full"}>
                              <FormLabel color={"#999999"} fontSize={"xs"}>
                                Phone Number
                              </FormLabel>
                              <Input
                                {...field}
                                type="tel"
                                border={"1px solid #747474"}
                                size={{ base: "sm", md: "lg" }}
                                h={"2.3rem"}
                                rounded={"md"}
                                color={"#fff"}
                                fontSize={"sm"}
                              />
                              <FormErrorMessage>
                                {form.errors.phoneNumber}
                              </FormErrorMessage>
                            </Box>
                          </FormControl>
                        )}
                      </Field>
                    </Flex>

                    <Field name="password">
                      {({ field, form }: any) => (
                        <FormControl
                          isInvalid={
                            form.errors.password && form.touched.password
                          }
                        >
                          <Box w={"full"} mb={"1.2rem"}>
                            <FormLabel color={"#999999"} fontSize={"xs"}>
                              Password
                            </FormLabel>
                            <Input
                              {...field}
                              type="password"
                              border={"1px solid #747474"}
                              size={{ base: "sm", md: "lg" }}
                              h={"2.3rem"}
                              rounded={"md"}
                              color={"#fff"}
                              fontSize={"sm"}
                            />
                            <FormErrorMessage>
                              {form.errors.password}
                            </FormErrorMessage>
                          </Box>
                        </FormControl>
                      )}
                    </Field>

                    <Flex justifyContent={"center"}>
                      <Button
                        mt={4}
                        backgroundColor={"#007C7B"}
                        color={"#fff"}
                        fontWeight={"400"}
                        w={"17rem"}
                        onClick={() => {
                          if (props.isValid) {
                            handleTabsChange();
                          }
                        }}
                        type='submit'
                        _hover={{ backgroundColor: "#099C9B" }}
                      >
                        Continue
                      </Button>
                    </Flex>

                    <Text
                      textAlign={"center"}
                      color={"#fff"}
                      fontWeight={"400"}
                      fontSize={"md"}
                      mt={"0.5rem"}
                    >
                      By continuing, you agree to our Terms of Use
                    </Text>

                    <Flex justifyContent="center" my={"1rem"}>
                      <Text
                        textAlign={"center"}
                        color={"#fff"}
                        fontSize={"md"}
                        fontWeight={"300"}
                      >
                        Already have an account?{" "}
                        <Link
                          href="/login"
                          fontWeight={"500"}
                          color={"#007C7B"}
                        >
                          {" "}
                          {"Sign in ->"}{" "}
                        </Link>
                      </Text>
                    </Flex>
                  </TabPanel>

                  <TabPanel p={0}>
                    <Flex justifyContent={"center"}>
                      <Avatar size={"lg"} src={profileUrl} />
                    </Flex>

                    <Flex justifyContent={"center"} mb={"1.5rem"}>
                      <Button
                        mt={4}
                        backgroundColor={"#007C7B"}
                        color={"#fff"}
                        fontWeight={"400"}
                        w={"17rem"}
                        onClick={() => {
                          handleTabsChange;
                          onOpen();
                        }}
                        _hover={{ backgroundColor: "#099C9B" }}
                      >
                        Add profile picture
                      </Button>
                      <ImageUpload
                        isModalOpen={isOpen}
                        onModalClose={onClose}
                        profileUrl={handleProfileUrlChange}
                      />
                    </Flex>

                    <Flex
                      gap={5}
                      mb={"1.2rem"}
                      flexDir={{ base: "column", md: "row" }}
                    >
                      <Field name="docType">
                        {({ field, form }: any) => (
                          <FormControl
                          // isInvalid={form.errors.name && form.touched.name}
                          >
                            <Box w={"full"}>
                              <FormLabel color={"#999999"} fontSize={"xs"}>
                                Document Type
                              </FormLabel>
                              <Select
                                placeholder="Select document"
                                {...field}
                                border={"1px solid #747474"}
                                size={{ base: "sm", md: "lg" }}
                                h={"2.3rem"}
                                rounded={"md"}
                                fontSize={"sm"}
                                variant={"filled"}
                              >
                                <option value="Utility bill" color="#fff">
                                  Utility bill under your name (electricity,
                                  water, gas, Internet etc.)
                                </option>
                                <option value={"Bank Statement"}>
                                  Bank account statement (includes Bank Credit
                                  Card bill)
                                </option>
                                <option value={"Driving license"}>
                                  Driving license
                                </option>
                                <option value={"International passport"}>
                                  International passport
                                </option>
                              </Select>
                              {/* <FormErrorMessage>
                                {form.errors.name}
                              </FormErrorMessage> */}
                            </Box>
                          </FormControl>
                        )}
                      </Field>

                      <Field name="file">
                        {({ field, form }: any) => (
                          <FormControl
                          // isInvalid={form.errors.file && form.touched.file}
                          >
                            <Box w={"full"} mb={"1.2rem"}>
                              <FormLabel color={"#999999"} fontSize={"xs"}>
                                Upload Document
                              </FormLabel>
                              <label htmlFor="file-input">
                                <Button
                                  as="span"
                                  backgroundColor={"#007C7B"}
                                  color={"#fff"}
                                  fontWeight={"400"}
                                  w={"17rem"}
                                  _hover={{ backgroundColor: "#099C9B" }}
                                >
                                  Add Document
                                </Button>
                                <Input
                                  type="file"
                                  id="file-input"
                                  onChange={(event) => {
                                    const selectedFile =
                                      event.currentTarget.files?.[0];
                                    form.setFieldValue("file", selectedFile);
                                  }}
                                  display={"none"}
                                />
                              </label>
                            </Box>
                            {/* <FormErrorMessage>
                              {form.errors.file}
                            </FormErrorMessage> */}
                          </FormControl>
                        )}
                      </Field>
                    </Flex>

                    <Field name="docConsent">
                      {({ field, form }: any) => (
                        <FormControl
                        // isInvalid={form.errors.file && form.touched.file}
                        >
                          <Box w={"full"} mb={"1.2rem"} textAlign={"center"}>
                            <Checkbox {...field} color={"#fff"} fontSize={"sm"}>
                              I agree that the documents uploaded belong to me
                            </Checkbox>
                          </Box>
                          {/* <FormErrorMessage>
                            {form.errors.file}
                          </FormErrorMessage> */}
                        </FormControl>
                      )}
                    </Field>

                    <Flex justifyContent={"center"}>
                      <Button
                        mt={4}
                        backgroundColor={"#007C7B"}
                        color={"#fff"}
                        type="submit"
                        fontWeight={"400"}
                        w={"17rem"}
                        _hover={{ backgroundColor: "#099C9B" }}
                        isLoading={props.isSubmitting}
                        isDisabled={!props.values.docConsent ? true : false}
                      >
                        Continue
                      </Button>
                    </Flex>

                    <Flex justifyContent="center" my={"1rem"}>
                      <Text
                        textAlign={"center"}
                        color={"#fff"}
                        fontSize={"md"}
                        fontWeight={"300"}
                      >
                        Already have an account?{" "}
                        <Link
                          href="/login"
                          fontWeight={"500"}
                          color={"#007C7B"}
                        >
                          {" "}
                          {"Sign in ->"}{" "}
                        </Link>
                      </Text>
                    </Flex>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};

export default Signup;
