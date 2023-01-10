import { useState } from "react"
import { NavLink } from "react-router-dom"
import './SearchBar.css'
var data = ['thriller','horror','comedy','action','romance']


export const SearchBar = () =>{
    const [value,setValue] = useState('')
    const [valid,setValid] = useState(false)

    const onChange = (e) =>{
        if(valid===true){
            setValid(false)
        }
        setValue(e.target.value)
    }

        return (
            <div className = 'whole-search'>
                <div className = 'search-container'>
                    <div className = 'search-inner'>
                        <input className = 'input' type = 'text' placeholder = 'Search For Category' value = {value} onChange = {onChange}/>
                    </div>
                    <div className = 'search-outer'>
                        {valid? <NavLink className = 'navsearch-button' to = {value} onClick = {()=>setValid(false)}>Search</NavLink>:<button className = 'search-button'>Search</button>}
                    </div>
                </div>
                <div className = 'dropdown'>
                    {data.filter(item=>{
                    const searchTerm = value.toLowerCase();
                    const targetTerm = item.toLowerCase();
                    return searchTerm && targetTerm.startsWith(searchTerm) && targetTerm!==searchTerm
                }).slice(0,10).map((item)=><div className = 'dropdown-row' onClick = {()=>{setValue(item);setValid(true)}}>{item}</div>)}
                </div>
            </div>
        )
}