import { format, startOfDay, endOfDay } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

const today = new Date()

const formattedCurrentYearDefault = () => {
  return { year: today.getFullYear() }
}

const formattedTodayPtBr = (today: Date | string) => {
  // Dessa forma eu me asseguro que o tipo de today é Date, porque apos criado o task eu salvo ele no localStorage e quando eu pego ele do localStorage ele vem como string
  if (typeof today === 'string') today = new Date(today)

  const formatPtBrToday = format(today, 'EEE. dd/MM/yyyy - HH:mm', {
    locale: ptBR
  })

  return formatPtBrToday
}

const useGetDateFormatted = () => {
  return {
    formattedTodayPtBr,
    formattedCurrentYearDefault
  }
}

export { useGetDateFormatted }
