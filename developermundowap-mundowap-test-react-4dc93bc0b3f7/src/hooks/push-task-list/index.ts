import { useContext } from "react";
import { TaskContext } from "@contexts/task-context";

export function usePushTaskList() {
  // Pegando o contexto da task e os métodos transformando em um hook
  const context = useContext(TaskContext);
  return context;
}