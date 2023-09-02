import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/tasksSlice";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onCancel = () => {
    reset();
    setIsOpen(false);
  };

  const onSubmit = (data) => {
    dispatch(addTask(data));
    onCancel();
  };
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Programming Hero">
      <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-5 space-y-3">
          <label htmlFor="title">Title</label>
          <input
            className="w-full rounded-md"
            type="text"
            id="title"
            {...register("title")}
          />
        </div>
        <div className="flex flex-col gap-5 space-y-3">
          <label htmlFor="title">Description</label>
          <textarea
            className="w-full rounded-md"
            type="text"
            id="description"
            {...register("description")}
          />
        </div>
        <div className="flex flex-col gap-5 space-y-3">
          <label htmlFor="title">Deadline</label>
          <input
            className="w-full rounded-md"
            type="date"
            id="date"
            {...register("date")}
          />
        </div>
        <div className="flex flex-col gap-5 space-y-3">
          <label htmlFor="title">Assign to</label>
          <select
            className="w-full rounded-md"
            id="assignedTo"
            {...register("assignedTo")}
          >
            <option value="Syed Alamin">Syed Alamin</option>
            <option value="Syed Tutul">Syed Tutul</option>
            <option value="Syed Sumon">Syed Sumon</option>
            <option value="Shuvow">Shuvow</option>
            <option value="Siyam">Siyam</option>
            <option value="Mir Hussain">Mir Hussain</option>
            <option value="Mezba Abedin">Mezba Abedin</option>
            <option value="Fahim Ahmed">Fahim Ahmed</option>
            <option value="Samin Israr Ravi">Samin Israr Ravi</option>
          </select>
        </div>
        <div className="flex flex-col gap-5 space-y-3">
          <label htmlFor="title">Priority</label>
          <select
            className="w-full rounded-md"
            id="priority"
            {...register("priority")}
          >
            <option defaultValue value="high">
              High
            </option>
            <option defaultValue value="medium">
              Medium
            </option>
            <option defaultValue value="low">
              Low
            </option>
          </select>
        </div>

        <div className="flex gap-3 justify-end py-10">
          <button
            onClick={() => onCancel()}
            type="submit"
            className="btn btn-danger"
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
