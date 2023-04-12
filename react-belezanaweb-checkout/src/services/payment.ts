import { FormDataType } from '../pages/Checkout/Payment'

export async function payment(data: FormDataType): Promise<FormDataType> {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  })
  return {
    card: data.card.replace(/(\d+)(?=\s)/g, (_, b) => '*'.repeat(b.length)),
    name: data.name,
    date: data.date,
    cvv: '',
  }
}
