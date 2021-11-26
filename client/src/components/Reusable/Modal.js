import React from "react";
import Modal from "react-modal";
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

function Index({label}) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

 

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <span onClick={openModal} className='button' >{label}</span>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
          
        <button onClick={closeModal}>X</button>
      
      <div className='modal_body'>
          <h4>Welcome to xDAStays</h4>

          <button>Login with Email</button>
          <button>Login with Google</button>

      </div>
      </Modal>
    </div>
  );
}

export default Index;
