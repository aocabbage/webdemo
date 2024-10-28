import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed z-10 left-0 top-0 right-0 sm:top-4 sm:left-4 sm:right-4 border border-secondary-600 w-auto top-0 bg-secondary-600 text-primary-50 sm:rounded-lg duration-300" >
      <div className="h-16 p-4 mx-8 flex items-center justify-between">
        <Link href="/" className="font-medium text-lg md:hover:underline">
          Andrew Cabbage
        </Link>
        <ul className="flex items-center justify-end space-x-2 text-sm font-medium">
          <li className="md:hover:underline">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="md:hover:underline">
            <Link href="/history">History</Link>
          </li>
          <li className="md:hover:underline">
            <Link href="/about-me">About Me</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
