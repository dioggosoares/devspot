import { Logo } from './logo'

export function Header() {
  return (
    <header className="bg-base-600 flex w-full">
      <div
        className="bg-base-600 bg-grid-small-white/[0.1] relative flex h-[14rem] w-full
      items-center justify-center"
      >
        <div
          className="bg-base-600 pointer-events-none absolute inset-0 flex
          items-center justify-center
          [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"
        />
        <div
          className="bg-linear-to-b relative z-20 flex w-full max-w-7xl
          items-center justify-center from-slate-800 to-slate-500
          bg-clip-text py-8 text-4xl font-bold text-transparent
          sm:text-7xl"
        >
          <Logo />
        </div>
      </div>
    </header>
  )
}
