import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { ITask } from "@/types";
import { Trash2 } from "lucide-react";

interface IProps {
  task: ITask;
}

export default function TaskCard({ task }: IProps) {
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
          <h1>{task.title}</h1>
          <div className="flex items-center gap-3">
            <Button variant="link" className="p-0 text-red-500">
              <Trash2></Trash2>
            </Button>
            <Checkbox></Checkbox>
          </div>
        </div>
      </div>
      <p className="mt-5">{task.description}</p>
    </div>
  );
}
