'use client'

import { useQuery } from '@tanstack/react-query'

import { Repo } from '@/@types/repo'
import { EXTERNAL_URL } from '@/constants/general'
import { fetcher } from '@/utils/fetcher'

interface RepositoryProps {
  params: {
    userName: string
    repoName: string
  }
}

export default function RepositoryPage({ params }: RepositoryProps) {
  const url =
    EXTERNAL_URL.GITHUB_REPOS + `${params.userName}/${params.repoName}`

  const { data: repoData, isLoading: isLoadingRepo } = useQuery<Repo[]>({
    queryKey: ['repo'],
    queryFn: () => fetcher(url),
  })

  console.log(repoData)

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-10 py-2">
      Repos
    </div>
  )
}
