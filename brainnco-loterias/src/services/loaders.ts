import { LotteryName } from '../constants/lottery-names'
import { api } from '../lib/alova'
import { LotteryData } from '../types'

export async function lotteryLoader(
  lottery: LotteryName,
): Promise<LotteryData> {
  const request = api.Get(lottery, {
    transformData: (rawData: any) => ({
      lottery: rawData.loteria as LotteryName,
      draw: rawData.concurso as number,
      date: rawData.data as string,
      numbers: rawData.dezenas as number[],
    }),
  })

  return await request.send()
}
