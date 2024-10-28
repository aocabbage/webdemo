import Link from "next/link";
import Image from "next/image";
import { FilledButton } from "./Buttons";
import SectionHeader from "./SectionHeader";

export function LinkedContainter({ children, title, url, style}) {
  return(
  <DefaultContainer baseStyle={`w-full sm:w-[30vw] mt-6 sm:mt-8 ${style}`}>
    <div className="py-4 space-y-2">
      <SectionHeader title={title}/>  
      <div className="mx-8 text-justify">
        {children}
      </div>
    </div>
    <>
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-primary-50/100 to-primary-50/0"/>
      <Link href={url} className="absolute bottom-4 right-4">
        <FilledButton>
          <p>Read More &#62;</p>
        </FilledButton>
      </Link>
    </>
  </DefaultContainer>
  )
}

export default function TextContainer({children, title, style}) {
  return (
    <DefaultContainer baseStyle={style}>
      <div className="py-4 space-y-2">
      <SectionHeader title={title}/>
        <div className="mx-8 text-justify">
          {children}
        </div>
      </div>
    </DefaultContainer>
  )
}

export function BlogContainer({children, title, style}) {
  
  return(
    <DefaultContainer baseStyle={`mx-0 sm:mx-1/5 ${style}`}>
      <h1 className="text-2xl text-center font-bold">
        {title}
      </h1>
      {children}
    </DefaultContainer>
  )
}

export function ImageContainer({children, title, text, url, style}) {
  return (
    <DefaultContainer baseStyle={`flex flex-col sm:flex-row mx-auto ${style}`}>
      <div className="sm:shrink-0 w-[75vw] h-[75vw] mx-auto my-12 sm:m-0 rounded-full sm:rounded-none sm:w-1/2 sm:h-auto overflow-hidden">
        <Image
          src={url}
          alt="Some image"
          placeholder="blur"
          style={{objectPosition: "center", height: "100%", objectFit: "cover"}}
        />
      </div>
      <div className="p-8 space-y-2 w:full sm:w-1/2">
        <SectionHeader title={title} text={text}/>
        <div>
          {children}
        </div>
      </div>
    </DefaultContainer>
  )
}

function DefaultContainer({children, baseStyle}) {
  return(
    <div className={`duration-300 hover:shadow-[0px_0px_15px] hover:shadow-secondary-600 my-16 relative sm:rounded-lg shadow-xl text-primary-900 border border-secondary-600 overflow-hidden ${baseStyle}`}>
      {children}
    </div>
  )
}
  
