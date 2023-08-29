import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isApp3Open, setIsApp3Open] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const toggleApp3 = () => setIsApp3Open(!isApp3Open);

    const menuItem = [
        {
            path: "/",
            name: "Dashboard",
            icon: <FaTh />,
        },
        {
            path: "/app3",
            name: "App3",
            icon: <FaUserAlt />,
        },
        {
            path: "/addemp",
            name: "Addemp",
            icon: <FaCommentAlt />,
        },
        {
            path: "/emplist",
            name: "Emplist",
            icon: <FaRegChartBar />,
        },
        {
            path: "/product",
            name: "Product",
            icon: <FaShoppingBag />,
        },
        {
            path: "/productList",
            name: "Product List",
            icon: <FaThList />,
        },
    ];

    return (
        <div className="container">
            <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
                <div className="top_section">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Kitkat</h1>
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <div key={index}>
                            {/* Render App3 with submenu */}
                            {item.path === "/app3" && (
                                <div className="link" onClick={toggleApp3}>
                                    <div className="icon">{item.icon}</div>
                                    <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                                </div>
                            )}

                            {/* Render submenu items for App3 */}
                            {item.path === "/app3" && isApp3Open && (
                                <>
                                    <NavLink to="/Addemp" className="submenu-link" activeClassName="active">
                                        <div className="icon">{/* Submenu icon */}</div>
                                        <div style={{ display: isOpen ? "block" : "none" }} className="submenu-text">Addemp</div>
                                    </NavLink>
                                    <NavLink to="/Emplist" className="submenu-link" activeClassName="active">
                                        <div className="icon">{/* Submenu icon */}</div>
                                        <div style={{ display: isOpen ? "block" : "none" }} className="submenu-text">Emplist</div>
                                    </NavLink>
                                    {/* Add more submenu items as needed */}
                                </>
                            )}

                            {/* Render other items */}
                            {item.path !== "/app3" && (
                                <NavLink to={item.path} key={index} className="link" activeClassName="active">
                                    <div className="icon">{item.icon}</div>
                                    <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                                </NavLink>
                            )}
                        </div>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;
