function Card(props) {
    return (
        <>
            <div className="col-md-3">
                <div className="card" >
                    <img src={props.Image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.Title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;