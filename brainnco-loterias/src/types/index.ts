import { LotteryName } from '../constants/lottery-names'

export type LotteryData = {
  lottery: LotteryName
  draw: number
  date: string
  numbers: number[]
}
