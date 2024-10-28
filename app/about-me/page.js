import Image from "next/image";
import { Column, Row } from "../components/Structures";
import SectionHeader from "../components/SectionHeader";
import { ImageContainer } from "../components/Container";

import myself from '../src/Images/me.jpg'

export default function Home() {
    return(
        <div className="mt-28 mb-12 sm:mt-32 w-screen">
            <Column>
                <Row style="">
                    <ImageContainer title="Andrew Cabbage" text="Student at the University of Washington" url={myself} style="">
                        <p className="text-left mt-4">
                            Hi there! I'm Andrew Cabbage, an 18 year-old freshman at the University of Washington. I come from Yakima, Washington and have many interests from all over the place. I have been baking since I was ten, programming since I was seven, and hiking since longer than I can remember!
                        </p>
                    </ImageContainer>
                </Row>
            </Column>
            
        </div>
    )
}