import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { CardRepo } from '../../_components/card-repo'
import { Profile } from '../../_components/profile'
import { Repositories } from '../../_components/repositories'

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
        <Repositories username={params.username} />
      </div>
    </div>
  )
}
