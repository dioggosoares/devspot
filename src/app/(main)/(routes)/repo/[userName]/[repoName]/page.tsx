import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

import { CardRepoDetails } from '@/app/(main)/_components/card-repo-details'
import { Profile } from '@/app/(main)/_components/profile'
import { Button } from '@/components/ui/button'

interface RepositoryProps {
  params: {
    userName: string
    repoName: string
  }
}

export default function RepositoryPage({ params }: RepositoryProps) {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col py-2">
      <div className="flex w-full flex-col gap-6 px-6 lg:px-0">
        <Profile username={params.userName} />
      </div>
      <div className="flex justify-end px-6 py-2 lg:px-0">
        <Button variant="ghost" size="sm" asChild>
          <Link href={`/${params.userName}`}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span className="text-sm font-semibold">Voltar</span>
          </Link>
        </Button>
      </div>
      <div className="px-6 lg:px-0">
        <CardRepoDetails
          username={params.userName}
          reponame={params.repoName}
        />
      </div>
    </div>
  )
}
