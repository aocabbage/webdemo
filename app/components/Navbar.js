import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed z-10 top-4 left-4 right-4 border border-secondary-800 w-auto top-0 bg-primary-900 text-secondary-50 rounded-lg" >
      <div className="h-16 p-4 mx-8 flex items-center justify-between">
        <Link href="/" className="font-medium text-lg md:hover:underline">
          Andrew Cabbage
        </Link>
        <ul className="flex items-center justify-end space-x-2 text-sm font-medium">
          <li className="md:hover:underline">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="md:hover:underline">
            <Link href="/photos">Photos</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
