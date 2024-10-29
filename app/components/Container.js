import Link from "next/link";
import Image from "next/image";
import Form from "next/form";
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
    <DefaultContainer baseStyle={`mx-0 sm:mx-1/5 ${style}`}>
      <div className="py-4 space-y-2">
      <SectionHeader title={title}/>
        <div className="mx-8 text-justify">
          {children}
        </div>
      </div>
    </DefaultContainer>
  )
}

export function LoginContainer({style}) {
  return(
    <DefaultContainer baseStyle={`mx-0 sm:mx-1/5 align-center ${style}`}>
      <SectionHeader title="Admin Login" style="mb-8"/>
      <div className="flex flex-col space-y-4 w-1/2 mx-[25%]">
        <input className="border border-secondary-600" placeholder="Username" name="username"/>
        <input className="border border-secondary-600" type="password" placeholder="Password" name="password"/>
        <button className="w-1/2 mx-[25%] border rounded-full border-secondary-600 text-secondary-600 bg-primary-50 hover:bg-secondary-600 hover:text-primary-50 duration-300">Submit</button>
      </div>
    </DefaultContainer>
  )
}

export function BlogContainer({children, title, style}) {
  
  return(
    <DefaultContainer baseStyle={`mx-0 sm:mx-1/5 ${style}`}>
      <SectionHeader title={title}/>
      {children}
    </DefaultContainer>
  )
}

export function ImageContainer({children, title, text, url, style}) {
  return (
    <DefaultContainer baseStyle={`flex flex-col sm:flex-row mx-0 sm:mx-[20vw] ${style}`}>
      <div className="sm:shrink-0 w-[75vw] h-[75vw] mx-auto my-12 sm:m-0 rounded-full sm:rounded-none sm:w-1/2 sm:h-auto overflow-hidden">
        <Image
          src={url}
          alt="Some image"
          placeholder="blur"
          full="true"
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

export function FlexibleImageContainer({children, title, text, url, style, before}) {
  return (
    <DefaultContainer baseStyle={`flex flex-col md:flex-row md:grid-cols-2 content-center mx-0 md:mx-[20vw] ${style}`}>
      {(before) && <div className="md:shrink-0 w-[75vw] h-[75vw] my-12 mx-auto md:ml-6 rounded-full md:w-auto md:h-48 overflow-hidden">
        <Image
          src={url}
          alt="Some image"
          placeholder="blur"
          full="true"
          style={{objectPosition: "center", height: "100%", width: "100%", aspectRatio: "1", objectFit: "cover"}}
        />
      </div>}
      <div className="p-8 space-y-2 w:full sm:w-auto">
        <SectionHeader title={title} text={text}/>
        <div>
          {children}
        </div>
      </div>
      {(!before) && <div className="md:shrink-0 w-[75vw] right-0 h-[75vw] my-12 mx-auto md:mr-6 rounded-full md:w-auto md:h-48 overflow-hidden">
        <Image
          src={url}
          alt="Some image"
          placeholder="blur"
          full="true"
          style={{objectPosition: "center", height: "100%", width: "100%", aspectRatio: "1", objectFit: "cover"}}
        />
      </div>}
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
  
