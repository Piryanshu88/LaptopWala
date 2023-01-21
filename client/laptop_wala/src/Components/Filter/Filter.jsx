import {
  AddIcon,
  MinusIcon,
  TriangleDownIcon,
  TriangleUpIcon,
} from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  Text,
} from "@chakra-ui/react";
import React from "react";
import styles from "./Filter.module.css";
export const Filter = () => {
  return (
    <div className={styles.filter_comp}>
      <div>
        <Text fontSize="lg">Filter Results</Text>
      </div>
      <div>
        <Accordion defaultIndex={[0]} allowMultiple border={"none"}>
          <AccordionItem border={"none"}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton
                    display="flex"
                    justifyContent={"space-between"}
                    _hover={{ background: "#f3f3f3", fontWeight: "500" }}
                  >
                    <Text fontSize={"lg"} color={"var(--filter-tag)"}>
                      Screen Size
                    </Text>
                    {isExpanded ? (
                      <TriangleDownIcon fontSize="12px" />
                    ) : (
                      <TriangleUpIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <div className={styles.filters}>
                    <Checkbox>38.10 cm (15 inch)(11)</Checkbox>
                    <Checkbox>35.10 cm (14 inch)(1)</Checkbox>
                  </div>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <Accordion defaultIndex={[0]} allowMultiple border={"none"}>
          <AccordionItem border={"none"}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton
                    _hover={{ background: "#f3f3f3", fontWeight: "500" }}
                    display="flex"
                    justifyContent={"space-between"}
                  >
                    <Text fontSize={"lg"} color={"var(--filter-tag)"}>
                      Form Factor
                    </Text>
                    {isExpanded ? (
                      <TriangleDownIcon fontSize="12px" />
                    ) : (
                      <TriangleUpIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <div className={styles.filters}>
                    <Checkbox>Laptop (12)</Checkbox>
                  </div>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <Accordion defaultIndex={[0]} allowMultiple border={"none"}>
          <AccordionItem border={"none"}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton
                    _hover={{ background: "#f3f3f3", fontWeight: "500" }}
                    display="flex"
                    justifyContent={"space-between"}
                  >
                    <Text fontSize={"lg"} color={"var(--filter-tag)"}>
                      Processor
                    </Text>
                    {isExpanded ? (
                      <TriangleDownIcon fontSize="12px" />
                    ) : (
                      <TriangleUpIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <div className={styles.filters}>
                    <Checkbox>All Intel Processors</Checkbox>
                    <Checkbox>Intel Core i5</Checkbox>
                    <Checkbox>Intel Core i7</Checkbox>
                    <Checkbox>Intel Core i3</Checkbox>
                    <Checkbox>All AMD Processors</Checkbox>
                    <Checkbox>AMD Ryzen 5</Checkbox>
                  </div>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <Accordion defaultIndex={[0]} allowMultiple border={"none"}>
          <AccordionItem border={"none"}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton
                    _hover={{ background: "#f3f3f3", fontWeight: "500" }}
                    display="flex"
                    justifyContent={"space-between"}
                  >
                    <Text fontSize={"lg"} color={"var(--filter-tag)"}>
                      Processor Generation
                    </Text>
                    {isExpanded ? (
                      <TriangleDownIcon fontSize="12px" />
                    ) : (
                      <TriangleUpIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <div className={styles.filters}>
                    <Checkbox>12th Gen Intel Core</Checkbox>
                    <Checkbox>11th Gen Intel Core</Checkbox>
                    <Checkbox>AMD Ryzen 5000 Series</Checkbox>
                  </div>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <Accordion defaultIndex={[0]} allowMultiple border={"none"}>
          <AccordionItem border={"none"}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton
                    _hover={{ background: "#f3f3f3", fontWeight: "500" }}
                    display="flex"
                    justifyContent={"space-between"}
                  >
                    <Text fontSize={"lg"} color={"var(--filter-tag)"}>
                      Memory (RAM)
                    </Text>
                    {isExpanded ? (
                      <TriangleDownIcon fontSize="12px" />
                    ) : (
                      <TriangleUpIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <div className={styles.filters}>
                    <Checkbox>16 GB </Checkbox>
                    <Checkbox>8 GB </Checkbox>
                  </div>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <Accordion defaultIndex={[0]} allowMultiple border={"none"}>
          <AccordionItem border={"none"}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton
                    _hover={{ background: "#f3f3f3", fontWeight: "500" }}
                    display="flex"
                    justifyContent={"space-between"}
                  >
                    <Text fontSize={"lg"} color={"var(--filter-tag)"}>
                      Storage Size
                    </Text>
                    {isExpanded ? (
                      <TriangleDownIcon fontSize="12px" />
                    ) : (
                      <TriangleUpIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <div className={styles.filters}>
                    <Checkbox>1 TB or More</Checkbox>
                    <Checkbox>1 TB </Checkbox>
                    <Checkbox>512 GB</Checkbox>
                    <Checkbox>256 GB or Less</Checkbox>
                  </div>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <Accordion defaultIndex={[0]} allowMultiple border={"none"}>
          <AccordionItem border={"none"}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton
                    _hover={{ background: "#f3f3f3", fontWeight: "500" }}
                    display="flex"
                    justifyContent={"space-between"}
                  >
                    <Text
                      fontSize={"lg"}
                      // marginRight="110px"
                      color={"var(--filter-tag)"}
                    >
                      Storage Type
                    </Text>
                    {isExpanded ? (
                      <TriangleDownIcon fontSize="12px" />
                    ) : (
                      <TriangleUpIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <div className={styles.filters}>
                    <Checkbox>Dual Drive</Checkbox>
                    <Checkbox>SSD </Checkbox>
                  </div>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
