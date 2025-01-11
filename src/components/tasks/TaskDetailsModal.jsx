import { useSelector } from "react-redux";
import MyModal from "../ui/Modal";

const TaskDetailsModal = ({ isOpen, setIsOpen, id }) => {
  const { tasks } = useSelector((state) => state.tasks);
  const task = tasks.find((item) => item.id === id);
  return (
    <MyModal isOpen={isOpen} setIsOpen={setIsOpen}>
      <h3>{task.description}</h3>
    </MyModal>
  );
};

export default TaskDetailsModal;
