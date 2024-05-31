import { api } from '@/lib/axios'

export interface GetDailyRevenueInPeriodQuery {
  from?: Date
  to?: Date
}

export type GetDailyRevenueInPeriodResponse = {
  date: string
  receipt: number
}[]
export async function getDailyRevenueInPeriodResponse({
  from,
  to,
}: GetDailyRevenueInPeriodQuery) {
  const response = await api.get(`/metrics/daily-receipt-in-period`, {
    params: {
      from,
      to,
    },
  })

  return response.data
}