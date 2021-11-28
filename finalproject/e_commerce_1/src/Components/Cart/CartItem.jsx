import { Card, Button } from "react-bootstrap";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

function CartItem() {
  return (
    <Card style={{ width: "18rem" }} className="mb-3">
      <Card.Img
        variant="top"
        src=""
        style={{ width: "17.9rem", height: "150px" }}
      />
      <Card.Body>
        <Card.Title>Title</Card.Title>
        <Card.Text>Description</Card.Text>
        <br />
        <div>Price:</div>
        <Button
          variant="primary"
          style={{
            position: "absolute",
            bottom: "10px",
            right: "10px",
          }}
        >
          <RemoveShoppingCartIcon />
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CartItem;
