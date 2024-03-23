'use client'

import { Star } from 'lucide-react'
import Link from 'next/link'
import colors from 'tailwindcss/colors'

import { Repo } from '@/@types/repo'
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
import { LIMITS } from '@/constants/general'
import { cn } from '@/lib/utils'
import { addSufixForThousands, addThousandSeparator } from '@/utils/formatter'
import { shortenString } from '@/utils/shortenString'

interface CardRepoProps {
  repositories: Repo[]
  username: string
}

export function CardRepo({ repositories, username }: CardRepoProps) {
  return (
    <div
      className="grid max-h-[32rem] grid-cols-1 gap-2 overflow-y-auto pb-7 pr-3
      md:grid-cols-2 lg:grid-cols-3"
    >
      {repositories?.map((item) => {
        return (
          <Card className="border-base-600 bg-base-600" key={item.id}>
            <CardHeader className="p-6">
              <CardTitle className="text-zinc-50">
                <div className="flex w-full items-center justify-between">
                  <h1 className="text-base md:text-lg">
                    {item.name.length > LIMITS.TITLE_CHARS ? (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className="cursor-default text-base md:text-lg">
                            {shortenString(item.name, LIMITS.TITLE_CHARS)}
                          </TooltipTrigger>
                          <TooltipContent>{item.name}</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ) : (
                      item.name
                    )}
                  </h1>

                  <div className="flex items-center">
                    <Star
                      fill={colors.amber['500']}
                      className="mr-2 h-4 w-4 text-amber-500"
                    />
                    <span className="text-sm font-semibold md:text-base">
                      {item.stargazers_count > LIMITS.STARS ? (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className="cursor-default text-sm md:text-base">
                              {addSufixForThousands(item.stargazers_count)}
                            </TooltipTrigger>
                            <TooltipContent>
                              {addThousandSeparator(item.stargazers_count)}
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      ) : (
                        addSufixForThousands(item.stargazers_count)
                      )}
                    </span>
                  </div>
                </div>
              </CardTitle>
              <CardDescription className="min-h-20">
                {item.description
                  ? shortenString(item.description, 70)
                  : 'Sem descrição'}
              </CardDescription>
            </CardHeader>
            <CardFooter className="p-3">
              <div className="flex w-full items-center justify-between font-sans">
                <span className="pl-3 text-sm text-zinc-50">
                  lang:{' '}
                  <span
                    className={cn('text-sm font-bold', {
                      'text-zinc-400/50': item.language === null,
                      'text-yellow-500': item.language === 'JavaScript',
                      'text-blue-600': item.language === 'TypeScript',
                      'text-green-800': item.language === 'Java',
                      'text-purple-800': item.language === 'C++',
                      'text-rose-500': item.language === 'Dart',
                      'text-orange-500': item.language === 'HTML',
                      'text-sky-500': item.language === 'CSS',
                    })}
                  >
                    {item.language ?? 'none'}
                  </span>
                </span>
                <Button
                  className="text-zinc-50"
                  variant="ghost"
                  size="sm"
                  asChild
                >
                  <Link href={`/repo/${username}/${item.name}`}>Ver mais</Link>
                </Button>
              </div>
            </CardFooter>
          </Card>
        )
      })}
    </div>
  )
}
