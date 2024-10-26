'use client';

import { Col, Drawer, Menu, MenuProps, Row } from "antd";
import "@/css/navbar/MobileNavbar.css";
import { ProjectButton } from "@/components/button/ProjectButton";
import Image from "next/image";
/**
 * Interface for the mobile navbar drawer component
 */
interface MobileNavbarDrawerProps {
    open: boolean;
    menuItems: MenuProps["items"];
    setOpen: (open: boolean) => void;
};
/**
 * Functional component for the drawer component of the mobile navbar
 * @param param0 
 * @returns 
 */
export const MobileNavbarDrawer: React.FC<MobileNavbarDrawerProps> = ({
    open,
    setOpen,
    menuItems,
}) => {
    return (
        <Drawer
            title=""
            closable={true}
            placement="left"
            onClose={() => setOpen(false)}
            open={open}
            className=""
            styles={{
                header: {
                    display: "none"
                }
            }}
        >
            {/* Logo IMG and close button */}
            <Row>
                {/* Logo Image */}
                <Col span={16} className="text-left">
                    <Image 
                        src={"/img/YE_Full-Icon.png"} 
                        width={445}
                        height={170}
                        loading="lazy" 
                        alt={"Y Engineering Logo"} 
                    />
                </Col>
                {/* Close Button */}
                <Col span={8} className="text-right">
                    <ProjectButton 
                        type="secondary" 
                        callBack={() => setOpen(false)}
                        rounded
                    >
                        <i className="fa-solid fa-xmark text-main-color text-lg"></i>
                    </ProjectButton>
                </Col>
            </Row>
            {/* Menu Items */}
            <Row className="mt-5">
                <Col span={24}>
                    <div className="mobile-navbar">
                        <Menu
                            className="main-font text-secondary-color text-sm font-semibold w-4/6"
                            mode={'inline'}
                            theme={'light'}
                            items={menuItems}
                        />
                    </div>
                </Col>
            </Row>
        </Drawer>
    );
};