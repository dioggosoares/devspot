'use client'

import { useQuery } from '@tanstack/react-query'
import { SquareArrowOutUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { useMediaQuery } from 'usehooks-ts'

import { User } from '@/@types/user'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { EXTERNAL_URL, LIMITS } from '@/constants/general'
import { fetcher } from '@/utils/fetcher'
import { shortenString } from '@/utils/shortenString'

import { ProfileSkeleton } from './profile-skeleton'
import { ProfileStats } from './profile-stats'

interface ProfileProps {
  username: string
}

export function Profile({ username }: ProfileProps) {
  const isMobile = useMediaQuery('(max-width: 640px)')

  const url = EXTERNAL_URL.GITHUB_USER + username

  const { data: profileData, isLoading: isLoadingProfile } = useQuery<User>({
    queryKey: [`profile-${username}`],
    queryFn: () => fetcher(url),
  })

  if (profileData?.message) notFound()

  return (
    <>
      {!profileData || isLoadingProfile ? (
        <ProfileSkeleton />
      ) : (
        <div className="flex w-full flex-col gap-3">
          <div className="flex h-32 w-full rounded-lg bg-base-700 px-10 py-6 md:h-48 md:py-7">
            <div className="flex w-full  items-start gap-3 md:flex-row md:items-center md:gap-8">
              <Image
                src={profileData.avatar_url || ''}
                alt="github avatar"
                width={128}
                height={128}
                className="h-20 w-20 rounded-md md:h-32 md:w-32"
                priority
              />
              <div className="flex w-full flex-col gap-7">
                <div className="flex flex-col gap-2">
                  <div className="flex w-full items-center justify-between">
                    <h1 className="text-sm font-semibold md:text-xl">
                      {profileData.name}
                    </h1>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={profileData.html_url || ''} target="_blank">
                        <span className="text-xs">GITHUB</span>
                        <SquareArrowOutUpRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  <div className="text-xs md:text-sm">
                    {isMobile
                      ? profileData.bio.length > LIMITS.BIO_CHARS && (
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger className="cursor-default">
                                <p className="!text-left text-xs md:text-sm">
                                  {shortenString(
                                    profileData.bio,
                                    LIMITS.BIO_CHARS,
                                  )}
                                </p>
                              </TooltipTrigger>
                              <TooltipContent className="max-w-96">
                                {profileData.bio}
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        )
                      : profileData.bio}
                  </div>
                </div>

                <div className="hidden md:flex">
                  <ProfileStats profileData={profileData} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full rounded-lg bg-base-700 px-7 py-4 md:hidden">
            <ProfileStats profileData={profileData} />
          </div>
        </div>
      )}
    </>
  )
}
