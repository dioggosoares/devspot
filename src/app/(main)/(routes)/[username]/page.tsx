import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { CardRepo } from '../../_components/card-repo'
import { Profile } from '../../_components/profile'

interface HomeProps {
  params: {
    username: string
  }
}

export default function Home({ params }: HomeProps) {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-10 py-2">
      <div className="hidden h-48 w-full rounded-lg bg-base-700 px-10 py-7 lg:flex">
        <Profile username={params.username} />
      </div>
      <div className="flex w-full flex-col gap-6 px-3 lg:px-0">
        <div className="flex w-full items-center justify-between px-3 lg:px-0">
          <h1 className="text-lg font-semibold text-brand-blue">
            Repositórios
          </h1>

          <Select defaultValue="">
            <SelectTrigger
              className="col-span-2 h-8 w-auto border-brand-blue/40
              bg-field-900 ring-offset-brand-blue lg:w-[11.25rem]"
            >
              <SelectValue placeholder="Qtd. de estrelas" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pending">Crescente</SelectItem>
              <SelectItem value="canceled">Decrescente</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <CardRepo username={params.username} />
      </div>
    </div>
  )
}
