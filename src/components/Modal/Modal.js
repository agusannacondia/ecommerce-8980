import { useState, useContext } from "react";
import { CartContext } from "../../contexts/Cart/CartContext";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./Modal.css";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import success from "../../assets/success.png";


const getPriceString = (price) => {
  return `$ ${price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
};

export const ModalCartResume = ({ show, handleClose, handleAccept }) => {
  const { order } = useContext(CartContext);
  return (
    <Modal
      show={show}
      onHide={handleClose}
      className="modalCartResume"
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Resumen de compra</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped hover borderless>
          <thead>
            <tr>
              <th>Tu orden</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {order &&
              order.items.length > 0 &&
              order.items.map((data) => (
                <tr>
                  <td>{data.title}</td>
                  <td>{data.quantity}</td>
                  <td>{`${getPriceString(data.price)}`}</td>
                  <td>{`${getPriceString(data.price * data.quantity)}`}</td>
                </tr>
              ))}
          </tbody>
        </Table>
        {order && (
          <h5 className="modalTotal">
            Total <b>{getPriceString(order.amount)}</b>
          </h5>
        )}
      </Modal.Body>
      <Modal.Footer className="modalFooter">
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="success" onClick={handleAccept}>
          Siguiente
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export const ModalUserData = ({ show, handleClose, handleAccept }) => {
  const [validated, setValidated] = useState(false);
  const [userData, setUserData] = useState({
    state: "Buenos Aires",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      handleAccept(userData);
    }
    setValidated(true);
  };

  return (
      <Modal
        show={show}
        onHide={handleClose}
        className="modalUserData"
        size="lg"
        centered
      >
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Información del cliente</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="formGridPassword">
              <Form.Label>Nombre y Apellido</Form.Label>
              <Form.Control
                placeholder="Juan Perez"
                required
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    name: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                required
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    email: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridAddress1">
                <Form.Label>Dirección</Form.Label>
                <Form.Control
                  placeholder="Calle falsa 123"
                  required
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      address: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Provincia</Form.Label>
                <Form.Control
                  as="select"
                  defaultValue="Buenos Aires"
                  required
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      state: e.target.value,
                    });
                  }}
                >
                  <option>Buenos Aires</option>
                  <option>Catamarca</option>
                  <option>Chaco</option>
                  <option>Chubut</option>
                  <option>Córdoba</option>
                  <option>Corrientes</option>
                  <option>Entre Ríos</option>
                  <option>Formosa</option>
                  <option>Jujuy</option>
                  <option>La Pampa</option>
                  <option>La Rioja</option>
                  <option>Mendoza</option>
                  <option>Misiones</option>
                  <option>Neuquén</option>
                  <option>Río Negro</option>
                  <option>Salta</option>
                  <option>San Juan</option>
                  <option>Santa Cruz</option>
                  <option>Santa Fe</option>
                  <option>Santiago del Estero</option>
                  <option>Tierra del Fuego</option>
                  <option>Tucumán</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Ciudad</Form.Label>
                <Form.Control
                  required
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      city: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Código postal</Form.Label>
                <Form.Control
                  type="number"
                  required
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      zipCode: e.target.value,
                    })
                  }
                />
              </Form.Group>
            </Form.Row>
          </Modal.Body>
          <Modal.Footer className="modalFooter">
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="success" type="submit">
              Comprar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
  );
};

export const ModalSuccess = ({ show, handleClose, handleAccept }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      className="modalCartSuccess"
      size="lg"
      centered
    >
      <Modal.Body>
        <img src={success} alt="success" />
        <p>
          <b>Gracias por confiar en nosotros!</b>
        </p>
      </Modal.Body>
      <Modal.Footer className="modalFooter">
        <Button variant="success" onClick={handleAccept}>
          Seguir comprando
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
