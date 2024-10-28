import Link from "next/link";
import Image from "next/image";
import { FilledButton } from "./Buttons";
import SectionHeader from "./SectionHeader";

export function LinkedContainter({ children, title, url, style}) {
  return(
  <DefaultContainer style={style}>
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
    <DefaultContainer style={style}>
      <div className="py-4 space-y-2">
      <SectionHeader title={title}/>
        <div className="mx-8 text-justify">
          {children}
        </div>
      </div>
    </DefaultContainer>
  )
}

export function ImageContainer({children, title, url, style}) {
  return (
    <DefaultContainer style={`flex flex-row ${style}`}>
      <div className="py-4 space-y-2 w-1/2 h-full">
        <SectionHeader title={title}/>
        <div className="mx-8 text-justify">
          {children}
        </div>
      </div>
      <div className="w-1/2 h-full">
        <Image
          src={url}
          alt="Some image"
          placeholder="blur"
          style={{ width : '100%', height : '100%', objectFit : 'cover', objectPosition : 'center 20%'}}
        />
      </div>
    </DefaultContainer>
  )
}

function DefaultContainer({children, style}) {
  return(
    <div className={`relative rounded-lg shadow-xl text-primary-900 border border-secondary-600 w-[30%] overflow-hidden ${style}`}>
      {children}
    </div>
  )
}
  