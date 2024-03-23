'use client'

import { Star } from 'lucide-react'
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

interface CardRepoProps {
  repositories: Repo[]
}

export function CardRepo({ repositories }: CardRepoProps) {
  return (
    <div
      className="grid max-h-[32rem] grid-cols-1 gap-2 overflow-y-auto px-3
      pb-7 lg:grid-cols-2 lg:px-0 lg:pr-3"
    >
      {repositories?.map((item) => {
        return (
          <Card className="border-base-600 bg-base-600" key={item.id}>
            <CardHeader className="p-6">
              <CardTitle className="text-zinc-50">
                <div className="flex w-full items-center justify-between">
                  <h1 className="text-lg">{item.name}</h1>
                  <div className="flex items-center">
                    <Star
                      fill={colors.amber['500']}
                      className="mr-2 h-4 w-4 text-amber-500"
                    />
                    <span className="text-base font-semibold">
                      {item.stargazers_count > LIMITS.STARS ? (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
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
                {item.description ?? 'Sem descrição'}
              </CardDescription>
            </CardHeader>
            <CardFooter className="p-3">
              <div className="flex w-full items-center justify-between font-sans">
                <span className="pl-3 text-sm text-zinc-50">
                  Lang:{' '}
                  <span
                    className={cn('text-sm font-bold', {
                      'text-zinc-400/50': item.language === null,
                      'text-yellow-500': item.language === 'JavaScript',
                      'text-blue-600': item.language === 'TypeScript',
                      'text-orange-500': item.language === 'HTML',
                      'text-sky-500': item.language === 'CSS',
                    })}
                  >
                    {item.language ?? 'none'}
                  </span>
                </span>
                <Button className="text-zinc-50" variant="ghost" size="sm">
                  Ver mais
                </Button>
              </div>
            </CardFooter>
          </Card>
        )
      })}
    </div>
  )
}
