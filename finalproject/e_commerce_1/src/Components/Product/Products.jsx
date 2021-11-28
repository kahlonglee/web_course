import { Container, Row, Col } from "react-bootstrap";
import Product from "./Product";

function Products({ products }) {
  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Col>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
