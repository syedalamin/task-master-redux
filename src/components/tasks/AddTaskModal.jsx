import Modal from "../ui/Modal";

const AddTaskModal = ({isOpen, setIsOpen}) => {
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Programming Hero" >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, eum est id ipsa autem fugiat eius aut nam fuga necessitatibus temporibus cumque nesciunt odit, provident magni reiciendis neque reprehenderit voluptatum!</p>
      </Modal>
    );
};

export default AddTaskModal;