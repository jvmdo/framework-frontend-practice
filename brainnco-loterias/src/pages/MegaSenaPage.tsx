import { useLoaderData } from 'react-router-dom'
import { PageTemplate, PageTemplateProps } from '../components/PageTemplate'

export default function MegaSenaPage() {
  const data = useLoaderData() as PageTemplateProps

  return <PageTemplate {...data} />
}
