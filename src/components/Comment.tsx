import { commentType } from "../../types"
import { buttons } from "../helpers/utils"
import { BtnComments } from "./BtnComment"

function Comment({comment}:{comment:commentType}) {

    const { text,source,category,votesfalse, votesinteresting, votesmind } = comment
    
    return (
        <article className="p-6 bg-[#232323] text-white rounded-xl border-[#2e2e2e] border-[1px]">
            <p className="text">{text} <a className="text-gray-400" href={source}>(SOURCE)</a> </p>
            <span className={`block w-max ml-auto category uppercase py-1 px-3 font-bold text-sm rounded-3xl mt-4 mb-6 bg-[${buttons.find(btn => btn.text === category )?.color ?? '#00090'}]`}>{ category }</span>
            <div className="actions flex items-center justify-end gap-2">
                <BtnComments icon="👍" number={votesinteresting.toString()} />
                <BtnComments icon="😶" number={votesmind.toString()} />
                <BtnComments icon="⛔" number={votesfalse.toString()} />
            </div>
        </article>
    )
}

export default Comment