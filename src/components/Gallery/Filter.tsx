
interface FilterProps{
    filter:string,
    isActive:boolean
    onClick:()=>void
}
import "./Filter.css"
function Filter({filter,isActive,onClick}:FilterProps) {

    return (
    <button className={` filter-button${isActive ? " active":""}`} onClick={onClick}>
        {filter}
    </button>
  )
}

export default Filter