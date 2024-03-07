import './About.css';
function About(){
    return(
        <>
       <div className='about'>
                <p style={{color : "#991F48"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio id repellendus, nisi error provident doloremque animi sed repellat voluptate eveniet recusandae, quos, fugit tempore ab maiores explicabo aspernatur reprehenderit non?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia iusto quo itaque adipisci minima repudiandae optio eius reiciendis velit aut? Libero, eius. Mollitia doloribus nostrum ad quae aspernatur, tempore praesentium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia iusto quo itaque adipisci minima repudiandae optio eius reiciendis velit aut? Libero, eius. Mollitia doloribus nostrum ad quae aspernatur, tempore praesentium.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia iusto quo itaque adipisci minima repudiandae optio eius reiciendis velit aut? Libero, eius. Mollitia doloribus nostrum ad quae aspernatur, tempore praesentium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia iusto quo itaque adipisci minima repudiandae optio eius reiciendis velit aut? Libero, eius. Mollitia doloribus nostrum ad quae aspernatur, tempore praesentium.</p>

            </div>
            <hr></hr>
            <div className='aboutContact' 
                style={{
                    textAlign : "center",
                    margin : "15px"
                   
                }}
            >
                <div className='aboutContactinner' >
                    <h1 style={{color : "#991F48"  }}>Family Wellness Message Therapy</h1>
                     <p>712311 , Salt Lake Main street</p>
                     <p>phone : 8777493789</p>
                </div>
            </div>
        </>
    );
}
export default About;