import Image from "next/image";
import LargeContainter from "../components/LargeContainer";
import { Column, Row } from "../components/Structures";
import SectionHeader from "../components/SectionHeader";

import myself from '../src/Images/me.jpg'
export default function Home() {
    return(
        <div className="mt-8 w-screen">
            <Column>
                <Row style="h-[80vh]">
                    <LargeContainter>
                        <SectionHeader title="About me"/>
                        <p>
                            Hi there! I'm Andrew Cabbage, an 18 year-old freshman at the University of Washington. I come from Yakima, Washington and have many intrests all over the place. I started baking when I was ten, programming when I was seven, and hiking longer ago than I can remember!
                        </p>
                    </LargeContainter>
                        <Image
                            className="relative rounded-lg shadow-xl border border-secondary-500 w-1/3"
                            src={myself}
                            full
                            alt="A picture of myself, Andrew Cabbage"
                            placeholder="blur"
                            style={{ objectFit : 'cover', objectPosition : 'center'}}
                        />
                </Row>
            </Column>
        </div>
    )
}