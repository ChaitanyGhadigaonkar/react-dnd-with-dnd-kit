import { closestCorners, DndContext, DragEndEvent } from "@dnd-kit/core";
import { useState } from "react";
import Tasks from "./Tasks";
import { arrayMove } from "@dnd-kit/sortable";

const tasksData = [
  {
    id: 1,
    title: "Task 1",
  },
  {
    id: 2,
    title: "Task 2",
  },
  {
    id: 3,
    title: "Task 3",
  },
  {
    id: 4,
    title: "Task 4",
  },
];

const DndComponent = () => {
  const [tasks, setTasks] = useState(tasksData);
  const getTaskPosition = (id: number) => {
    return tasks.findIndex((item) => item.id === id);
  };
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id === over?.id) {
      return;
    }

    const originalPosition = getTaskPosition(active.id as number);
    const newPosition = getTaskPosition(over?.id as number);
    setTasks(() => arrayMove(tasks, originalPosition, newPosition));
  };
  return (
    <div className="">
      <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
        <Tasks tasks={tasks} />
      </DndContext>
    </div>
  );
};

export default DndComponent;
