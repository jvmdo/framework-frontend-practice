import { Form } from 'react-router-dom'
export function Payment() {
  return (
    <Form method="post" action="../confirmacao">
      <input type="text" name="name" placeholder="Nome" />
      <input type="text" name="card" placeholder="Número do cartão" />
      <button>Enviar</button>
    </Form>
  )
}
