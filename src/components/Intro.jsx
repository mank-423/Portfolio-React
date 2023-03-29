import React from "react";
import me from "../images/me2.png"
import cpp from "../images/cpp.png"
import css from "../images/css.png"
import html from "../images/html.jpg"
import js from "../images/js.png"
import py from "../images/py.png"
import node from "../images/node.jpg"
import react from "../images/react.png"
import mongoose from "../images/mongoose.jpg"
import mongo from "../images/mongo.png"
import eth from "../images/eth.png"
import sol from "../images/sol.jpg"
import motoko from "../images/motoko.png"
import ic from "../images/ic.png"
import c from "../images/C.png"
import android from "../images/android.jpg"
import bootstrap from "../images/bootstrap.png"


export default function Intro(){
    return(
        <div id="intro">
        {/* bg-[#9DC08B] */}
        <div className="bg-[#D6EAF8] grid grid-cols-3 gap-3 pb-12">

            <div className="left grid grid-cols-3 gap-3 m-8">
                
                <div></div>
                <div><img src={cpp} alt="Cpp" className="h-8 w-20 lg:h-20 lg:w-20 md:w-12 md:h-12  rounded-full opacity-0 lg:opacity-50 lg:rotate-12 "></img></div>
                <div><img src={py} alt="py" className="h-8 w-20 lg:h-20 lg:w-28 rounded-full opacity-0 lg:opacity-50 lg:rotate-12 "></img></div>
                <div><img src={ic} alt="ic" className="h-8 w-20 lg:h-12 lg:w-20 hidden rounded-sm m-2 opacity-0 lg:opacity-50 lg:rotate-12 "></img></div>
                <div><img src={c} alt="c" className="h-8 w-24 lg:h-20 rounded-sm m-2 opacity-0 lg:opacity-50"></img></div>
                <div><img src={eth} alt="eth" className="h-12 w-20 lg:h-20 lg:w-20 rounded-full opacity-0 lg:opacity-50 lg:rotate-12 "></img></div>
                <div><img src={sol} alt="sol" className="h-4 w-20 lg:h-20 lg:w-20 rounded-full opacity-0 lg:opacity-50 lg:rotate-12"></img> </div>
                <div><img src={android} alt="android" className="h-12 w-24 lg:h-24 lg:w-28 rounded-full opacity-0 lg:opacity-70 lg:rotate-12"></img> </div>
                <div><img src={motoko} alt="motoko" className="h-12 w-20 lg:h-24 lg:w-28 md:h-16 rounded-full opacity-0 lg:opacity-50 lg:rotate-12"></img> </div>
            </div>

            <div>
                <center>
                    <img src={me} alt="My pic"></img>
                    <br></br>
                    <br></br>
                    <p className="text-2xl font-bold">Full Stack | Python | C++</p>
                </center>
            </div>

            <div className="right grid grid-cols-3 gap-3 m-8">
                <div></div>
                <div><img src={html} alt="HTML" className="h-12 w-20 lg:h-32 lg:w-36 md:h-20 md:w-24  rounded-full opacity-0 lg:opacity-50 lg:rotate-12 "></img></div>
                <div><img src={bootstrap} alt="HTML" className="h-12 w-20 lg:h-16 lg:w-20 md:h-20 md:w-24 rounded-full opacity-0 lg:opacity-50 lg:rotate-12 "></img></div>
                <div><img src={css} alt="Css" className="h-12 w-20 lg:h-24 lg:w-44  rounded-full opacity-0 lg:opacity-50 lg:rotate-12 "></img></div>
                <div><img src={mongoose} alt="mongoose" className="h-12 w-20 lg:h-32 lg:w-64 opacity-0 lg:opacity-80"></img></div>
                <div><img src={js} alt="Js" className="h-12 w-20 lg:h-24 lg:w-24 rounded-full opacity-0 lg:opacity-60 lg:rotate-45 "></img></div>
                <div><img src={mongo} alt="mongo" className="h-12 w-20 lg:h-28 lg:w-60 opacity-0 lg:opacity-80"></img></div>
                <div><img src={node} alt="node" className="h-12 w-20 lg:h-28 lg:w-40 rounded-full opacity-0 lg:opacity-60 lg:rotate-12"></img></div>
                <div><img src={react} alt="react" className="h-12 w-20 lg:h-28 lg:w-60 rounded-full opacity-0 lg:opacity-80"></img></div>
            </div>
        </div>
            
        </div>
    ) 
};
