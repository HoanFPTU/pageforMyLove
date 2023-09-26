import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";

function Modals() {
  const [show, setShow] = useState(true);
  const [value, setValue] = useState("");
  const [sai, setSai] = useState(false);
  const handleClose = () => {
    if (
      value.lastIndexOf("Tuyet") !== -1 ||
      value.lastIndexOf("Tuyết") !== -1 ||
      value.lastIndexOf("tuyết") !== -1 ||
      value.lastIndexOf("tuyet") !== -1
    ) {
      setShow(false);
    } else setSai(true);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title style={{ textAlign: "center" }}>
            Chào mừng bạn đã đến với thế giới của Ánh Tuyết
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{ textAlign: "center", fontSize: "14px" }}>
                Nhập tên của bạn vào đây để Ánh Tuyết chào đón
              </Form.Label>
              <Form.Control
                placeholder="Tên của bạn"
                autoFocus
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
              {sai ? (
                <p className="mb-3" style={{ color: "red" }}>
                  Xạo xạo :V{" "}
                </p>
              ) : (
                <></>
              )}
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modals;
