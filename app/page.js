import Image from "next/image"
import rainier from "./src/Images/rainier.jpg"
import Link from "next/link"

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
      <div className="absolute bottom-4 ml-8 text-primary-50">
        <p className="text-7xl font-bold ">
          Andrew Cabbage
        </p>
        <p className="italic">
          Environmental Engineering student at the University of Washington.
        </p>
      </div>
    </div>
    <Column>
      <h1 className="text-4xl font-bold">
        So... what do I do?
      </h1>
      <Row>
        <RowContainter title="Programming" url="/blog">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo vestibulum quam, quis pulvinar ante. Aliquam sodales elementum nisi, vitae maximus lacus mollis tincidunt. Praesent tempor nunc nisi, sit amet rutrum dolor fringilla eu. Sed commodo, justo sit amet luctus molestie, leo erat venenatis nunc, et posuere nulla arcu ut augue. Sed felis diam, eleifend eget lacinia non, aliquam quis nibh. Aliquam vestibulum viverra ligula, vel suscipit lectus feugiat eget. Cras pulvinar venenatis nisl, et convallis metus placerat id. Integer congue tortor lectus. Cras vitae lorem egestas, bibendum tellus ut, mattis urna. Etiam placerat imperdiet quam eget porta. Proin vel diam lectus. Duis lorem lorem, iaculis vitae sagittis vel, finibus in ligula. 
        </RowContainter>
        <RowContainter title="Internship" url="/blog">
        Quisque pulvinar mauris ex, faucibus faucibus enim pharetra sit amet. Donec eget ullamcorper sapien. Donec vel tempus orci. Aliquam tellus massa, interdum ut imperdiet non, pharetra in nibh. Nam gravida ligula at metus aliquam efficitur et vitae neque. Fusce hendrerit fringilla tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie est venenatis risus porttitor, sed vestibulum lectus accumsan. Curabitur sit amet elementum ligula, vel viverra lectus. Fusce ultrices, est non fermentum tempor, libero erat blandit urna, eu aliquam erat arcu sit amet ipsum. Nulla tincidunt lectus metus, non auctor arcu fringilla et. Mauris a diam convallis, luctus quam ac, molestie magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent facilisis est molestie, rhoncus nisl in, mollis nisl. Nullam purus enim, ultricies vitae orci nec, faucibus lacinia risus. Donec condimentum imperdiet leo a pharetra. 
        </RowContainter>
        <RowContainter title="Advocacy" url="/blog">
        Duis accumsan purus a suscipit viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ornare mattis hendrerit. Nulla finibus nunc ac est volutpat, convallis pretium sapien ultricies. Aliquam erat volutpat. Ut a justo id enim euismod sollicitudin. Aliquam finibus euismod velit, sit amet consectetur tortor accumsan vitae. Proin ac dui arcu. In sed magna neque. 
        </RowContainter>
      </Row>
      <h1 className="text-4xl font-bold">
        That's all for now!
      </h1>
    </Column>
  </>
  )
}

function Column({ children }) {
  return (
    <div className="relative flex flex-col w-full h-full text-primary-900 p-16 text-center">
      {children}
    </div>
  )
}

function Row({ children }) {
  return (
    <div className="relative flex flex-row w-full justify-evenly pb-10 pt-10 mx-auto overflow-hidden">
      {children}
    </div>
  )
}

function RowContainter({ children, title, url }) {
  return(
  <div className="relative rounded-lg shadow-xl text-primary-900 border border-secondary-500 w-[30%] hover:text-primary-500 duration-300 py-4 space-y-2">
    <h1 className="text-2xl font-bold">
      {title}
    </h1>
    <div className="mx-8 text-justify indent-8">
    {children}
    </div>
    <div className="mt-4 w-full h-8 bg-primary-50">
      <Link className="absolute bottom-4 right-4 text-primary-900 hover:underline hover:text-secondary-500 duration-300" href={url}>Read More &#62;</Link>
    </div>
  </div>
  )
}

