import './Description.css'

export const Description = (props,onDelete) => {
    const adminLoggedIn = localStorage.getItem('adminLoggedIn')

    const handleDeleteClick = () =>{
        handleDelete(props.id,props.onDelete)
    }

    const handleDelete = async (id,onDelete) =>{
        console.log(id)
        const reqBody = {
            movie_id : parseInt(id)
        }
        try {
            const response = await fetch("admin/delete-movie-from-database", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(reqBody)
            });
            if (!response.ok){
                return
            }
            const data = await response.json();
            console.log("Starting");
            onDelete(id);
        } catch (error) {
            console.error("Error:", error);
        }
    }
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
            {adminLoggedIn && <div className = 'remove-button'>
                <button className='delete-button' type = "button" onClick={handleDeleteClick}>Delete</button>
                </div>}
        </div>
    )
}

