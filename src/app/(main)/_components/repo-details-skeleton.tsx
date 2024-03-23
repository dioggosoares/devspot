import { Skeleton } from '@/components/ui/skeleton'

export function RepoDetailsSkeleton() {
  return (
    <div className="flex flex-col gap-4 pb-10">
      <div className="h-56 w-full rounded-lg border-base-600 bg-base-600">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3 p-6">
            <div className="flex w-full items-center justify-between">
              <Skeleton className="h-4 w-56 bg-neutral-200/60" />
              <Skeleton className="h-4 w-12 bg-neutral-200/60" />
            </div>

            <Skeleton className="min-h-20 w-full bg-neutral-200/60" />
          </div>

          <div className="flex w-full items-center justify-between px-6">
            <Skeleton className="h-4 w-32 bg-neutral-200/60" />
            <Skeleton className="h-4 w-12 bg-neutral-200/60" />
          </div>
        </div>
      </div>

      <div className="flex w-full items-center justify-between rounded-lg bg-base-700 px-7 py-4">
        <Skeleton className="h-6 w-20 bg-neutral-200/60 md:w-28" />
        <Skeleton className="h-6 w-32 bg-neutral-200/60 md:w-48" />
        <Skeleton className="h-6 w-20 bg-neutral-200/60 md:w-28" />
      </div>
    </div>
  )
}
