import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import {
  deleteTask,
  toggleCompleteState,
} from "@/redux/features/task/taskSlice";
import { useAppDispatch } from "@/redux/hook";
import { ITask } from "@/types";
import { Trash2 } from "lucide-react";

interface IProps {
  task: ITask;
}

export default function TaskCard({ task }: IProps) {
  const dispatch = useAppDispatch();

  return (
    <div className="px-5 py-3 border rounded-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className={cn("rounded-full size-3", {
              "bg-green-500": task.priority === "low",
              "bg-yellow-500": task.priority === "medium",
              "bg-red-500": task.priority === "high",
            })}
          ></div>
          <h1 className={cn({ "line-through": task.isCompleted })}>
            {task.title}
          </h1>
          <div className="flex items-center gap-3">
            <Button
              onClick={() => dispatch(deleteTask(task.id))}
              variant="link"
              className="p-0 text-red-500"
            >
              <Trash2></Trash2>
            </Button>
            <Checkbox
              checked={task.isCompleted}
              onClick={() => dispatch(toggleCompleteState(task.id))}
            ></Checkbox>
          </div>
        </div>
      </div>
      <p className="mt-5">{task.description}</p>
    </div>
  );
}
