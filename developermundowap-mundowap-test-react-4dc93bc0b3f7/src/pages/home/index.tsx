import { ContainerDefault } from '@components/containers/container-default'
import { AllTasks } from './components/all-tasks'

export function Home() {
  return (
    <ContainerDefault>
      <AllTasks/>
    </ContainerDefault>
  )
}
