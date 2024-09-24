import { SyntheticEvent } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose?: (e: SyntheticEvent<HTMLDialogElement, Event>) => void;
  children: React.ReactNode;
};

const Modal = ({ isOpen = false, onClose, children }: ModalProps) => {
  return (
    <dialog
      id="my_modal_3"
      className={`modal modal-bottom sm:modal-middle ${
        isOpen ? "visible" : "invisible"
      }`}
      open={isOpen}
      onClose={onClose}
    >
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle text-lg btn-ghost absolute right-4 sm:right-2 top-2">
            ✕
          </button>
        </form>
        {children}
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default Modal;
