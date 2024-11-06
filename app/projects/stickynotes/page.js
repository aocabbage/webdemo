import notes from "./notes.json";

export default function Home() {
    return(
    <div className="mt-28 sm:mt-32 w-screen h-screen">
        <ul>
            {notes.map((content) => (
                <div key={content} className={`absolute top-[${content.x}px] left-[${content.y}px]`}>{content.content}</div>
            ))}
        </ul>
    </div>)
}