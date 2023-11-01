
export const Button= ({ text, color, onClick }:{text:string,color:string,onClick:() => void}):JSX.Element => {
    
    return  (
        <button onClick={onClick} className={`block py-3 px-6 w-full rounded-3xl hover:opacity-90 transition-opacity bg-[${color}] font-semibold text-white uppercase`}>
            { text }
        </button>
    )
}