export function Footer() {
  return (
    <footer
      className="fixed bottom-0 z-30 w-full border-t border-brand-blue/40
      bg-base-700 p-1"
    >
      <div
        className="mx-auto flex w-full items-center justify-center
        md:max-w-screen-2xl"
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
