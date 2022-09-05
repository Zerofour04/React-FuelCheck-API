import axios from "axios";
import React, { useState } from "react";

const ClickAction = () => {
    axios.get("https://creativecommons.tankerkoenig.de/json/list.php?lat=48.129873&lng=11.35939&rad=4&sort=price&type=diesel&apikey=f5757aa1-f495-f46e-e46c-dd8fbd01f5a0")
    .then(response => console.log(response))
}

function List(){
    return(
        <>
        <h1 onClick={ClickAction}>Click -- Console</h1>
        </>
    )
}

export default List;