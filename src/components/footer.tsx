export function Footer() {
  return (
    <footer
      className="border-brand-blue/40 bg-base-700 fixed bottom-0 z-30 w-full
      border-t p-1"
    >
      <div
        className="md:max-w-(--breakpoint-2xl) mx-auto flex w-full items-center
        justify-center"
      >
        <div
          className="flex w-full items-center justify-between space-x-4 text-xs
          md:block md:w-auto"
        >
          &copy; DevSpot - {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  )
}
