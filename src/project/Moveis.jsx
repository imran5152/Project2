import Cards from './Cards'
import MoviesList from './Movies.json'
function Movies()
{
    return (
        <>
        <h1>Movies </h1>
        
        <div className='container'>
        <input type="text"  className='form-control' /> <button>Search</button>

        <input type="range" />
            <div className='row'>
            {
            MoviesList.map((m)=>{
                // return m.Title
               return <Cards Title= {m.Title} Image={m.Images} />
            })
        }
            </div>
        </div>
        </>
    )
}

export default Movies