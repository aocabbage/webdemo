import Link from "next/link";

export default function LargeContainter({ children, title }) {
    return(
    <div className="relative text-left rounded-lg shadow-xl text-primary-900 border border-secondary-500 w-1/3 py-4 space-y-2">
      <h1 className="text-2xl font-bold">
        {title}
      </h1>
      <div className="flex flex-col space=y-4 mx-8 text-justify">
        {children}
      </div>
    </div>
    )
  }
  