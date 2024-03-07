import './Navbar.css';
function Navbar(){
    return(
        <>
           <header>
           <h1 style={{color : "#991F48"}}>Family Wellness</h1>
           <span>Message Therapy</span>
                 <nav>
                    <div className='outerNavbarContainer'>
                        <div className='innerNavbarContainer'>
                            <ul>
                                <li id='home'><a href='#'>Home</a></li>
                                <li><a href='#'>About</a></li>
                                <li><a href='#'>Services</a></li>
                                <li><a href='#'>FAQ</a></li>
                                <li><a href='#'>Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

           </header>
        </>
    );
}
export default Navbar;
