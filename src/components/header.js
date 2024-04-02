import * as React from "react"
import { Link } from "gatsby"
import { Container, Navbar } from "react-bootstrap"
import { myHeadExample } from '../css/header.module.css'

const Header = () => (
  <Navbar className={myHeadExample}>
      <Container>
        <Navbar.Brand href="#home">Site</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className={myHeadExample}>
            My site
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
)

export default Header
