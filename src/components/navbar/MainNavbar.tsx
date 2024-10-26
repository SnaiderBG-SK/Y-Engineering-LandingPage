"use client";

import "@/css/navbar/MobileNavbar.css";
import { Col, MenuProps, Row } from "antd";
import { useState } from "react";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

import dynamic from "next/dynamic";
import { Link } from "next-view-transitions";
import Image from "next/image";

//#region dynamic imports
const ProjectButton = dynamic(() => import("@/components/button/ProjectButton").then((mod) => mod.ProjectButton));
const MobileNavbarDrawer = dynamic(() => import("@/components/drawer/MobileNavbarDrawer").then((mod) => mod.MobileNavbarDrawer));
const Menu = dynamic(() => import("antd").then((mod) => mod.Menu));
const AnchorButton = dynamic(() => import("@/components/button/AnchorButton").then((mod) => mod.AnchorButton));
/**
 * MainNavbarProps
 */
interface MainNavbarProps {
  className?: string;
  opacity?: boolean;
}
/**
 * Functional component for the drawer component of the mobile navbar
 * @param param0
 * @returns
 */
const MainNavbar: React.FC<MainNavbarProps> = ({
  className,
  opacity = false,
}) => {
  // #region variables
  const screens = useBreakpoint();

  const menuItems: MenuProps["items"] = [
    // First menu item: HOME
    {
      label: (
        <Link href={`/`} className="text-white text-base align-middle">
          {'Home'}
        </Link>
      ),
      key: "1",
      icon: <i className="fa-solid fa-house navbar-icon"></i>,
    },
    // Second menu item: SERVICES
    {
      label: (
        <span className="text-black lg:text-white text-base align-middle">
          {'Services'}
        </span>
      ),
      key: "3",
      icon: <i className="fa-solid fa-briefcase navbar-icon"></i>,
      children: [
        // Sub-menu items for SERVICES
        {
          label: (
            <Link href={'/services/product-development'} className="text-white text-base align-middle">
              {'Product Development'}
            </Link>
          ),
          key: "7",
        },
        {
          label: (
            <Link href={'/services/pcb-design'} className="text-white text-base align-middle">
              {'PCB Design and Assembly'}
            </Link>
          ),
          key: "8",
        },
        {
          label: (
            <Link href={'/services/mechanical-engineering'} className="text-white text-base align-middle">
              {'Mechanical Engineering'}
            </Link>
          ),
          key: "9",
        },
        {
          label: (
            <Link href={'/services/prototype-development'} className="text-white text-base align-middle">
              {'Prototype Development'}
            </Link>
          ),
          key: "10",
        },
        {
          label: (
            <Link href={'/services/design-for-manufacturability'} className="text-white text-base align-middle">
              {'Design For Manufacturability'}
            </Link>
          ),
          key: "11",
        },
        {
          label: (
            <Link href={'/services/firmware-development'} className="text-white text-base align-middle">
              {'Firmware Development'}
            </Link>
          ),
          key: "12",
        }
      ],
    },
    // Third menu item: PORTFOLIO
    {
      label: (
        <Link href={`/portfolio`} className="text-white text-base align-middle">
          {'Portfolio'}
        </Link>
      ),
      key: "4",
      icon: <i className="fa-solid fa-briefcase navbar-icon"></i>,
    },
    // Fourth menu item: ABOUT US
    {
      label: (
        <Link href={`/about-us`} className="text-white text-base align-middle">
          {'About Us'}
        </Link>
      ),
      key: "2",
      icon: <i className="fa-solid fa-users navbar-icon"></i>,
    },
  ];
  // #endregion variables
  // #region state
  const [openMobileNavbar, setOpenMobileNavbar] = useState(false);
  // #endregion state
  return (
    <div className={`w-full ${opacity ? 'bg-black bg-opacity-30' : null} ${className}`}>
      <div className="w-full xl:w-11/12 xl:mx-auto 2xl:w-10/12">
        <Row className="py-4 px-8">
          {/* Logo Image */}
          <Col span={12} md={8} lg={4}>
            <Link href={`/`}>
              <div className="w-fit">
                <Image
                  src={'/img/YE_Full-Icon.png'}
                  loading="lazy"
                  alt={"Y Engineering Logo"}
                  width={445}
                  height={170}
                />
              </div>
            </Link>
          </Col>
          {/* Drawer Button */}
          {screens.lg === false && (
            <>
              <Col
                span={12}
                md={16}
                className="text-right content-center"
              >
                <ProjectButton
                  type="tertiary"
                  callBack={() => setOpenMobileNavbar(true)}
                  rounded
                >
                  <i className="fa-solid fa-bars text-xl font-normal text-white"></i>
                </ProjectButton>
              </Col>
              {/* Mobile Navbar Drawer */}
              <MobileNavbarDrawer
                menuItems={menuItems}
                open={openMobileNavbar}
                setOpen={setOpenMobileNavbar}
              />
            </>
          )}
          {screens.xl === true && (
            <>
              {/* Desktop Navbar */}
              <Col xl={16} className="flex">
                <div className="desktop-navbar w-full  my-auto">
                  <Menu
                    onClick={() => { }}
                    selectedKeys={[]}
                    mode="horizontal"
                    items={menuItems}
                    className="main-font text-white font-semibold bg-none justify-center"
                  />
                </div>
              </Col>
              {/* Call to Action Button */}
              <Col xl={4} className="flex justify-end items-center">
                <AnchorButton
                  anchorUrl={`/contact-us`}
                  buttonText={'CONTACT US'}
                />
              </Col>
            </>
          )}
        </Row>
      </div>
    </div>
  );
};

export default MainNavbar;