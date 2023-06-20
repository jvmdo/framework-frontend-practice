import { useLoaderData } from 'react-router-dom'
import { PageTemplate, PageTemplateProps } from '../components/PageTemplate'

export function LotomaniaPage() {
  const data = useLoaderData() as PageTemplateProps

  return <PageTemplate {...data} />
}
