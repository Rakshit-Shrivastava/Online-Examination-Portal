import { useState } from "react";
import detailContext from "./detailContext";

const DetailState = (props) =>{
    const oldDetails = 
        {
            "_id": "61f39c5548c4d81df220f446",
            "name": "Rakshit2",
            "rollno": "300902219314",
            "enroll": "BH0023",
            "course": "BE",
            "branch": "CSE",
            "semester": "7th",
            "email": "rakshit2@gmail.com",
            "phone": 6324758412,
            "__v": 0
        }
    

    const [details, setDetails] = useState(oldDetails);
    
    return(
        <detailContext.Provider value={{details, setDetails}}>
            {props.children}
        </detailContext.Provider>
    )
}

export default  DetailState;