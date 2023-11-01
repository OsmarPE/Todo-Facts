import React, { FormEvent, useEffect, useRef, useState } from "react"
import Actions from "../components/Actions"
import Comments from "../components/Comments"
import { commentType, factType, notifyType } from "../../types"
import { supabase } from "../helpers/supabase"
import Modal from "../components/Modal"
import Notification from "../components/Notification"
import { useCategory } from "../Context/useCategory"

function Main({ showModal, setShowModal }: { showModal: boolean, setShowModal: (value: boolean) => void }) {
    
    const { category } = useCategory()
    const [comments, setComments] = useState<commentType[]>([])
    const modalRef = useRef<null | HTMLDivElement>(null);
    const formRef = useRef<null | HTMLFormElement>(null)
    const [showNotify, setShowNotify] = useState<notifyType>({
        text:'',
        notify:false,
        type:'error'
    })
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
        
        if ([category,source,text].includes('')) {    
            
            const text = 'Complete to form'

            setShowNotify({
                text,
                notify:true,
                type:'error'
            })
            
            setTimeout(() => {
                setShowNotify({
                    ...showNotify,
                    text,
                    type:'error'
                })
                setTimeout(() => {
                    setShowNotify({
                        ...showNotify,
                        text:'',
                        type:'error'
                    })
                },500)
               
            }, 1500);

            return
        }

        const { data, error } = await supabase.from('facts').insert([fact]).select()
       
        if (!error) {
            
            const text = 'Your fact add sucess'
            console.log(text);
            
            setShowNotify({
                text,
                notify:true,
                type:'sucess'
            })

            setTimeout(() => {
                setShowNotify({
                    ...showNotify,
                    text,
                    type:'sucess'
                })
                setTimeout(() => {
                    setShowNotify({
                        ...showNotify,
                        text:'',
                        type:'sucess'
                    })
                },500)
               
            }, 1500);
            console.log(data);
            setShowModal(false)
            setFact({text:'', category:'', source:''})            
            formRef.current?.reset()
            return
        }
        


    }

    useEffect(() => {

        async function getData() {
            
            if (category === 'all') {
                
                let { data: facts, error } = await supabase.from('facts').select('*')
                
                if (!error) {
                    setComments?.(facts);
                    return
                }
    
                console.log(error);
                return
            }

            let { data: facts, error } = await supabase.from('facts').select('*').eq('category',category)
            setComments(facts as commentType[]);
            
        }

        if (!showModal) {
            getData()
            formRef?.current?.reset()
        }

    }, [showModal,category])


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
                showNotify={showNotify}
            />
            <Notification showNotify={showNotify}/>
        </main>
    )
}

export default Main