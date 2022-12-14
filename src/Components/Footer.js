import React from "react";
import Navigation from "./Navigation";
import FooterDates from "./Widgets/FooterDates"

export default function Footer (props){
    return (
        <footer className="bg-light">
            <hr />
            <nav>
            <div className="container"> 

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                       <h3>Site Navigation</h3>
                        <Navigation type="basic" page={props.page} />
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <FooterDates />
                    </div>
                    <div className="col-lg-4 col-md-6">
                        Ad
                    </div>
                </div>
                
            </div>
            </nav>
        </footer>
    );

}