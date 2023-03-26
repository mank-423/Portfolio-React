export default function Skills(){
    return (
        // bg-[#609966]
        <div className="bg-[#64C9FE] skill"  id="About">
            <center>
                <h1 className="text-2xl font-bold p-2">ABOUT ME</h1>
                <br></br>
                <p className="lg:text-lg md:text-base">Here you will find more information about me, what I do, and my current skills mostly</p> 
                <p className="lg:text-lg md:text-base p-2">in terms of programming and technology</p>
            </center>
            <div className="grid grid-cols-2 gap">
                <div className=" p-2 lg:p-4 lg:pb-20">
                    <div className="text-md lg:text-lg p-4 font-bold md:p-8">
                        <p>Hi there! I am a final year college student and web developer with a passion for creating beautiful and 
                        functional websites.  I've always been fascinated by technology and its ability to connect people all 
                        over the world. I started out with HTML, CSS, and Bootstrap, then have expanded my skills to include JavaScript, React, Node.js, and many other technologies. 
                        I love working with new frameworks and languages and am always looking for ways to expand my knowledge.</p>
                        <p>&nbsp;&nbsp;&nbsp;Besides my technical skills, I am also a great communicator and team player. I believe collaboration
                         is the key to creating a successful project and I enjoy collaborating with others to bring our ideas to life.</p>
                    </div>
                </div>
                <div className="text-md lg:text-lg p-4 font-bold md:p-8">
                    
                    <div className="border-1 bg-[#D6EAF8] lg:pb-2">
                        <center><h1 className="text-xl font-bold lg:place-content-center">Skills</h1></center>
                        {/* <br></br> */}
                        <div className="p-2 lg:pl-20">
                            <button className="bg-[#FCC256] font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-4 cursor-auto mb-2">HTML</button>
                            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-4 cursor-auto mb-2">CSS</button>
                            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-4 cursor-auto mb-2">JavaScript</button>
                            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-4 cursor-auto mb-2">Git</button>
                        </div>
                        

                        <div className="p-2 lg:pl-20">
                            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-4 cursor-auto mb-2">Github</button>
                            <button className="bg-[#FCC256] hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-4 cursor-auto mb-2">MongoDB</button>
                            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-4 cursor-auto mb-2">MongoDB Atlas</button>
                        </div>

                        <div className="p-2 lg:pl-20">
                            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-4 cursor-auto mb-2">Node</button>
                            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-4 cursor-auto mb-2">Express</button>
                            <button className="bg-[#FCC256] hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-4 cursor-auto mb-2">Solidity</button>                       
                            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-4 cursor-auto mb-2">React</button>                        
                        </div>
                        
                        <div className="p-2 lg:pl-20">
                            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-4 cursor-auto mb-2">Bootstrap</button>
                            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-4 cursor-auto mb-2">SQL Basics</button> 
                            <button className="bg-[#FCC256] hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-4 cursor-auto mb-2">C & C++</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}