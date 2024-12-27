import MyModal from "../ui/Modal";
import { useForm } from "react-hook-form";

const AddTasksModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex flex-col mb-5">
      <MyModal isOpen={isOpen} setIsOpen={setIsOpen}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col mb-5">
            <label htmlFor="" className="mb-2">
              Title
            </label>
            <input {...register("title", { required: true })} type="text" />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="" className="mb-2">
              Description
            </label>
            <input
              {...register("description", { required: true })}
              type="text"
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="" className="mb-2">
              Date
            </label>
            <input type="date" />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="" className="mb-2">
              Assign to
            </label>
            <select {...register("AssignTo")}>
              <option value="samya roy">samya roy</option>
              <option value="sagor pal">sagor pal</option>
              <option value="rajo miha">rajo miha</option>
              <option value="suhag roy">suhag roy</option>
              <option value="luna bagom">luna bagom</option>
              <option value="other">other</option>
            </select>
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="" className="mb-2">
              Priority
            </label>
            <select {...register("priority")}>
              <option value="high">high</option>
              <option value="medium">medium</option>
              <option value="low">low</option>
            </select>
          </div>
          <div className="flex gap-3 justify-end">
            <button type="button" className="btn btn-danger">
              cancel
            </button>
            <button type="submit" className="btn btn-primary">
              submit
            </button>
          </div>
        </form>
      </MyModal>
    </div>
  );
};

export default AddTasksModal;