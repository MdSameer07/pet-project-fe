import './Description.css'

export const Description = (props) =>{
    return(
        <div className = 'descriptioN'>
            <div className = 'stylename'>
            <div className = 'name'>
                <h3>{props.name}</h3>
            </div>
            </div>
            <div className = 'stylerating'>
            <div className = 'rating'>
                <h4>{props.rating}</h4>
            </div>
            </div>
        </div>
    )
}

