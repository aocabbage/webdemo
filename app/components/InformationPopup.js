export default function InformationPopup({Title, Description, handleClose}) { 
  return(
  <div className="absolute w-full h-full top-0 overflow-hidden z-20 py-[20%] px-[20%] bg-gradient-to-tr from-black/80 to-black/70">
    <div className="relative flex relative justify-center flex-col text-white">
      <h1 className="text-7xl font-bold">
        {Title}
      </h1>
      <p className="pt-[14px] indent-8">
        {Description}
      </p>
      <button onClick={handleClose} className="text-4xl hover:scale-150 pt-[14px] duration-300">
      ▼
      </button>
    </div>
  </div>)
}