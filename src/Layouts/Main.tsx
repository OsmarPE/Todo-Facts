import React, { FormEvent, useEffect, useRef, useState } from "react"
import Actions from "../components/Actions"
import Comments from "../components/Comments"
import { commentType, factType } from "../../types"
import { supabase } from "../helpers/supabase"
import Modal from "../components/Modal"

function Main({ showModal, setShowModal }: { showModal: boolean, setShowModal: (value: boolean) => void }) {

    const [comments, setComments] = useState<commentType[]>([])
    const modalRef = useRef<null | HTMLDivElement>(null);
    const formRef = useRef<null | HTMLFormElement>(null)
    const [fact, setFact] = useState<factType>({
        text:'',
        category:'',
        source:''
    })

    const showModalHandle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (modalRef?.current === e.target) setShowModal(!showModal)
    }

    const hanledChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setFact({
            ...fact,
            [e.target.name]:e.target.value
        })
    }


    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const { category, source, text } = fact
        
        if (!([category,source,text].includes(''))) {    
           
            const { data, error } = await supabase.from('facts').insert([fact]).select()
           
            if (!error) {
                console.log(data);
                setShowModal(false)
                setFact({text:'', category:'', source:''})            
                formRef.current?.reset()
                return
            }
            
            console.log('Hubo un error', error);
            
        }

    }

    useEffect(() => {

        async function getData() {

            let { data: facts, error } = await supabase.from('facts').select('*')
            if (!error) {
                setComments?.(facts);
                return
            }

            console.log(error);
            

        }

        if (!showModal) {
            getData()
        }

    }, [showModal])


    return (
        <main className="grid md:grid-cols-[1fr_3fr] items-start pt-3 pb-12  gap-10 mt-8">
            <Actions />
            <Comments comments={comments} />
            <Modal
                formRef={formRef}
                handleSubmit={handleSubmit}
                hanledChange={hanledChange}
                modalRef={modalRef}
                showModal={showModal}
                showModalHandle={showModalHandle}
            />
            {/* <div ref={modalRef} onClick={(e) => showModalHandle(e)} style={showModal ? { opacity: 1, pointerEvents: 'all' } : { opacity: 0, pointerEvents: 'none' }} className="absolute transition-all duration-300 inset-0 flex items-center justify-center bg-[#16161690]">
                <div style={showModal ? { opacity: 1, transform: "translateY(0%)" } : { opacity: 0, transform: "translateY(-5%)" }} className="modal rounded-xl transition-all duration-300 border-[#2e2e2e] border-[1px] overflow-hidden text-white w-[90%] max-w-lg bg-[#232323]">
                    <h3 className="py-4 px-5 bg-[#282828]">Add New Fact</h3>
                    <form ref={formRef} className="p-5" onSubmit={handleSubmit}>
                        <div className="form__item mb-3">
                            <label className="inline-block text-[##bbb] mb-3" htmlFor="text">Text</label>
                            <input onChange={hanledChange} className="w-full outline-none h-11 bg-[#292929] placeholder:text-[#575757] transition-all hover:border-[#707070] focus:border-[#707070] ou text-sm px-2 border-[1px] border-[#3e3e3e] rounded-lg" type="text" name="text" placeholder="Write your Text" />
                        </div>
                        <div className="form__item mb-3">
                            <label className="inline-block text-[##bbb] mb-3" htmlFor="source">Source</label>
                            <input onChange={hanledChange} className="w-full outline-none h-11 bg-[#292929] placeholder:text-[#575757] transition-all hover:border-[#707070] focus:border-[#707070] ou text-sm px-2 border-[1px] border-[#3e3e3e] rounded-lg" type="text" name="source" placeholder="Write a Source" />
                        </div>
                        <div className="form__item mb-3">
                            <label className="inline-block text-[##bbb] mb-3" htmlFor="category">Category</label>
                            <input onChange={hanledChange} className="w-full outline-none h-11 bg-[#292929] placeholder:text-[#575757] transition-all hover:border-[#707070] focus:border-[#707070] ou text-sm px-2 border-[1px] border-[#3e3e3e] rounded-lg" type="text" name="category" placeholder="Write a Category" />
                        </div>
                        <input className="inline-block mt-4 w-full py-2 rounded-lg transition-all cursor-pointer bg-[#359B6D] hover:bg-[#47c18a] border-[1px] border-[#47db98]" type="submit" value="Add Fact" />
                    </form>
                </div>
            </div> */}
        </main>
    )
}

export default Main