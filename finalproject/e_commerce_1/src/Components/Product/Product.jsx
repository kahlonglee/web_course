import { Card, Button } from "react-bootstrap";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import React from "react";
import { img } from "../../Static/ProductImg";

function Product({ product }) {
  const onClick = () => {
    console.log("This is clicked from Cart");
  };

  return (
    <Card style={{ width: "18rem" }} className="mb-3">
      <Card.Img
        variant="top"
        src={img}
        style={{ width: "17.9rem", height: "150px" }}
      />
      <Card.Body>
        <Card.Title>{product.productID}</Card.Title>
        <Card.Text>{product.productName}</Card.Text>
        <br />
        <div>Price: ${product.price}</div>
        <Button
          variant="primary"
          style={{
            position: "absolute",
            bottom: "10px",
            right: "10px",
          }}
          onClick={onClick}
        >
          <AddShoppingCartIcon />
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
