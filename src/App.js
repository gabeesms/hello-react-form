import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Row, Col, Container } from "react-bootstrap";

class App extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control type="name" placeholder="Digite seu nome" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Digite seu email" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Endereço</Form.Label>
                <Form.Control placeholder="Rua Acácia Meleira" />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Cidade</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Estado</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Escolher...</option>
                    <option>Minas Gerais</option>
                    <option>Pernambuco</option>
                    <option>Pará</option>
                    <option>Paraiba</option>
                    <option>Espírito Santo</option>
                    <option>Amazonas</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCep">
                  <Form.Label>CEP</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>

              <Button variant="primary" type="submit">
                Salvar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;

