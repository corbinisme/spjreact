import React, { Component, useState, useEffect } from "react";
import CoreFour from "../Components/Widgets/Home/CoreFour";
import HomeCalendar from "../Components/Widgets/Home/HomeCalendar";
import NewsHome from "../Components/Widgets/Home/NewsHome"

import Related from "../Components/Shared/Related";
import Block from "../Components/Shared/Block";
import Feeds from "../Components/Shared/Feeds";

import {
    useLocation,
    useNavigate,
    useParams,
  } from "react-router-dom";
import News from "./News/News";


function Home(){
    const [data, setData] = useState();
    const [pageID, setPageID] = useState("");

    useEffect(() => {
        // code to run on component mount
        

           let basicPath = "/";
            fetch(`/router/translate-path?path=${basicPath}`)
                .then(response=>response.json())
                .then(data => {

                    let uuid = data.entity.uuid;
                    setPageID(uuid);
                    let newFetch = "/jsonapi/node/page/" + uuid;

                    fetch(newFetch).then(resp=>resp.json()).then(data=>{
 
                        setData(data.data) 
                    })
                    
                })
        
      }, []);

    return(
        <div>
            
            <CoreFour />
            <hr />
            <div className="page_content section">
                {(data? <div>
                    <div dangerouslySetInnerHTML={{__html: data.attributes.body.value}} ></div> 
                </div> : <div>Loading</div>)}
            </div>
           
            <div className=" alignfull quickFactsWrapper bg-dark text-white p-5">
                <div className="container">
                    <h4>SPJ</h4>
                    <Block id={6} />
                </div>
            </div>
            
            <HomeCalendar />
            <hr />
            
            <div className="section newsHome">
            <NewsHome limit="3" />
            </div>

            <hr />
            <Related pageID={pageID} />

            <hr />

            <div className="row">
                <div className="col">
                    <Feeds type="JT" path="/" />
                </div>
                <div className="col">
                    <Feeds type="Quill" path="/" />
                </div>
            </div>
        </div>
    )
}

export default Home;