
import { Link } from "react-router-dom";

export default function HomePage(){
   


    return(
        <main>
            
        <div className="container">
            <img src="/images/Homepage/hmpg_img.png" />

            <div className="centered">
                <h1>Find Collaborators for Your Next Project</h1>
                <Link to='/signup'><button>Sign Up for Free</button></Link>
            </div>
        </div>


            
        </main>
    )
}
