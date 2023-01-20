import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Button,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import styles from "./Signin.module.css";

export const SignIn = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <div className={styles.signin_container}>
      <div>
        <Text textAlign={"center"} fontSize="4xl" margin={"20px"}>
          Sign In
        </Text>
        <div className={styles.google_div}>
          <FcGoogle />
          Google Sign In
        </div>
        <div className={styles.sign_form}>
          <Input placeholder="Email Address" borderRadius={"0"} />
          <InputGroup>
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              borderRadius={"0"}
            />
            <InputRightElement width="4.5rem">
              <IconButton
                h="1.75rem"
                size="sm"
                onClick={handleClick}
                as={!show ? ViewIcon : ViewOffIcon}
                color="GrayText"
              />
            </InputRightElement>
          </InputGroup>
          <Text>
            Don't remember your password?{" "}
            <span style={{ color: "var(--primary-btn-color)" }}>
              Create or Reset password
            </span>{" "}
          </Text>
          <Button className={styles.sign_btn}>Sign In</Button>
          <Text>
            Don't have a Dell Account?{" "}
            <span
              style={{ color: "var(--primary-btn-color)", cursor: "pointer" }}
            >
              Create an Account
            </span>{" "}
          </Text>
        </div>
      </div>
      <div></div>
    </div>
  );
};
