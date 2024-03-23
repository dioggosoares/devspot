'use client'

import { useQuery } from '@tanstack/react-query'
import { ChangeEvent } from 'react'
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
    queryKey: ['repos'],
    queryFn: () => fetcher(url),
  })

  if (!reposData) return

  const sortedRepositories = [...reposData].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.stargazers_count - b.stargazers_count
    }

    return b.stargazers_count - a.stargazers_count
  })

  return (
    <>
      <div className="flex w-full items-center justify-between px-3 lg:px-0">
        <h1 className="text-lg font-semibold text-brand-blue">Repositórios</h1>

        <div className="flex items-center gap-2">
          <span>Ordenação:</span>
          <Controller
            name="amountStars"
            control={control}
            render={({ field: { name, value } }) => {
              return (
                <Select
                  defaultValue="desc"
                  name={name}
                  onValueChange={(value) => {
                    setSortOrder(value)
                  }}
                  value={value}
                >
                  <SelectTrigger
                    className="col-span-2 h-8 w-auto border-brand-blue/40
                bg-field-900 ring-offset-brand-blue lg:w-[11.25rem]"
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

      <CardRepo repositories={sortedRepositories} />
    </>
  )
}
