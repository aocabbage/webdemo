import Link from "next/link";
import TextContainer from "../components/Container";
import SectionHeader from "../components/SectionHeader";

export default function Home() {
    return(
        <div className="mt-28 sm:mt-32 mb-12">
            <TextContainer style="mx-0 sm:mx-[25vw] w-full sm:w-[50vw] pb-4">
                <SectionHeader title="Projects" text="so far..." style="text-center"/>
                <ul>
                    <ListItem url="/projects/blog">
                        Live Blog
                    </ListItem>
                    <ListItem url="/projects/photos">
                        Photos of Animals
                    </ListItem>
                    <ListItem url="/projects/stickynotes">
                        Sticky Notes
                    </ListItem>
                    <ListItem url="/projects/email">
                        Email System
                    </ListItem>
                </ul>
            </TextContainer>
        </div>
    )
}

function ListItem({url, children}) {
    return(
        <li className="hover:underline hover:text-secondary-600 text-primary-900">
            <Link href={url}>&#62; {children}</Link>
        </li>
    )
}