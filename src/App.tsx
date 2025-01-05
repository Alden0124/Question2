import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { TaskProvider } from "./context/TaskContext";

const App: React.FC = () => {
  return (
    <TaskProvider>
      <div>
        <h1>Task Management App</h1>
        <ErrorBoundary fallback={<p>任務列表載入失敗</p>}>
          <TaskForm />
        </ErrorBoundary>
        <ErrorBoundary fallback={<p>任務列表載入失敗</p>}>
          <TaskList />
        </ErrorBoundary>
      </div>
    </TaskProvider>
  );
};

export default App;
