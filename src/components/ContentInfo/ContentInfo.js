import axios from "axios";
import React, { useEffect, useState } from "react";

const ContentInfo = () => {

    const [heroes, setHeroes] = useState("");

    useEffect(() => {
        axios.get('https://api.opendota.com/api/players/159992731/heroes')
            .then(res => {
                console.log(res.data);
                setHeroes(res.data);
            })
    }, []);

    return <div className="container px-4 px-lg-5">
        <h1>Content</h1>
    </div>
}

export default ContentInfo;