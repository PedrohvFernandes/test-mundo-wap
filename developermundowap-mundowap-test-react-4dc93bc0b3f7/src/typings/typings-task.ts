interface ITasks {
  // Id gerado automaticamente no momento que estiver criando uma nova task
  id: number;
  name: string;
  description: string;
  // O date vai ser gerado automaticamente no momento que estiver criando uma nova task
  date: Date;
}

interface ITaskProps {
  coffee: ITasks;
}

export type { ITasks, ITaskProps };