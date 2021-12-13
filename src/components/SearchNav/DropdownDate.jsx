import "./DropdownDate.scss"

export default function DropdownDate(){
    return(
        <div className="select">
            <select className="standard-select">
                <option className="option-date" value="Anytime">Anytime</option>
                <option className="option-date" value="Today">Today</option>
                <option className="option-date" value="Tomorrow">Tomorrow</option>
                <option className="option-date" value="This weekend">This weekend</option>
            </select>
            
            {/* <input type="date" name="start-date" id="start"/> */}
        </div>
    )
}