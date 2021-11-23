import "./DropdownDate.scss"

export default function DropdownDate(){
    return(
        <div className="select">
            <select className="standard-select">
                <option value="Anytime">Anytime</option>
                <option value="Today">Today</option>
                <option value="Tomorrow">Tomorrow</option>
                <option value="This weekend">This weekend</option>
            </select>
        </div>
    )
}