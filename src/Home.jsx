import React from "react";
import "./home.css"
import { Link } from "react-router-dom";


export default function Home(){
    return(
        <div>
            <div className="grid-container">
                <div>
                    <h3 className="ff-sans-normal fs-900">Hi, I am <span className=" text-accent d-block "> Aditya Tomar,</span> </h3>
                    <h2 className="ff-sans-normal fs-800">Web developer and web designer</h2>
                    <p className="fs-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae nihil velit iste consequuntur, veniam repellat ratione cupiditate minima quas ab adipisci esse iusto maiores modi, quia omnis illum eius aliquam.</p>
                </div>
                <div>
                    <Link to="projects" class="large-button uppercase ff-serif fs-600 text-dark bg-white">Projects</Link>
                </div>
            </div>
        </div>
    )
}