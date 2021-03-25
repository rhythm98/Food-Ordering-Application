import React from 'react'
import Img from '../../Images/img1.png';
import './About.css';
const About = () => {
    return (
        <>
        <div className= "about">
            <h3 id= 'abouth1'>About Us</h3>
            <img src ={Img} id= 'img1' alt = 'food'/>
            <div id= 'pabout'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex amet fuga provident quisquam aliquid quia quidem commodi, quibusdam itaque quos adipisci facere odit natus exercitationem consequuntur tempore, architecto totam quaerat.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis soluta id vitae tempora animi, laudantium similique maxime autem vero repudiandae facilis ex labore, a recusandae delectus repellat temporibus quidem vel!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolor vel recusandae consequatur iste veniam excepturi molestias exercitationem eos esse neque voluptatem, quo fuga cum debitis quia perspiciatis eum. Et!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sed doloribus pariatur? Corrupti, neque, temporibus in sit nemo suscipit optio voluptatum molestiae numquam amet aspernatur labore excepturi sed eum possimus.</p>
            </div>
            </div>
        </>
    )
}

export default About
