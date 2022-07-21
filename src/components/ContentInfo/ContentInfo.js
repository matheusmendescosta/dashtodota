import React, { useEffect, useState } from "react";
import Api from "../../Api";

const ContentInfo = () => {

    const [heroes, setHeroes] = useState([]);

    async function initApi() {
        let getHero = await Api.getHeroes();
        setHeroes(getHero);
    }

    useEffect(() => {
        initApi();
    }, []);

    return <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5">
            <div className="col-md-4 mb-5">
                <div className="card h-100">
                    <div className="card-body">
                        <h2 className="card-title">TOP</h2>
                        <p className="card-text">{ }</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mb-5">
                <div className="card h-100">
                    <div className="card-body">
                        <h2 className="card-title">MID</h2>
                        <p className="card-text"></p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mb-5">
                <div className="card h-100">
                    <div className="card-body">
                        <h2 className="card-title">BOT</h2>
                        {/* <p className="card-text">{heroes.map((data) => {
                            return (<div>
                                <p>ID hero: {data.against_games}</p>
                                <p>Games: {data.games}</p>
                            </div>)
                        })}</p> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default ContentInfo;