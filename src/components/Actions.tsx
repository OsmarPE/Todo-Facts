import { typeCategory } from "../../types"
import { useCategory } from "../Context/useCategory"
import { buttons } from "../helpers/utils"
import { Button } from "./Button"

function Actions() {

    const { setCategory } = useCategory()

    return (
        <ul className="grid gap-6">
            <li><Button text="All" color="#3AAF77" onClick={() => setCategory('all')} /></li>
            {
                buttons.map(({ text, color }, index) => (
                    <li key={index}><Button text={text} color={color} onClick={() => setCategory(text as typeCategory)} /></li>))
            }
        </ul>
    )
}

export default Actions