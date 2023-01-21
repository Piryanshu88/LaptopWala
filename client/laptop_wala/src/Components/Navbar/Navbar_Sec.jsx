import {
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import React from "react";

export const NavbarSec = ({ comp, list }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Menu isOpen={isOpen} zIndex="100000000000">
      <MenuButton
        variant="ghost"
        mx={1}
        py={[1, 2, 2]}
        px={4}
        zIndex="10000000000"
        borderRadius={1}
        _hover={{
          bg: useColorModeValue("gray.100", "gray.700"),
          borderBottom: "2px solid #444",
        }}
        aria-label="Courses"
        fontWeight="normal"
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
      >
        {comp} {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </MenuButton>
      <MenuList
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        zIndex="10000000000"
      >
        {list?.map((el) => {
          return <MenuItem>{el}</MenuItem>;
        })}
      </MenuList>
    </Menu>
  );
};
