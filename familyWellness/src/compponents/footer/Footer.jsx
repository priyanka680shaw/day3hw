import './Footer.css';
function Footer(){
    return(
        <>
            <div className='footerContainer' style={{
                textAlign : "center",
                padding : "10px 0px",
                backgroundColor : "gray"
            }}>
                <p>priyankashaw680@gmail.com</p>
            </div>
            <div style={{
                textAlign : "center",
            }}>
                <p>poered by website.com</p>
            </div>
        </>
    );
}
export default Footer;