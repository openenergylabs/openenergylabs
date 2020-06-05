import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import MailFrom from "./form";
import Mailchimp from "react-mailchimp-form";
import Chimp from "./test";

function MailModal(props) {
  const url =
    "https://localelectricity.us18.list-manage.com/subscribe/post?u=328c04fd31c51095b1b1cf5a5&amp;id=294299a867";
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Register</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <MailFrom
              status={status}
              message={message}
              onValidated={(formData) => {
                console.log(formData);
                subscribe(formData);
              }}
            />
          )}
        /> */}
        <Chimp />
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default MailModal;
