import { useEffect, useState } from "react";

function Fetchinfo(){

   const [users, setUsers]=useState([]);

   useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then (response => response.json())
    .then (data => setUsers(data));

},[]);

    
    return(
        <div>
            {
               users.map((u) =>

                <div>
                    <h3>{u.id}</h3>
                    <h4>{u.name}</h4>
                    <p>{u.email}</p>
                    <h3>{}</h3>
                    <hr/>
                    
                    </div>
            )

            }
        </div>
    )
}
export default Fetchinfo;

