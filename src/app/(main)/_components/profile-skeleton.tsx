import { Skeleton } from '@/components/ui/skeleton'

export function ProfileSkeleton() {
  return (
    <div className="flex w-full items-center gap-8">
      <Skeleton className="h-36 w-36 bg-neutral-200/60" />
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-2">
          <div className="flex w-full items-center justify-between">
            <Skeleton className="h-7 w-28 bg-neutral-200/60" />
            <Skeleton className="h-9 w-24 bg-neutral-200/60" />
          </div>

          <Skeleton className="h-10 w-full bg-neutral-200/60" />
        </div>

        <div className="flex w-full items-center gap-6">
          <div className="flex items-center gap-2">
            <Skeleton className="h-7 w-28 bg-neutral-200/60" />
          </div>

          <div className="flex items-center gap-2">
            <Skeleton className="h-7 w-72 bg-neutral-200/60" />
          </div>

          <div className="flex items-center gap-2">
            <Skeleton className="h-7 w-28 bg-neutral-200/60" />
          </div>
        </div>
      </div>
    </div>
  )
}
