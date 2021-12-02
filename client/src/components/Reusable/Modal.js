/* eslint-disable no-unused-expressions */
import React from "react";
import Modal from "react-modal";
import Button from "./Button";
import "../../styles/components/Modal.css";
import Close from '../../assets/close.svg'
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function Index({ label,title }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleClick = (e) => {
    e.preventDefault();
    openModal();
  };
  return (
    <div >
      {label === "Book Now" ? (
        <button className="modal_btn" onClick={handleClick}>
          {label}
        </button>
      ) : (
        <span onClick={openModal} className="button">
          {label}
        </span>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className='modal_body'
      >
        <button onClick={closeModal} className='close'><img src={Close} alt=""/></button>

        <div className="modal_body">
          <form  className='modal_form'>
          <h4>{title}</h4>

<button>Login with Email</button>
<button>Login with Google</button>
          </form>
         
        </div>
      </Modal>
    </div>
  );
}

export default Index;
