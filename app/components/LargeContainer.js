import Link from "next/link";

export default function LargeContainter({ children, title, url, handleChildEdit}) {
    return(
    <div className="relative rounded-lg shadow-xl text-primary-900 border border-secondary-500 w-[50%] mx-[25%] hover:text-primary-500 duration-300 py-4 space-y-2">
      <h1 className="text-2xl text-center font-bold">
        {title}
      </h1>
      <div className="flex flex-col space=y-4 mx-8 text-justify">
        {children}
      </div>
      {(url != null) && <div className="mt-4 w-full h-8 bg-primary-50">
        {(url != "edit") && <Link className="absolute bottom-4 right-4 text-primary-900 hover:underline hover:text-secondary-500 duration-300" href={url}>Read More &#62;</Link>}
        {(url == "edit") && <button onClick={() => handleChildEdit} className="absolute bottom-4 right-4 text-primary-900 hover:underline hover:text-secondary-500 duration-300">Edit</button>}
      </div>}
    </div>
    )
  }
  