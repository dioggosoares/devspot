import { Skeleton } from '@/components/ui/skeleton'

import { StatsSkeleton } from './stats-skeleton'

export function ProfileSkeleton() {
  return (
    <>
      <div className="flex h-32 w-full rounded-lg bg-base-700 px-10 py-6 md:h-48 md:py-7">
        <div className="flex w-full max-w-72 items-center gap-8 md:max-w-full">
          <Skeleton className="h-20 w-20 bg-base-400/60 md:h-36 md:w-36" />
          <div className="flex w-full max-w-72 flex-col gap-7 md:max-w-full">
            <div className="flex flex-col gap-2">
              <div className="flex w-full max-w-[30rem] items-center md:justify-between">
                <Skeleton className="h-7 max-w-24 bg-base-400/60 md:w-28" />
                <Skeleton className="h-9 w-24 bg-base-400/60" />
              </div>

              <Skeleton className="h-8 max-w-[30rem] bg-base-400/60 md:h-10" />
            </div>

            <div className="hidden max-w-[30rem] items-center gap-6 md:flex">
              <div className="flex items-center gap-2">
                <Skeleton className="h-7 w-28 bg-base-400/60" />
              </div>

              <div className="flex items-center gap-2">
                <Skeleton className="h-7 w-36 bg-base-400/60" />
              </div>

              <div className="flex items-center gap-2">
                <Skeleton className="h-7 w-28 bg-base-400/60" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full rounded-lg bg-base-700 px-7 py-4 md:hidden">
        <StatsSkeleton />
      </div>
    </>
  )
}
