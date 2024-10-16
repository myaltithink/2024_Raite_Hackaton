import { useEffect, useState } from "react";
import FoodListing from "../components/FoodListing";

function MyListing(props) {

    const [items, setItems] = useState([]);

    useEffect(() => {
        //retrive user posts
        
    })

    return(
        <div className="my-listing">
            <FoodListing items={items}/>
        </div>
    )
}

export default MyListing;