import React, { useState } from "react";
import { useTasks } from "../context/TaskContext";
import { Task } from "../types/task";

export const TaskForm: React.FC = () => {
  const { addTask } = useTasks();
  const [formData, setFormData] = useState<
    Omit<Task, "id" | "createdAt" | "updatedAt" | "tags">
  >({
    title: "",
    description: "",
    status: "todo",
    priority: "medium",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      alert("請輸入任務標題");
      return;
    }

    addTask(formData);

    setFormData({
      title: "",
      description: "",
      status: "todo",
      priority: "medium",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="任務標題"
          value={formData.title}
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, title: e.target.value }));
          }}
          className="border p-2 rounded"
          maxLength={100}
        />
        <textarea
          placeholder="任務描述（選填）"
          value={formData.description}
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, description: e.target.value }));
          }}
          className="border p-2 rounded resize-none h-24"
        />
        <select
          value={formData.priority}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              priority: e.target.value as Task["priority"],
            }))
          }
          className="border p-2 rounded"
        >
          <option value="low">低優先級</option>
          <option value="medium">中優先級</option>
          <option value="high">高優先級</option>
        </select>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
        >
          新增任務
        </button>
      </div>
    </form>
  );
};
