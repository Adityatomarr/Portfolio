import React from "react";
import "./home.css"
import { Link } from "react-router-dom";


export default function Home(){
    
    return(
        <div>
            <div className="grid-container grid-container-home">
                <div>
                    <p className="ff-sans-normal fs-800">Hi, I am</p>
                    <h3 className="ff-sans-normal fw-bold fs-900 text-accent d-block ">Aditya Tomar</h3>
                    <h2 className="ff-sans-normal fs-800">Web developer and Web designer</h2>
                    {/* <p className="fs-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae nihil velit iste consequuntur, veniam repellat ratione cupiditate minima quas ab adipisci esse iusto maiores modi, quia omnis illum eius aliquam.</p> */}
                    <Link to="projects" className="large-button uppercase ff-serif text-white">About &rarr;</Link>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}