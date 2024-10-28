import Link from "next/link";
import TextContainer from "../components/Container";
import { Column, Row } from "../components/Structures";
import SectionHeader from "../components/SectionHeader";

export default function Home() {
    return(
        <div className="mt-28 sm:mt-32 mb-12">
            <Row>
                <TextContainer style="w-full sm:w-[50vw]">
                    <SectionHeader title="Projects" text="so far..."/>
                    <ul>
                        <ListItem url="/projects/blog">
                            Live Blog
                        </ListItem>
                        <ListItem url="/projects/photos">
                            Photos of Animals
                        </ListItem>
                    </ul>
                </TextContainer>
            </Row>
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