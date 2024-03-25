import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { Profile } from '../../_components/profile'
import { Repositories } from '../../_components/repositories'

interface HomeProps {
  params: {
    userName: string
  }
}

export default function Home({ params }: HomeProps) {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 py-2">
      <div className="flex w-full flex-col gap-2 px-6 lg:px-0">
        <div className="flex justify-end">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              <span className="text-sm font-semibold">Voltar</span>
            </Link>
          </Button>
        </div>
        <Profile username={params.userName} />
      </div>
      <div className="relative flex w-full flex-col gap-6 px-6 lg:px-0">
        <Repositories username={params.userName} />
      </div>
    </div>
  )
}
