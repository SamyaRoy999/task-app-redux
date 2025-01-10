import { ArrowRightIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { removeTask, updataStatus } from "../../redux/features/task/taskSlice";

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();
  let updatedStutas;
  if (task.status === "pending") {
    updatedStutas = "running";
  } else if (task.status === "running") {
    updatedStutas = "done";
  } else {
    updatedStutas = "archive";
  }
  console.log(task);

  return (
    <div className="bg-secondary/10 rounded-md p-5">
      <h1>{task?.title}</h1>
      <p className="mb-3">{task?.description}</p>
      <p className="text-sm">Assigned to - {task?.AssignTo}</p>
      <div className="flex justify-between mt-3">
        <p>{task?.date}</p>
        <div className="flex gap-3">
          <button
            title="Delete"
            onClick={() => {
              dispatch(removeTask(task.id));
            }}
          >
            <TrashIcon className="h-5 w-5 text-red-500" />
          </button>
          <button
            title="In progress"
            onClick={() =>
              dispatch(updataStatus({ id: task.id, status: updatedStutas }))
            }
          >
            <ArrowRightIcon className="h-5 w-5 text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
