type Currency = {
  currency: string
  language: string
}

export const Formatter = {
  currency: function (price: number, options?: Partial<Currency>) {
    const { currency = 'BRL', language = 'pt-BR' } = options ?? {}
    return new Intl.NumberFormat(language, {
      style: 'currency',
      currency,
    }).format(price)
  },
}
