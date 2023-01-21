import styles from "./Navbar.module.css";
import React, { useState } from "react";
import website_logo from "../../assets/wlogo1.png";
import {
  Button,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  ListIcon,
  ListItem,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Spinner,
  Text,
  UnorderedList,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import {
  MdOutlineSupportAgent,
  MdLanguage,
  MdCheckCircle,
} from "react-icons/md";
import { BsFillCircleFill } from "react-icons/bs";
import { ChevronUpIcon, ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { NavbarSec } from "./Navbar_Sec";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOutReq, signOutSuccess } from "../../Redux/AuthReducer/action";

const apex = [
  "View All APEX",
  "Compute & HCI",
  "Storage",
  "Cyber & Data Protection",
  "Resources",
];
const products = [
  "Laptops",
  "Desktops & All-in-Ones",
  "Gaming",
  "Workstations",
  "Thin Clients",
  "Servers",
  "Data Storage",
  "Data Protection",
  "Networking",
  "Hyperconverged Infrastructure",
  "Monitors",
];
const solutions = [
  "View All Solutions",
  "Cloud Solutions",
  "DevOps Tools and Solutions",
  "Edge Solutions",
  "Industry Solutions",
  "Infrastructure Solutions",
  "Midmarket Solutions",
  "OEM Solutions",
  "Security Solutions",
];
const services = [
  "View All Services",
  "Consulting Services",
  "Infrastructure Services",
  "Midmarket Services",
  "OEM Services",
  "Security Services",
];
const support = [
  "Support Home",
  "Support Library",
  "Support Services & Warranty",
  "Drivers & Download",
  "Manual & Documentation",
  "Diagnostics & Tools",
  "Order Support",
  "Contact Support",
  "Community",
];
const deals = [
  "Laptops Deals",
  "Desktops & All-in-Ones Deals",
  "Gaming Deals",
  "Workstations Deals",
  "Thin Clients Deals",
  "Servers Deals",
  "Data Storage Deals",
  "Data Protection Deals",
];
const store = [
  "Delhi",
  "Ludhiyana",
  "Mumbai",
  "Pune",
  "Goa",
  "Surat",
  "Uttarakhand",
];
const about = [
  "What We Do",
  "Who We Are",
  "Newsroom",
  "ESG & Impact",
  "Recycling",
  "Investors",
  "Careers",
  "Perpectives",
];

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isAuth, user } = useSelector((store) => store.authReducer);
  const toast = useToast();
  const dispatch = useDispatch();
  const [searchVal, setSearchval] = useState("");

  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchVal == "") {
      return;
    } else {
      console.log(searchVal);

      navigate(`/products/${searchVal}`);
      setSearchval("");
    }
  };
  const signOut = () => {
    dispatch(signOutReq());
    dispatch(signOutSuccess());
    toast({
      title: "signOut Successfully",
      status: "success",
      duration: 500,
      isClosable: true,
    });
  };

  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar_sec_1}>
        <div>
          <Link to="/">
            <Image
              src={website_logo}
              alt="website_logo"
              width={{ sm: "100%", md: "70%", lg: "36%" }}
            />
          </Link>
        </div>
        <div className={styles.searchbar}>
          <InputGroup>
            <Input
              placeholder="Search here..."
              borderRadius={"0"}
              width={{ sm: "", md: "300px", lg: "" }}
              onChange={(e) => setSearchval(e.target.value)}
              value={searchVal}
            />
            <InputRightElement
              children={<SearchIcon />}
              onClick={handleSearch}
            />
          </InputGroup>
        </div>
        <div className={styles.navbar_items}>
          <Menu isOpen={isOpen}>
            <MenuButton
              variant="ghost"
              mx={1}
              py={[1, 2, 2]}
              px={4}
              borderRadius={1}
              _hover={{
                bg: useColorModeValue("gray.100", "gray.700"),
              }}
              aria-label="Courses"
              fontWeight="normal"
              onMouseEnter={onOpen}
              onMouseLeave={onClose}
            >
              <div className={styles.navbar_heading}>
                <div>
                  <AiOutlineUser fontSize={"20px"} />
                </div>
                <div>{isAuth ? user : "Sign in"}</div>
                {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </div>
            </MenuButton>
            {isAuth ? (
              <MenuList
                zIndex="100000000"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
                background={"#fff"}
                _hover={{ background: "#fff" }}
              >
                <MenuItem
                  bgColor={"var(--primary-btn-color)"}
                  color="#fff"
                  textAlign={"center"}
                  fontWeight="500"
                  margin="7px"
                  paddingLeft={"110px"}
                  width={"280px"}
                  _hover={{
                    border: "1px solid var(--primary-btn-color)",
                    color: "var(--primary-btn-color)",
                  }}
                  onClick={signOut}
                >
                  SignOut
                </MenuItem>
              </MenuList>
            ) : (
              <MenuList
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
                zIndex="100000000"
                background={"#fff"}
                _hover={{ background: "#fff" }}
              >
                <div className={styles.home_sign}>
                  <Text
                    fontSize={"2xl"}
                    fontWeight="400"
                    _hover={{ background: "#fff" }}
                  >
                    Welcome to Laptopwala
                  </Text>
                  <Text _hover={{ background: "#fff" }}>My Account</Text>
                  <UnorderedList _hover={{ background: "#fff" }}>
                    <ListItem>
                      <ListIcon
                        as={BsFillCircleFill}
                        color="#444444"
                        fontSize={"10px"}
                        marginBottom="4px"
                      />
                      Create and access products
                    </ListItem>
                    <ListItem>
                      <ListIcon
                        as={BsFillCircleFill}
                        color="#444444"
                        fontSize={"10px"}
                        marginBottom="4px"
                      />
                      Place Order quickly
                    </ListItem>
                    <ListItem>
                      <ListIcon
                        as={BsFillCircleFill}
                        color="#444444"
                        fontSize={"10px"}
                        marginBottom="4px"
                      />
                      View order and track easily
                    </ListItem>
                  </UnorderedList>
                  <Button>
                    <Link to="/signin">Sign In</Link>
                  </Button>
                  <Button>
                    <Link to="/login">Create An Account</Link>
                  </Button>
                  <Button>Premier Sign In</Button>
                  <Button>Partner Premier Sign In</Button>
                </div>
              </MenuList>
            )}
          </Menu>
          <div className={styles.navbar_heading1}>
            <div>
              <MdOutlineSupportAgent fontSize={"20px"} />
            </div>
            <div>Contact </div>
          </div>
          <div className={styles.navbar_heading2}>
            <div>
              <MdLanguage fontSize={"20px"} />
            </div>
            <div>IN/EN</div>
          </div>
          <div className={styles.navbar_heading3}>
            <div>
              <AiOutlineShoppingCart fontSize={"20px"} />
            </div>
            <div>Cart</div>
          </div>
        </div>
      </div>
      <div className={styles.mobile_navbar}>
        <InputGroup>
          <Input
            placeholder="Search here..."
            borderRadius={"0"}
            onChange={(e) => setSearchval(e.target.value)}
            value={searchVal}
          />
          <InputRightElement children={<SearchIcon />} onClick={handleSearch} />
        </InputGroup>
      </div>
      <div className={styles.navbar_sec_2}>
        <NavbarSec comp="APEX" list={apex} />
        <NavbarSec comp="Products" list={products} />
        <NavbarSec comp="Services" list={services} />
        <NavbarSec comp="Solutions" list={solutions} />
        <NavbarSec comp="Support" list={support} />
        <NavbarSec comp="Deals" list={deals} />
        <NavbarSec comp="Find a Store" list={store} />
        <NavbarSec comp="About Us" list={about} />
      </div>
    </div>
  );
};
