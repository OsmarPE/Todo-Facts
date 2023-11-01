import { notifyType } from "../../types"


function Notification({ showNotify }:{showNotify:notifyType}) {

  const { notify , text, type} = showNotify

  return (
    <div style={notify ? {transform:'translateY(0)', opacity:1} : {transform:'translateY(-25%)', opacity:0}} className="absolute pointer-events-none transition-all duration-300 shadow-2xl top-6 right-5 flex items-center gap-3 p-3 rounded-xl text-white  border-[1px] border-[#2e2e2e] bg-[#232323]">
        <div className={`circle ${type === 'error' ? 'bg-[#e63946]' : 'bg-[#61d345]'} w-6 aspect-square rounded-full grid place-items-center`}>
            {
                type === 'error' ? <i className="ri-close-line"></i> : <i className="ri-check-line"></i>

            }
        </div>
        <span className="block">{text}</span>
    </div>
  )
}

export default Notification