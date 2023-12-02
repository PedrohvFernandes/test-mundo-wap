import { toast } from 'react-toastify'

import { ITasks } from '@typings/typings-task'

// O produce é uma função do immer que recebe um estado e uma função que vai modificar esse estado, e retorna um novo estado. Ele deixa o código mais legível e mais fácil de entender, nao alterando a forma do react ser perfomatico que é a questao da imutabilidade.
import { produce } from 'immer'
import { createContext, ReactNode, useEffect, useState } from 'react'

// O type do contexto das tasks
interface ITaskListContextType {
  // As tasks que estão disponíveis para fazer
  taskItems: ITasks[]
  // A quantidade de tasks
  taskQuantity: number
  // Adiciona uma task na lista
  addTaskToList: (task: ITasks) => void
  // Remove task da lista, ou seja a task foi feita
  removeTaskItem: (taskItemId: string) => void
  // Marca a task como feita
  checkTaskItem: (taskItemId: string) => void
  // Limpa a lista de tasks
  clearListTask: () => void
}

// O contexto da lista de tasks  com o type definido, que possui um provider e um consumer
export const TaskContext = createContext({} as ITaskListContextType)

// O provider do contexto da lista de task recebe como props o children que é o que vai ficar por volta desse contexto, que vai ter acesso a ele
interface ITaskListContextProviderProps {
  children: ReactNode
}

// A chave:valor para armazenar as tasks na lista no localStorage
const TASKS_LIST_ITEMS_STORAGE_KEY = 'taskList:taskItems'

export function TaskListContextProvider({
  children
}: Readonly<ITaskListContextProviderProps>) {
  // O estado das tasks na lista, que é inicializado com os itens do localStorage
  const [taskItems, setTaskItems] = useState<ITasks[]>(() => {
    const storedTaskList = localStorage.getItem(TASKS_LIST_ITEMS_STORAGE_KEY)
    // Se existir itens no localStorage, retorna eles, se nao retorna um array vazio
    if (storedTaskList) {
      return JSON.parse(storedTaskList)
    }
    return []
  })

  const taskQuantity = taskItems.length

  // Adiciona/cria um item na lista de tasks
  const addTaskToList = (task: ITasks) => {
    // O findIndex retorna o index do item que esta sendo procurado, se nao encontrar retorna -1
    const taskAlreadyExistsInList = taskItems.findIndex(
      taskItem => taskItem.title?.toLowerCase === task.title?.toLowerCase
    )

    const newTask = produce(taskItems, draft => {
      // Se o item nao existir na lista, adiciona ele, se nao abre uma notificação dizendo que ja existe
      if (taskAlreadyExistsInList < 0) {
        draft.push(task)
        toast.success(`A task: ${task.title} foi criada com sucesso! 🥳`)
      } else {
        toast.error(`A task: ${task.title} já existe na lista de tarefas! 🤨`)
      }
    })

    setTaskItems(newTask)
  }

  // Mudar a logica, fazer com que a task passe pro final da lista, e nao seja removida, no caso mudando o status dela para checked
  const checkTaskItem = (taskItemId: string) => {
    const newTask = produce(taskItems, draft => {
      const taskAlreadyExistsInList = taskItems.findIndex(
        taskItem => taskItem.id === taskItemId
      )

      if (taskAlreadyExistsInList >= 0) {
        draft.splice(taskAlreadyExistsInList, 1)
      }
    })

    setTaskItems(newTask)
  }

  // função para remover uma task da lista
  const removeTaskItem = (taskItemId: string) => {
    const newTask = produce(taskItems, draft => {
      const taskAlreadyExistsInList = taskItems.findIndex(
        taskItem => taskItem.id === taskItemId
      )

      if (taskAlreadyExistsInList >= 0) {
        draft.splice(taskAlreadyExistsInList, 1)
      }
    })

    setTaskItems(newTask)
  }

  // Criar uma função para editar uma task
  // Criar uma função para gerar uma tarefa aleatória atraves da api

  // Limpar todas as tarefas da lista
  const clearListTask = () => {
    setTaskItems([])
  }

  useEffect(() => {
    // Sempre que o taskItems mudar, ele vai ser salvo no localStorage
    localStorage.setItem(
      TASKS_LIST_ITEMS_STORAGE_KEY,
      JSON.stringify(taskItems)
    )
  }, [taskItems])

  return (
    <TaskContext.Provider
      value={{
        taskItems,
        taskQuantity,
        addTaskToList,
        removeTaskItem,
        checkTaskItem,
        clearListTask
      }}
    >
      {/* Aqui é tudo que vai ficar em volta dessa contexto, que vai ter acesso a isso, na maioria dos casos é a aplicação toda, a onde isso é feito no App.tsx ou main.tsx */}
      {children}
    </TaskContext.Provider>
  )
}
