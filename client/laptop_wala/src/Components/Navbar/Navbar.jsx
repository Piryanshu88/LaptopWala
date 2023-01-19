import styles from "./Navbar.module.css";
import React from "react";
import website_logo from "../../assets/website_logo.gif";
import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineSupportAgent, MdLanguage } from "react-icons/md";
import { ChevronUpIcon, ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { NavbarSec } from "./Navbar_Sec";

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
  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar_sec_1}>
        <div>
          <img src={website_logo} alt="website_logo" width={"20%"} />
        </div>
        <div>
          <InputGroup>
            <Input
              placeholder="Search here..."
              borderRadius={"0"}
              className={styles.input}
              width={{ sm: " 250px", md: "300px" }}
            />
            <InputRightElement children={<SearchIcon />} />
          </InputGroup>
        </div>
        <div className={styles.navbar_items}>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              background="#fff"
              borderRadius={"0"}
            >
              <div className={styles.navbar_heading}>
                <div>
                  <AiOutlineUser fontSize={"20px"} />
                </div>
                <div>Sign In</div>
              </div>
            </MenuButton>
            <MenuList _hover={{ background: "#fff" }}>
              <div className={styles.signup}>
                <Text as={"b"} marginLeft="3" marginTop={"4"} fontSize="xl">
                  Welcome to LaptopWala
                </Text>
                <Button
                  marginLeft={"10px"}
                  width={"280px"}
                  background="var(--primary-btn-color)"
                  color={"#fff"}
                  borderRadius="0
                "
                >
                  Sign In
                </Button>
                <Button>Create Account</Button>
              </div>
            </MenuList>
          </Menu>
          <div className={styles.navbar_heading1}>
            <div>
              <MdOutlineSupportAgent fontSize={"20px"} />
            </div>
            <div>Contact Us</div>
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
