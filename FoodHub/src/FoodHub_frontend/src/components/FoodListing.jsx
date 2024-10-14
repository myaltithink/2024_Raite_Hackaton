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
        const value = e.target.value;
        const newDisplay = [];
        for (const item of items) {
            for (const data of Object.values(item)) {
                if(data.includes(value)){
                    newDisplay.push(item);
                    break;
                }
            }
        }
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