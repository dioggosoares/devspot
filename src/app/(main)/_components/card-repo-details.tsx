'use client'

import { useQuery } from '@tanstack/react-query'
import {
  Eye,
  GitFork,
  LockOpen,
  SquareArrowOutUpRight,
  Star,
} from 'lucide-react'
import Link from 'next/link'
import colors from 'tailwindcss/colors'

import { RepoDetails } from '@/@types/repo'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { EXTERNAL_URL, LIMITS } from '@/constants/general'
import { cn } from '@/lib/utils'
import { fetcher } from '@/utils/fetcher'
import { addSufixForThousands, addThousandSeparator } from '@/utils/formatter'

import { RepoDetailsSkeleton } from './repo-details-skeleton'

interface CardRepoDetails {
  username: string
  reponame: string
}

export function CardRepoDetails({ username, reponame }: CardRepoDetails) {
  const urlRepo = EXTERNAL_URL.GITHUB_REPOS + `${username}/${reponame}`

  const { data: repoData, isLoading: isLoadingRepo } = useQuery<RepoDetails>({
    queryKey: [`repo-${reponame}`],
    queryFn: () => fetcher(urlRepo),
  })

  return (
    <>
      {!repoData || isLoadingRepo ? (
        <RepoDetailsSkeleton />
      ) : (
        <div className="flex flex-col gap-4 pb-10">
          <Card className="border-base-600 bg-base-600">
            <CardHeader className="p-6">
              <CardTitle className="text-zinc-50">
                <div className="flex w-full items-center justify-between">
                  <h1 className="text-base md:text-lg">{repoData?.name}</h1>

                  <div className="flex items-center">
                    <Star
                      fill={colors.amber['500']}
                      className="mr-2 h-4 w-4 text-amber-500"
                    />
                    <span className="text-sm font-semibold md:text-base">
                      {repoData?.stargazers_count &&
                      repoData?.stargazers_count > LIMITS.STARS ? (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className="cursor-default text-sm md:text-base">
                              {addSufixForThousands(
                                repoData?.stargazers_count ?? 0,
                              )}
                            </TooltipTrigger>
                            <TooltipContent>
                              {addThousandSeparator(
                                repoData?.stargazers_count ?? 0,
                              )}
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      ) : (
                        addSufixForThousands(repoData?.stargazers_count ?? 0)
                      )}
                    </span>
                  </div>
                </div>
              </CardTitle>
              <CardDescription className="min-h-20">
                {repoData?.description || 'Sem descrição'}
              </CardDescription>
            </CardHeader>
            <CardFooter className="p-3">
              <div className="flex w-full items-center justify-between font-sans">
                <span className="pl-3 text-sm text-zinc-50">
                  lang:{' '}
                  <span
                    className={cn('text-sm font-bold', {
                      'text-zinc-400/50': repoData?.language === null,
                      'text-yellow-500': repoData?.language === 'JavaScript',
                      'text-blue-600': repoData?.language === 'TypeScript',
                      'text-green-800': repoData?.language === 'Java',
                      'text-purple-800': repoData?.language === 'C++',
                      'text-rose-500': repoData?.language === 'Dart',
                      'text-orange-500': repoData?.language === 'HTML',
                      'text-sky-500': repoData?.language === 'CSS',
                    })}
                  >
                    {repoData?.language ?? 'none'}
                  </span>
                </span>
                <Button
                  className="text-zinc-50"
                  variant="ghost"
                  size="sm"
                  asChild
                >
                  <Link href={repoData?.html_url ?? ''} target="_blank">
                    <span className="text-xs">VER REPO</span>
                    <SquareArrowOutUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardFooter>
          </Card>

          <div className="flex w-full items-center justify-between gap-4 rounded-lg bg-base-700 px-7 py-4">
            <div className="flex items-center gap-2">
              <GitFork className="h-4 w-4" />
              <span className="text-xs lg:text-sm">
                <span className="font-bold">
                  {repoData && repoData?.forks_count > LIMITS.FORKS ? (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="cursor-default">
                          {addSufixForThousands(repoData?.forks_count)}
                        </TooltipTrigger>
                        <TooltipContent>
                          {addThousandSeparator(repoData?.forks_count)}
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ) : (
                    addSufixForThousands(repoData?.forks_count ?? 0)
                  )}
                </span>{' '}
                forks
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              <span className="text-xs lg:text-sm">
                <span className="font-bold">
                  {repoData && repoData?.subscribers_count > LIMITS.FORKS ? (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="cursor-default">
                          {addSufixForThousands(repoData?.subscribers_count)}
                        </TooltipTrigger>
                        <TooltipContent>
                          {addThousandSeparator(repoData?.subscribers_count)}
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ) : (
                    addSufixForThousands(repoData?.subscribers_count ?? 0)
                  )}
                </span>{' '}
                watching
              </span>
            </div>

            <div className="flex items-center gap-2">
              <LockOpen className="h-4 w-4" />
              <span className="text-xs lg:text-sm">
                <span className="font-bold">Público</span>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
