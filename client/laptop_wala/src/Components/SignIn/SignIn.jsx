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
import { Link } from "react-router-dom";
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
          <Button
            bg={'var("primary-btn-color")'}
            borderRadius="0"
            className={styles.sign_btn}
          >
            Sign In
          </Button>
          <Text>
            Don't have a Dell Account?{" "}
            <span
              style={{ color: "var(--primary-btn-color)", cursor: "pointer" }}
            >
              <Link to="/login">Create an Account</Link>
            </span>{" "}
          </Text>
        </div>
      </div>
      <div className={styles.acc_nen}>
        <Text textAlign={"center"} fontSize="4xl" margin={"20px"}>
          Dell Account Benefits
        </Text>
        <Text textAlign={"center"}>
          My Account is an easy, more centralized way to manage your tech. Sign
          Up Now!
        </Text>
        <div>
          <div>
            <img
              style={{ margin: "auto" }}
              src="https://i.dell.com/sites/csimages/App-Merchandizing_Images/all/icon-1-tracking-36x36.png"
              alt=""
            />

            <Text fontWeight="500">Order Tracking</Text>
            <Text>
              Manage orders, track shipping status and view support history
            </Text>
          </div>
          <div>
            <img
              style={{ margin: "auto" }}
              src="https://i.dell.com/sites/csimages/App-Merchandizing_Images/all/icon-2-mail-36x36.png"
              alt=""
            />
            <Text fontWeight="500">Manage Communications</Text>
            <Text>Manage marketing and communications preferences</Text>
          </div>
          <div>
            <img
              style={{ margin: "auto" }}
              src="https://i.dell.com/sites/csimages/App-Merchandizing_Images/all/icon-3-profile-36x36.png"
              alt=""
            />
            <Text fontWeight="500">Profile Setting</Text>
            <Text>
              Save your favorite payment method and shipping details for quicker
              checkout
            </Text>
          </div>
        </div>
        <img
          src="https://i.dell.com/sites/csimages/Banner_Imagery/all/bannerimage460x460.png"
          alt=""
          style={{ margin: "auto" }}
        />
      </div>
    </div>
  );
};
