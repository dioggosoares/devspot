import { Logo } from './logo'

export function Header() {
  return (
    <header className="flex w-full bg-base-600">
      <div
        className="relative flex h-64 w-full items-center justify-center
      bg-base-600 bg-grid-small-white/[0.1]"
      >
        <div
          className="pointer-events-none absolute inset-0 flex items-center
          justify-center bg-base-600
          [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"
        />
        <div
          className="relative z-20 flex w-full max-w-7xl items-center
          justify-center bg-gradient-to-b from-slate-800 to-slate-500
          bg-clip-text py-8 pb-24 text-4xl font-bold text-transparent
          sm:text-7xl"
        >
          <Logo />
        </div>
      </div>
    </header>
  )
}
