import { TextField } from "@mui/material";
import { useState } from "react";
import SearchField from "./SearchField";

function FoodListing(props){

    const [items, setItems] = useState();
    const [display, setDisplay] = useState([]);

    useState(() => {
        setItems(props.items);
        setDisplay(props.items);
    }, []);

    const handleSearch = (e) => {
        const value = e.target.value; //search value
        const newDisplay = []; // new display collection

        // loop through all the items
        for (const item of items) {
            // loop through all the metadata of the current item
            for (const data of Object.values(item)) {
                // checks if the search value has a match on the current metadata
                if(data.includes(value)){
                    // adds the data to the new display collection
                    newDisplay.push(item);
                    // stops the metadata loop to proceed to the next item, this is to avoid duplicate
                    break;
                }
            }
        }
        // give the new collection to the "display" state so the frontend can render the search result
        setDisplay(newDisplay);
    }

    return (
        <div className="food-listing w-100">
            <div className="search">
                <SearchField changed={handleSearch}/>
            </div>
            {display.length == 0 ?
                <h3 style={{textAlign: "center"}} className="mt-4">There is no item to display</h3>
            :
                display.map((data, index) => (
                    <div key={`${data.item} - ${index}`} className="food flex shadow">
                        <div className="img">
                            <img src="/assets/placeholder.jpg" alt="placeholder" />
                        </div>
                        <div className="contents">
                            <h3 className="title mb-0">{data.item}</h3>
                            <p>Listed By: <i>{data.name}</i> | at <i>{data.createdAt}</i></p>
                            <p className="mb-0">Where to find?</p>
                            <p>{data.address}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default FoodListing;