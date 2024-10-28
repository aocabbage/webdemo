export function Column({ children, style }) {
    return (
        <div className={`relative flex flex-col w-full text-primary-900 text-center sm:px-16 ${style}`}>
            {children}
        </div>
    )
}
  
export function Row({ children , style }) {
    return (
        <div className={`relative flex flex-row w-full justify-evenly mx-auto overflow-hidden ${style}`} >
            {children}
        </div>
    )
}

export function FlexFlip({children, style}) {
    return(
        <div className={`relative flex flex-col sm:flex-row w-full justify-evenly mx-auto overflow-hidden ${style}`} >
            {children}
        </div>
    )
}