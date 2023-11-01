import { useState } from "react"
import { commentType } from "../../types"
import Comment from "./Comment"
import ButtonPage from "./ButtonPage"

function Comments({comments}:{comments:commentType[]}) {

  const pages = Math.ceil((comments.length  / 3))
  const pagesCounts = Array.from({ length: pages }, (_, index) => index)
  
  const [pageCurrent, setPageCurrent] = useState<number>(0)

  return (
    <section className="">
      <div className="grid gap-4">
        {
            comments.length !== 0 ? (
                
                comments.slice((pageCurrent * 3),((pageCurrent + 1) * 3)).map( comment => <Comment key={comment.id} comment={comment} /> )
            ):(
                <h2 className="text-center text-3xl text-white font-semibold">Loading...</h2>
            )
        }
      </div>
      <div className="flex items-center justify-center gap-3 mt-6">
        {
          comments.length !== 0 && pagesCounts.map( index => <ButtonPage index={index} pageCurrent={pageCurrent} setPageCurrent={setPageCurrent} key={index} /> )
        }
      </div>
    </section>
  )
}

export default Comments