import { useSortable } from "@dnd-kit/sortable";

import { Task as TaskType } from "../main.types";
import { CSS } from "@dnd-kit/utilities";

interface TaskPropType {
  task: TaskType;
}

const Task = ({ task }: TaskPropType) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: task.id,
    });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      className=""
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      {task.title}
    </div>
  );
};

export default Task;
