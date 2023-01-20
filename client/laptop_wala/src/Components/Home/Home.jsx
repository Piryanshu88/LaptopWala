import styles from "./Home.module.css";
import React from "react";
import { Button, Text } from "@chakra-ui/react";
import laptop1 from "../../assets/Screenshot_20230120_052234.png";
import { BiSupport } from "react-icons/bi";
export const Home = () => {
  return (
    <div className={styles.home_container}>
      <div className={styles.home_box}>
        <div>
          <Text color={"#444444"} fontSize="xl">
            REPBULIC DAY OFFERS
          </Text>
          <Text color={"#444444"} fontSize="4xl">
            Be Free to Be More
          </Text>
          <Text fontWeight={"500"} fontSize="lg">
            Get 10% cashback up to ₹5,000 on Citi cards & 2 years onsite
            warranty at ₹1*
          </Text>
          <div className={styles.home_btn}>
            <Button>Shop Deals</Button>
            <Button>Monitor Deals</Button>
          </div>
        </div>
        <div>
          <img src={laptop1} alt="" />
        </div>
      </div>
      <div className={styles.home_info}>
        <Text fontSize={"3xl"} padding-bottom="20px">
          Welcome Back
        </Text>
        <div>
          <div>
            <div>
              <Text fontSize="3xl">Best Seller</Text>
            </div>
            <div>
              <div>
                <img
                  src="https://i.dell.com/sites/csimages/UberHomePage_Imagery/all/xpss.png"
                  alt=""
                />
              </div>
              <div>Get our laptops for less</div>
            </div>
            <div className={styles.home_info_btn}>Show Now</div>
          </div>
          <div>
            <div>
              <Text fontSize="3xl">Best Seller</Text>
            </div>
            <div>
              <div>
                <img
                  src="https://i.dell.com/sites/csimages/UberHomePage_Imagery/all/xpss.png"
                  alt=""
                />
              </div>
              <div>Get our laptops for less</div>
            </div>
            <div className={styles.home_info_btn}>Show Now</div>
          </div>
          <div>
            <div>
              <Text fontSize="3xl">Best Seller</Text>
            </div>
            <div>
              <div>
                <img
                  src="https://i.dell.com/sites/csimages/UberHomePage_Imagery/all/xpss.png"
                  alt=""
                />
              </div>
              <div>Get our laptops for less</div>
            </div>
            <div className={styles.home_info_btn}>Show Now</div>
          </div>
        </div>
      </div>
      <div className={styles.home_box_1}>
        <div>
          <img
            src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/apj/modules/republic-day-cons-dell-inspiron-5420nt-uhp-2304-12-homepage-module-rf-1023x842-lr.png?fmt=png-alpha&wid=1023&hei=842"
            alt=""
          />
        </div>
        <div>
          <Text fontSize={"xl"}>INSPIRON LAPTOPS</Text>
          <Text fontSize={"3xl"}>Power Your Success Story</Text>
          <Text fontSize={"lg"} fontWeight="400" width="80%" margin={"auto"}>
            Give yourself a tech edge with 10% cashback on Citi cards or instant
            discounts on UPI & headsets.
          </Text>
          <Text fontSize={"sm"}>*T&C apply</Text>
          <div>
            <Text>Shop Now</Text>
            <Text>Learn More</Text>
          </div>
        </div>
      </div>
      <div className={styles.home_box_2}>
        <div>
          <Text fontSize={"xl"}>ALIENWARE 27 GAMING MONITOR</Text>
          <Text fontSize={"3xl"}>Outshine Everyone</Text>
          <Text fontSize={"lg"} fontWeight="400" width="80%" margin={"auto"}>
            Built-in bragging rights with premium performance, overclockable
            refresh rates up to 280Hz and more.
          </Text>
          <div>
            <Text>Shop Now</Text>
            <Text>Learn More</Text>
          </div>
        </div>
        <div>
          <img
            src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/apj/modules/monitor-aw2723df-1.png?fmt=png-alpha&wid=1023&hei=842"
            alt=""
          />
        </div>
      </div>
      <div className={styles.home_box_1}>
        <div>
          <img
            src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/apj/modules/republic-day-cons-dell-vostro-3525nt-uhp-2304-12-in-homepage-module-rf-1023x842.png?fmt=png-alpha&wid=1023&hei=842"
            alt=""
          />
        </div>
        <div>
          <Text fontSize={"xl"}>VOSTRO LAPTOPS</Text>
          <Text fontSize={"3xl"}>Power Your Business Today</Text>
          <Text fontSize={"lg"} fontWeight="400" width="80%" margin={"auto"}>
            More power to you with 10% cashback on Citi cards & Alienware
            headsets.
          </Text>
          <Text fontSize={"sm"}>*T&C apply</Text>
          <div>
            <Text>Shop Now</Text>
            <Text>Learn More</Text>
          </div>
        </div>
      </div>
      <div className={styles.home_support}>
        <div>
          <Text>Dell Support</Text>
          <Text>Get your questions answered</Text>
        </div>
        <div>
          <div>
            <div>
              <BiSupport fontSize={"30px"} color="var(--primary-btn-color)" />
            </div>
            <div>
              <Text
                color="var(--primary-btn-color)"
                fontSize={"xl"}
                fontWeight="500"
              >
                Contact Support
              </Text>
              <Text fontSize={"large"}>
                Let us assist you with any product or service questions
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
