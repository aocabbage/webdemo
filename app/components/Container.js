import Link from "next/link";
import { FilledButton } from "./Buttons";

export default function Containter({ children, title, url}) {
    return(
    <div className="relative rounded-lg shadow-xl text-primary-900 border border-secondary-600 w-[30%] hover:text-primary-500 duration-300 py-4 space-y-2 overflow-hidden">
      <h1 className="text-2xl text-center font-bold">
        {title}
      </h1>
      <div className="mx-8 text-justify">
      {children}
      </div>
      {(url != null) && 
      <>
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-primary-50/100 to-primary-50/0"/>
        <Link href={url} className="absolute bottom-4 right-4">
          <FilledButton>
            <p >Read More &#62;</p>
          </FilledButton>
        </Link>
      </>
      }
    </div>
    )
  }
  