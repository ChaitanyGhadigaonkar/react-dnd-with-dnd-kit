import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { Task as TaskType } from "../main.types";
import Task from "./Task";

interface TasksType {
  tasks: TaskType[];
}
const Tasks = ({ tasks }: TasksType) => {
  return (
    <div>
      <SortableContext strategy={verticalListSortingStrategy} items={tasks}>
        {tasks.map((task) => (
          <Task task={task} key={task.id} />
        ))}
      </SortableContext>
    </div>
  );
};

export default Tasks;
