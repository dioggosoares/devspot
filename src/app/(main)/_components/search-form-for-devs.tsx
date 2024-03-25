'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const searchForDevFormSchema = z.object({
  name: z.string().min(3),
})

type SearchForDevFormSchema = z.infer<typeof searchForDevFormSchema>

export function SearchFormForDevs() {
  const router = useRouter()

  const { register, handleSubmit } = useForm<SearchForDevFormSchema>({
    resolver: zodResolver(searchForDevFormSchema),
  })

  function handleSearchDevs(data: SearchForDevFormSchema) {
    router.replace(`/${data.name}`)
  }

  return (
    <form
      onSubmit={handleSubmit(handleSearchDevs)}
      className="flex w-full items-center gap-3"
    >
      <Input placeholder="Buscar desenvolvedores..." {...register('name')} />
      <Button type="submit" variant="brand">
        Buscar
      </Button>
    </form>
  )
}
