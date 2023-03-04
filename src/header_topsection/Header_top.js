import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { AiTwotoneCustomerService } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import "./Header_top.css";
import Header_topmenu from "../header_topmenu/Header_topmenu";

const Header_top = () => {
  return (
    <Navbar bg="light" expand="lg" className="sticky-top">
      <Container>
        <img className="logo" src="../logo.png"></img>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="navbar" style={{ maxHeight: "100px" }} navbarScroll>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search Product Here..."
                className="search-bar"
                aria-label="Search"
              />
              <Button className="search-bar_submit" variant="outline-success">
                Search
              </Button>
            </Form>
            <div className="call">
              <AiTwotoneCustomerService className="call_icon" />
              <div className="header-service-title">Call Now </div>
              <div className="header-service-title0">0313-2858481 </div>
            </div>
            <div className="account">
              <BsPersonFill className="account_icon" />
              <div className="header-service-title2">My Account</div>
              <div className="header-service-title4">Sign in - Register</div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header_top;
