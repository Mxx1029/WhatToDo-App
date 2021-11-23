import "./DropdownCategory.scss"

export default function DropdownCategory(){
    return(
        <div className="select">
            <select className="standard-select">
                <option value="Anything">Anything</option>
                <option value="Market">Market</option>
                <option value="Party">Party</option>
                <option value="Food and drinks">Food and drinks</option>
                <option value="Concert">Concert</option>
                <option value="Free">Free</option>
            </select>
        </div>
    )
}