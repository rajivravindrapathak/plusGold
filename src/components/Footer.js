import React from "react";
import { Col, Layout, Row } from "antd";
import { MailFilled, ClockCircleOutlined } from "@ant-design/icons";
import {
    FacebookFilled,
    InstagramFilled,
    LinkedinFilled,
    TwitterSquareFilled,
    YoutubeFilled,
    WhatsAppOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Footer = () => {

    const { Footer } = Layout

    return ( 
        <>
            <Footer className="footer">
                <Row className="footer-row">
                    <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                        <Row>
                            <Col>
                                <p>Plus</p>
                                <p>
                                    B.No 19 H No 1413, R.S. Pal Near Mahatma Gandhi School <br />
                                    Nagpur, Maharashta, 440014 <br />
                                    Email: founder@getplus.in | Phone: +91-9035202565
                                </p>
                            </Col>
                        </Row>
                        <Row className="footer-row-2">
                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                <p className="footer-col-bx"></p>
                                <p className="footer-col-bx-2">Download our app</p>
                                
                            </Col>
                
                        </Row>
                        <Row className="footer-row-3">
                            <Col xs={24} sm={24} md={17} lg={17} xl={17}>
                                <p className="footer-col-bx-2">
                                    {/* Follow us on : &nbsp; */}   
                                    <FacebookFilled
                                        className="social-icon"
                                        style={{ backgroundColor: "#3b5998", color: "#fff" }}
                                        onClick={() => {
                                            window.open(
                                                "https://www.facebook.com/",
                                                "_blank"
                                            );
                                        }}
                                    />
                                    <InstagramFilled
                                        className="social-icon"
                                        style={{ backgroundColor: "#e1306c", color: "#fff" }}
                                        onClick={() => {
                                            window.open(
                                                "https://www.instagram.com/",
                                                "_blank"
                                            );
                                        }}
                                    />
                                    <YoutubeFilled
                                        className="social-icon"
                                        style={{ backgroundColor: "#ff0000", color: "#fff" }}
                                        onClick={() => {
                                            window.open("https://www.youtube.com/", "_blank");
                                        }}
                                    />
                                    <LinkedinFilled
                                        className="social-icon"
                                        style={{ backgroundColor: "#0077b5", color: "#fff" }}
                                        onClick={() => {
                                            window.open(
                                                "https://www.linkedin.com/company/",
                                                "_blank"
                                            );
                                        }}
                                    />
                                    <TwitterSquareFilled
                                        className="social-icon"
                                        style={{ backgroundColor: "#1da1f2", color: "#fff" }}
                                        onClick={() => {
                                            window.open("https://twitter.com/", "_blank");
                                        }}
                                    />
                                    <WhatsAppOutlined
                                        className="social-icon"
                                        style={{ backgroundColor: "#25d366", color: "#fff" }}
                                        onClick={() => {
                                            window.open("https://wa.me/916307138273", "_blank");
                                        }}
                                    />
                                </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={8} xl={8} className="footer-col-tx">
                        <div>
                            <h3>Customer Service</h3>
                            <p>Order Status</p>
                            <p>Guest Returns</p>
                            <p>Shipping & Return Policy </p>
                            <p>Gift Cards</p>
                            <p>Product Recalls</p>
                            <p>FAQ</p>
                            <p>Contact Us</p>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={8} xl={8} className="footer-col-tx">
                        <div>
                            <h3>About Us</h3>
                            <p>Order Status</p>
                            <p>Guest Returns</p>
                            <p>Shipping & Return Policy </p>
                            <p>Gift Cards</p>
                            <p>Product Recalls</p>
                            <p>FAQ</p>
                            <p>Contact Us</p>
                        </div>
                    </Col>                    
                </Row>
            </Footer>
        </>
    );
}

export default Footer;