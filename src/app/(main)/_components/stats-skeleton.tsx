import { Skeleton } from '@/components/ui/skeleton'

export function StatsSkeleton() {
  return (
    <div className="flex w-full flex-col gap-4">
      <Skeleton className="h-6 w-28 bg-base-400/60" />
      <Skeleton className="h-6 w-48 bg-base-400/60" />
      <Skeleton className="h-6 w-28 bg-base-400/60" />
    </div>
  )
}
