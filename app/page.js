export default function Home() {
  
    return (
    <div class="absolute min-h-screen min-w-full top-0 justify-center overflow-hidden bg-gray-50">
      <div class="relative flex flex-row pb-10 mx-auto mt-30 overflow-x-scroll">
        <Image/>
        <Image/>
        <Image/>
      </div>
        <div class="relative flex-col bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-xl sm:rounded-lg sm:px-10 space-y-6 py-8 text-base leading-7 text-gray-600">
          <h1 class="text-2xl text-black font-bold">
            Andrew Cabbage
          </h1>
          <p>
            Environmental Science Student at the University of Washington
          </p>
      </div>
    </div>
  )
}

function Image() {
  return (<img src="https://th-thumbnailer.cdn-si-edu.com/j0hA_jcyAd1wzrT44412cm9XgL0=/1000x750/filters:no_upscale():focal(1600x1204:1601x1205)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/78/a3/78a3492c-982c-45dc-bfce-b1733ba7f51d/nov_penguin.jpg" 
    class="relative bg-grey shadow-xl ring-1 ring-gray-900/5 mx-auto rounded-lg px-10 space-y-6 py-8 hover:bg-blue-600 duration-300"/>)
}

