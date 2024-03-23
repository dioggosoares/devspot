import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { GitFork, Users } from 'lucide-react'
import Link from 'next/link'

import { User } from '@/@types/user'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { LIMITS } from '@/constants/general'
import { addSufixForThousands, addThousandSeparator } from '@/utils/formatter'

interface ProfileStats {
  profileData: User
}

export function ProfileStats({ profileData }: ProfileStats) {
  return (
    <div className="flex w-full flex-col gap-4 md:flex-row md:gap-6">
      <div className="flex items-center gap-2">
        <GitHubLogoIcon />
        <Link href={profileData.html_url || ''} target="_blank">
          <span className="text-xs lg:text-sm">@{profileData.login}</span>
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <Users className="h-4 w-4" />
        <span className="text-xs lg:text-sm">
          <span className="font-bold">
            {profileData.followers > LIMITS.FOLLOWERS ? (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-default">
                    {addSufixForThousands(profileData.followers)}
                  </TooltipTrigger>
                  <TooltipContent>
                    {addThousandSeparator(profileData.followers)}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ) : (
              addSufixForThousands(profileData.followers)
            )}
          </span>{' '}
          seguidores
        </span>
        -
        <span className="text-xs lg:text-sm">
          <span className="font-bold">
            {profileData.following > LIMITS.FOLLOWING ? (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-default">
                    {addSufixForThousands(profileData.following)}
                  </TooltipTrigger>
                  <TooltipContent>
                    {addThousandSeparator(profileData.following)}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ) : (
              addSufixForThousands(profileData.following)
            )}
          </span>{' '}
          seguindo
        </span>
      </div>

      <div className="flex items-center gap-2">
        <GitFork className="h-4 w-4" />
        <span className="text-xs lg:text-sm">
          <span className="font-bold">
            {profileData.public_repos > LIMITS.REPOS ? (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-default">
                    {addSufixForThousands(profileData.public_repos)}
                  </TooltipTrigger>
                  <TooltipContent>
                    {addThousandSeparator(profileData.public_repos)}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ) : (
              addSufixForThousands(profileData.public_repos)
            )}
          </span>{' '}
          repos
        </span>
      </div>
    </div>
  )
}
