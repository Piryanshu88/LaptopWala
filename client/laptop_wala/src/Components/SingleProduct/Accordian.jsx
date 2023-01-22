import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import styles from "./Acc.module.css";
import { useState } from "react";

export const Accordian = ({ name, desc }) => {
  const [active, setActive] = useState(false);
  return (
    <Accordion
      defaultIndex={[0]}
      allowMultiple
      padding={"13px"}
      boxShadow="rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px"
      margin={"13px"}
    >
      <AccordionItem border={"none"}>
        <h2>
          <AccordionButton
            border="none"
            _hover={{ bg: "#fff", color: "var(--primary-btn-color)" }}
          >
            <Box
              as="span"
              flex="1"
              textAlign="left"
              border="none"
              fontWeight={"500"}
              fontSize="lg"
            >
              {name}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} border="none">
          <Flex gap={"10px"}>
            {desc?.map((el) => {
              return (
                <Box
                  className={active ? `${styles.active}` : ""}
                  width={"199px"}
                  margin="10px"
                  border={"1px dotted #444444 "}
                  padding="13px"
                  paddingBottom={"20px"}
                  cursor="pointer"
                  onClick={() => setActive(!active)}
                >
                  {el}
                </Box>
              );
            })}
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
