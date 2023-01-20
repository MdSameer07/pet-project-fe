import './Description.css'

export const Description = (props) => {
    return (
        <div className='movie-short-description'>
            <div className='style-name'>
                <h3>{props.name}</h3>
            </div>
            <div className='style-rating'>
                <div className='rating'>
                    <h4>{props.rating}</h4>
                </div>
            </div>
        </div>
    )
}

