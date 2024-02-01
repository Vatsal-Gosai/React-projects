import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  function deletHendler() {
    setmodalIsOpen(true);
  }
  function cancelHendler() {
    setmodalIsOpen(false);
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="action">
        <button className="btn" onClick={deletHendler}>
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <Modal onCancel={cancelHendler} onConfirm={cancelHendler} />
      )}
      {modalIsOpen && <Backdrop onCancel={cancelHendler} />}
    </div>
  );
}

export default Todo;
