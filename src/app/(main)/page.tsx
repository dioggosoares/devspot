import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { SquareArrowOutUpRight } from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div
      className="absolute left-1/2 top-1/2 z-50 mx-auto flex w-full
      max-w-3xl -translate-x-1/2 -translate-y-1/2"
    >
      <div className="h-48 w-full rounded-lg bg-base-700 px-10 py-8">
        <div className="flex items-start gap-8">
          <Image
            src="https://github.com/dioggosoares.png"
            alt="github avatar"
            width={128}
            height={128}
            className="rounded-md"
          />
          <div className="flex w-full flex-col gap-7">
            <div className="flex flex-col gap-2">
              <div className="flex w-full items-center justify-between">
                <h1 className="text-xl font-semibold">Diogo Soares</h1>
                <Button variant="ghost" size="sm">
                  <span className="text-xs">GITHUB</span>
                  <SquareArrowOutUpRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <p className="text-sm">
                Im a frontend dev for 17 years, working mainly with ReactJS and
                Javascript. I have 5 years experience with Typescript, NextJS,
                JAMStack and Microservices.
              </p>
            </div>

            <div className="flex w-full items-center gap-6">
              <div className="flex items-center gap-2">
                <GitHubLogoIcon />
                <span className="text-sm">dioggosoares</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
