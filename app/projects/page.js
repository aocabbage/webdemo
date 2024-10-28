import Link from "next/link";
import SimpleContainter from "../components/Container";
import { Column, Row } from "../components/Structures";
import SectionHeader from "../components/SectionHeader";

export default function Home() {
    return(
        <div className="mt-24">
            <Row>
                <SimpleContainter>
                    <SectionHeader title="Projects" text="so far..."/>
                    <ul>
                        <ListItem url="/projects/blog">
                            Live Blog
                        </ListItem>
                        <ListItem url="/projects/photos">
                            Photos of Animals
                        </ListItem>
                    </ul>
                </SimpleContainter>
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