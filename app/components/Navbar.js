import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="m-4 border-b border-gray-800 sticky top-0 bg-gray-900 text-gray-100 z-10 rounded-lg" >
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
