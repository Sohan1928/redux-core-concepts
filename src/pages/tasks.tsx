import { AddTaskModal } from "@/components/layout/module/tasks/AddTaskModal";
import TaskCard from "@/components/layout/module/tasks/TaskCard";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

export default function Tasks() {
  const tasks = useAppSelector(selectTasks);
  console.log(tasks);

  return (
    <div className="px-5 mx-auto mt-20 max-w-7xl">
      <div className="flex items-center justify-between">
        <h1>Tasks</h1>
        <AddTaskModal></AddTaskModal>
      </div>
      <div className="mt-5 space-y-5">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id}></TaskCard>
        ))}
      </div>
    </div>
  );
}
