import {
  Navbar,
  Container,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";
import "./style.css";

const Nav1 = () => {
  return (
    <>
      <Navbar collapseOnSelect bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">E-COMMERCE</Navbar.Brand>

          <InputGroup>
            <FormControl
              placeholder="Search for products, brands and more"
              style={{ overflow: "hidden" }}
            />
            <Button variant="light" id="button-addon2">
              <SearchIcon />
            </Button>
          </InputGroup>

          <Button className="button">
            <ShoppingCartIcon />
            <span className="span">20</span>
          </Button>

          <Link to="/login">
            <Button>
              <LoginIcon />
            </Button>
          </Link>
        </Container>
      </Navbar>
    </>
  );
};

export default Nav1;
