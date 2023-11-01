import { buttons } from "../helpers/utils"
import { Button } from "./Button"

function Actions() {
    return (
        <ul className="grid gap-6">
            {
                buttons.map(({ text, color }, index) => (
                    <li key={index}><Button text={text} color={color} /></li>))
            }
        </ul>
    )
}

export default Actions