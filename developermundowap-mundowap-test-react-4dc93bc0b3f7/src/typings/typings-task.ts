interface ITasks {
  // Id gerado automaticamente no momento que estiver criando uma nova task
  id: string
  title?: string
  description?: string
  // O date vai ser gerado automaticamente no momento que estiver criando uma nova task
  createdAt: Date
  // No inicio a task vai estar como pendente, mas quando o usuário clicar no checkbox, o status vai mudar para checked
  status: 'checked' | 'pending'
}

interface ITaskProps {
  coffee: ITasks
}

export type { ITasks, ITaskProps }
