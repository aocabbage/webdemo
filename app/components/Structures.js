export function Column({ children, style }) {
    return (
        <div className={`relative flex flex-col w-full h-full text-primary-900 p-16 text-center ${style}`}>
            {children}
        </div>
    )
}
  
export function Row({ children , style }) {
    return (
    <div className={`relative flex flex-row w-full justify-evenly pb-10 pt-10 mx-auto overflow-hidden ${style}`} 
    >
        {children}
    </div>
    )
}