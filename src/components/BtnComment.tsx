
export const BtnComments = ({ number,icon }:{number:string,icon:string}):JSX.Element => {
    return <button className="bg-[#2E2E2E] px-4 py-1 rounded-2xl inline-flex">{`${number}  ${icon}`}</button>
}