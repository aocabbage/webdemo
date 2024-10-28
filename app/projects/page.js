import Link from "next/link";

export default function Home() {
    return(
        <div className="mt-24">
            <ul>
                <li>
                    <Link href="/projects/blog">Blog</Link>
                </li>
                <li>
                    <Link href="/projects/photos">Photos</Link>
                </li>
            </ul>
        </div>
    )
}