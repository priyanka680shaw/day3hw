import Button from './Button';
import './Banner.css';
function Banner(){
    return(
        <>
            <div className='bannerContainner'>
                <div className='bannerImage'></div>
                <div className='bannerCard'>
                    <div className='bannerData'>
                        <h1>Think Health. Think Message</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sunt a molestias amet itaque? Molestiae, dicta modi! Totam sed ex ratione atque unde! Amet quaerat asperiores totam unde, cum reiciendis.</p>
                        <div className='bttn'>
                            <Button name = {"Learn More About Us"}/>
                            <Button name = {"Contact us Toay"}/>
                        </div>
                    </div>
                </div>
               
            </div>
            
        </>
    );
}
export default Banner;