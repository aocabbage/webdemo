import { FlexibleImageContainer } from '@/app/components/Container';

import cee from '@/app/src/Images/cee.jpg';
import ypr from '@/app/src/Images/ypr.jpg';

export default function Home() {
    return(
        <div className="mt-28 sm:mt-32">
            <FlexibleImageContainer title="Environmental Engineering Intern" text="November 2024 to Current Day" url={cee} style="text-left" before={true}>
                <p className="text-left mt-4">
                    I currently work as an Intern within Asset Management at the University of Washington Facilities Engineering Services. My time at this job has not yet started, but I'll be damned if I'm not excited about it.
                </p>
            </FlexibleImageContainer>
            <FlexibleImageContainer title="Lead Lifeguard" text="August 2021 to September 2024" url={ypr} style="text-left" before={false}>
                <p className="text-left mt-4">
                    For three years in high school, I worked as a Lead Lifeguard for two of my public pools with City of Yakima Parks and Recreation.
                </p>
            </FlexibleImageContainer>
        </div>
    )
}