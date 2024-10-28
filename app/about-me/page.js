import Image from "next/image";
import { Column, Row } from "../components/Structures";
import SectionHeader from "../components/SectionHeader";
import { ImageContainer } from "../components/Container";

import myself from '../src/Images/me.jpg'

export default function Home() {
    return(
        <div className="mt-8 w-screen">
            <Column>
                <Row style="h-[80vh]">
                    <ImageContainer title="About Me" url={myself} style="w-3/4">
                        <p>
                            Hi there! I'm Andrew Cabbage, an 18 year-old freshman at the University of Washington. I come from Yakima, Washington and have many intrests all over the place. I started baking when I was ten, programming when I was seven, and hiking longer ago than I can remember!
                        </p>
                    </ImageContainer>
                </Row>
            </Column>
        </div>
    )
}