import Image from "next/image"
import { LinkedContainter } from "./components/Container"
import SectionHeader from "./components/SectionHeader"
import { Column, Row, FlexFlip } from "./components/Structures"

import rainier from "./src/Images/rainier.jpg"

export default function Home() {
  return (
  <>
    <div className="relative w-full h-[80vh]">
      <Image
        alt="A picture of Andrew Cabbage (myself)"
        src={rainier}
        full="true"
        placeholder="blur"
        style={{ width : '100%', height : '100%', objectFit : 'cover', objectPosition : 'center 20%'}}
      />
      <div className="absolute bottom-4 mx-8 text-primary-50">
        <p className="text-7xl font-bold ">
          Andrew Cabbage
        </p>
        <p className="italic">
          Environmental Engineering student at the University of Washington.
        </p>
      </div>
    </div>
    <div className="my-12">
      <SectionHeader title="What do I do?" text="As a student at the University of Washington"/>
      <FlexFlip>
        <LinkedContainter title="Programming" url="/projects">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo vestibulum quam, quis pulvinar ante. Aliquam sodales elementum nisi, vitae maximus lacus mollis tincidunt. Praesent tempor nunc nisi, sit amet rutrum dolor fringilla eu. Sed commodo, justo sit amet luctus molestie, leo erat venenatis nunc, et posuere nulla arcu ut augue. Sed felis diam, eleifend eget lacinia non, aliquam quis nibh. Aliquam vestibulum viverra ligula, vel suscipit lectus feugiat eget. Cras pulvinar venenatis nisl, et convallis metus placerat id. Integer congue tortor lectus. Cras vitae lorem egestas, bibendum tellus ut, mattis urna. Etiam placerat imperdiet quam eget porta. Proin vel diam lectus. Duis lorem lorem, iaculis vitae sagittis vel, finibus in ligula. 
        </LinkedContainter>
        <LinkedContainter title="Internship" url="/history">
        Quisque pulvinar mauris ex, faucibus faucibus enim pharetra sit amet. Donec eget ullamcorper sapien. Donec vel tempus orci. Aliquam tellus massa, interdum ut imperdiet non, pharetra in nibh. Nam gravida ligula at metus aliquam efficitur et vitae neque. Fusce hendrerit fringilla tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie est venenatis risus porttitor, sed vestibulum lectus accumsan. Curabitur sit amet elementum ligula, vel viverra lectus. Fusce ultrices, est non fermentum tempor, libero erat blandit urna, eu aliquam erat arcu sit amet ipsum. Nulla tincidunt lectus metus, non auctor arcu fringilla et. Mauris a diam convallis, luctus quam ac, molestie magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent facilisis est molestie, rhoncus nisl in, mollis nisl. Nullam purus enim, ultricies vitae orci nec, faucibus lacinia risus. Donec condimentum imperdiet leo a pharetra. 
        </LinkedContainter>
        <LinkedContainter title="Advocacy" url="/about-me">
        Duis accumsan purus a suscipit viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ornare mattis hendrerit. Nulla finibus nunc ac est volutpat, convallis pretium sapien ultricies. Aliquam erat volutpat. Ut a justo id enim euismod sollicitudin. Aliquam finibus euismod velit, sit amet consectetur tortor accumsan vitae. Proin ac dui arcu. In sed magna neque. 
        </LinkedContainter>
      </FlexFlip>
      <SectionHeader title="Where do I come from?" text="I grew up not too long ago!"/>
    </div>
  </>
  )
}




