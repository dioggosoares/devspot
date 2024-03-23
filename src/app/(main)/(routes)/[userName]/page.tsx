import { Profile } from '../../_components/profile'
import { Repositories } from '../../_components/repositories'

interface HomeProps {
  params: {
    userName: string
  }
}

export default function Home({ params }: HomeProps) {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-10 py-2">
      <div className="flex w-full flex-col gap-6 px-6 lg:px-0">
        <Profile username={params.userName} />
      </div>
      <div className="relative flex w-full flex-col gap-6 px-6 lg:px-0">
        <Repositories username={params.userName} />
      </div>
    </div>
  )
}
