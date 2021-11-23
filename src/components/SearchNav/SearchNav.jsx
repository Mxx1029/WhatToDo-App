import DropdownCategory from "./DropdownCategory.jsx"
import { FaSearch } from "react-icons/fa"
import "./SearchNav.scss"
import DropdownDate from "./DropdownDate.jsx"




export default function SearchNav(){


    return(
    
        <div className="search-navbar">
                <div className="search-icon"><FaSearch /></div>
                <DropdownCategory />
                <DropdownDate />
                <input type="text" placeholder="Keyword" />
                <button>GO</button>
        </div>
    )
}