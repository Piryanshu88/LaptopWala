import React, { useState } from "react";
import styles from "./Login.module.css";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { SignUp, signUpReq } from "../../Redux/AuthReducer/action";
import { useEffect } from "react";
export const Login = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const dispatch = useDispatch();
  const data = useSelector((store) => store.authReducer);
  const [error, setError] = useState("");
  const [signupFormVal, setSignupForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(signUpReq());
    if (
      signupFormVal.name === "" ||
      signupFormVal.email === "" ||
      signupFormVal.mobile === "" ||
      signupFormVal.password === ""
    ) {
      //console.log("hello");
      setError("Please, fill all the Credentials!!");
    } else {
      SignUp(signupFormVal);
    }
  };
  useEffect(() => {
    console.log(data);
  });
  return (
    <div className={styles.signin_container}>
      <div>
        <Text textAlign={"center"} fontSize="4xl" margin={"20px"}>
          Create your Account
        </Text>
        <Text marginBottom={"20px"}>
          Already have a Dell Account?{" "}
          <span
            style={{
              color: "var(--primary-btn-color)",
              cursor: "pointer",
              marginBottom: "0px",
            }}
          >
            <Link to="/signin">Sign In</Link>
          </span>{" "}
        </Text>
        <div className={styles.sign_form}>
          <InputGroup gap={"10px"}>
            <Input
              borderRadius={"0"}
              placeholder="First Name"
              onChange={(e) =>
                setSignupForm((prev) => ({
                  ...prev,
                  firstName: e.target.value,
                }))
              }
            />
            <Input
              borderRadius={"0"}
              placeholder="Last Name"
              onChange={(e) =>
                setSignupForm((prev) => ({
                  ...prev,
                  lastName: e.target.value,
                }))
              }
            />
          </InputGroup>
          <Input
            placeholder="Email Address"
            borderRadius={"0"}
            onChange={(e) =>
              setSignupForm((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
          />
          <InputGroup>
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              borderRadius={"0"}
              onChange={(e) =>
                setSignupForm((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
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
          <Text lineHeight={"2rem"} textAlign="start" marginTop={"30px"}>
            Dell Technologies and its group of companies (“Dell”) would like to
            stay in touch and update you on products, services, solutions,
            exclusive offers, and special events. For more details about our
            information practices, see our Privacy Statement. You can
            unsubscribe at any time.
          </Text>
          <Button
            bg={'var("primary-btn-color")'}
            borderRadius="0"
            className={styles.sign_btn}
            onClick={handleSignUp}
          >
            Create Account
          </Button>
          <Button
            bg={'var("primary-btn-color")'}
            borderRadius="0"
            className={styles.sign_btn1}
          >
            <Link to="/">Cancel</Link>
          </Button>
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
