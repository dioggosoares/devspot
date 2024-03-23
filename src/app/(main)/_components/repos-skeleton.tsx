import { Skeleton } from '@/components/ui/skeleton'

export function ReposSkeleton() {
  return (
    <>
      <div className="flex w-full items-center justify-between">
        <Skeleton className="h-6 w-28 bg-neutral-200/60" />
        <Skeleton className="h-6 w-48 bg-neutral-200/60 md:w-64" />
      </div>

      <div
        className="grid max-h-[32rem] grid-cols-1 gap-2 overflow-y-auto pb-7 pr-3
        md:grid-cols-2 lg:grid-cols-3"
      >
        {Array.from({ length: 10 }).map((_, index) => {
          return (
            <div
              key={index}
              className="h-56 w-[21.75rem] rounded-lg border-base-600 bg-base-600 lg:w-[15.25rem]"
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3 p-6">
                  <div className="flex w-full items-center justify-between">
                    <Skeleton className="h-4 w-32 bg-neutral-200/60" />
                    <Skeleton className="h-4 w-12 bg-neutral-200/60" />
                  </div>

                  <Skeleton className="min-h-20 w-72 bg-neutral-200/60 lg:w-48" />
                </div>

                <div className="flex w-full items-center justify-between px-6">
                  <Skeleton className="h-4 w-32 bg-neutral-200/60" />
                  <Skeleton className="h-4 w-12 bg-neutral-200/60" />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
