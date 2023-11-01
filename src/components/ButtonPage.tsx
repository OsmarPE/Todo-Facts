
function ButtonPage({setPageCurrent,index, pageCurrent}:{setPageCurrent:(value:number) => void, pageCurrent:number, index:number}) {
  return (
    <button onClick={() => setPageCurrent(index)} className={`w-3 aspect-square rounded-full ${pageCurrent !== index ? 'bg-[#232323]' : 'bg-white'}`}></button>
  )
}

export default ButtonPage