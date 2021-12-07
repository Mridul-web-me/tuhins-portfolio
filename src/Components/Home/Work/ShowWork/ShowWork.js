import React from 'react';
import Modal from 'react-modal';
import ReactPlayer from 'react-player/youtube';
import './ShowWork.css'

const customStyles = {
  content: {
    top: '55%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')


const ShowWork = ({ modalIsOpen, closeModal, work }) => {


  return (
    <div>

      <Modal
        isOpen={modalIsOpen}

        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="slide-1">
          <ReactPlayer url={work.worklink} width="962px" height="565px" controls frameborder="5px" />

        </div>
        <div className="slide-2">
          <ReactPlayer url={work.worklink} width="350px" height="221px" controls frameborder="5px" />
        </div>
      </Modal>
    </div>
  );
};

export default ShowWork;