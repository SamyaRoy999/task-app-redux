import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updataStatus, userTasks } from "../../redux/features/task/taskSlice";
import TaskDetailsModal from "./TaskDetailsModal";

const MyTasks = () => {
  const { tasks, userSpacepicTasks } = useSelector((state) => state.tasks);
  const { name: userName } = useSelector((state) => state.userSlice);
  const [isOpen, setIsOpen] = useState(false);
  const [taskID, setTaskID] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userTasks(userName));
  }, [tasks, dispatch, userName]);

  const hendelModal = (id) => {
    setTaskID(id);
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <TaskDetailsModal isOpen={isOpen} setIsOpen={setIsOpen} id={taskID} />
      <h1 className="text-xl my-3">My Tasks</h1>
      <div className=" h-[750px] overflow-auto space-y-3">
        {userSpacepicTasks?.map((item) => (
          <div
            key={item.id}
            className="bg-secondary/10 rounded-md p-3 flex justify-between"
          >
            <h1>{item.title}</h1>
            <div className="flex gap-3">
              <button
                onClick={() => hendelModal(item.id)}
                className="grid place-content-center"
                title="Details"
              >
                <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
              </button>
              <button
                onClick={() =>
                  dispatch(updataStatus({ id: item.id, status: "done" }))
                }
                className="grid place-content-center"
                title="Done"
              >
                <CheckIcon className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTasks;
