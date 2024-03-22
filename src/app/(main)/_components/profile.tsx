'use client'

import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { useQuery } from '@tanstack/react-query'
import { GitFork, SquareArrowOutUpRight, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { UserData } from '@/@types/user'
import { Button } from '@/components/ui/button'
import { fetcher } from '@/utils/fetcher'
import { addSufixForThousands } from '@/utils/formatter'

import { ProfileSkeleton } from './profile-skeleton'

interface ProfileProps {
  username: string
}

export function Profile({ username }: ProfileProps) {
  const url = `https://api.github.com/users/${username}`

  const { data: profileData, isLoading: isLoadingProfile } = useQuery<UserData>(
    {
      queryKey: ['profile'],
      queryFn: () => fetcher(url),
    },
  )

  return (
    <>
      {!profileData || isLoadingProfile ? (
        <ProfileSkeleton />
      ) : (
        <div className="flex w-full items-center gap-8">
          <Image
            src={profileData.avatar_url || ''}
            alt="github avatar"
            width={128}
            height={128}
            className="rounded-md"
          />
          <div className="flex w-full flex-col gap-7">
            <div className="flex flex-col gap-2">
              <div className="flex w-full items-center justify-between">
                <h1 className="text-xl font-semibold">{profileData.name}</h1>
                <Button variant="ghost" size="sm" asChild>
                  <Link href={profileData.html_url || ''} target="_blank">
                    <span className="text-xs">GITHUB</span>
                    <SquareArrowOutUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <p className="text-sm">{profileData.bio}</p>
            </div>

            <div className="flex w-full items-center gap-6">
              <div className="flex items-center gap-2">
                <GitHubLogoIcon />
                <span className="text-sm">@{profileData.login}</span>
              </div>

              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span className="text-sm">
                  <span className="font-bold">
                    {addSufixForThousands(profileData.followers)}
                  </span>{' '}
                  seguidores
                </span>
                -
                <span className="text-sm">
                  <span className="font-bold">
                    {addSufixForThousands(profileData.following)}
                  </span>{' '}
                  seguindo
                </span>
              </div>

              <div className="flex items-center gap-2">
                <GitFork className="h-4 w-4" />
                <span className="text-sm">
                  <span className="font-bold">
                    {addSufixForThousands(profileData.public_repos)}
                  </span>{' '}
                  repos
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
