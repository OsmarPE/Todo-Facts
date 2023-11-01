
export const Button= ({ text, color }:{text:string,color:string}):JSX.Element => {
    
    return  (
        <button className={`block py-3 px-6 w-full rounded-3xl hover:opacity-90 transition-opacity bg-[${color}] font-semibold text-white uppercase`}>
            { text }
        </button>
    )
}