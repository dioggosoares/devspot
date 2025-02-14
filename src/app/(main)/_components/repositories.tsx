'use client'

import { useQuery } from '@tanstack/react-query'
import { Controller, useForm } from 'react-hook-form'

import { Repo } from '@/@types/repo'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { EXTERNAL_URL } from '@/constants/general'
import { useSortedData } from '@/store/useSortedData'
import { fetcher } from '@/utils/fetcher'

import { CardRepo } from './card-repo'
import { ReposSkeleton } from './repos-skeleton'

interface RepositoriesProps {
  username: string
}

export function Repositories({ username }: RepositoriesProps) {
  const url = EXTERNAL_URL.GITHUB_USER + `${username}/repos`

  const { control } = useForm()

  const { sortOrder, setSortOrder } = useSortedData((store) => {
    return {
      sortOrder: store.sortOrder,
      setSortOrder: store.setSortOrder,
    }
  })

  const { data: reposData, isLoading: isLoadingRepos } = useQuery<Repo[]>({
    queryKey: [`repos-${username}`],
    queryFn: () => fetcher(url),
  })

  const sortedRepositories = reposData?.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.stargazers_count - b.stargazers_count
    }

    return b.stargazers_count - a.stargazers_count
  })

  return (
    <>
      {!sortedRepositories || isLoadingRepos ? (
        <ReposSkeleton />
      ) : (
        <>
          <div className="flex w-full items-center justify-between">
            <h1 className="text-brand-blue text-sm font-semibold md:text-lg">
              Repositórios
            </h1>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="text-sm md:text-base">Ordenação:</span>
                <Controller
                  name="amountStars"
                  control={control}
                  render={({ field: { name, value } }) => {
                    return (
                      <Select
                        defaultValue={sortOrder}
                        name={name}
                        value={value}
                        onValueChange={(value) => {
                          setSortOrder(value)
                        }}
                      >
                        <SelectTrigger
                          className="border-brand-blue/40 bg-field-900 ring-offset-brand-blue col-span-2
                      h-8 w-auto text-xs md:text-base lg:w-[11.25rem]"
                        >
                          <SelectValue placeholder="Qtd. de estrelas" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asc">Crescente</SelectItem>
                          <SelectItem value="desc">Decrescente</SelectItem>
                        </SelectContent>
                      </Select>
                    )
                  }}
                />
              </div>
            </div>
          </div>

          <CardRepo
            repositories={sortedRepositories || []}
            username={username}
          />
          <div
            className="bg-linear-to-t from-base-800 to-base-800/0 pointer-events-none fixed bottom-0 left-0
            right-0 z-20 h-1/3"
          />
        </>
      )}
    </>
  )
}
