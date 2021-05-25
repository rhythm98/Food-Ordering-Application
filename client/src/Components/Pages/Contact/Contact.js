import React from 'react';
import Img1 from '../../Images/img3.png';
import './Contact.css'
const Contact = () => {
    return (
        <>
           <div className ='contact-us'>
               <h3>Contact-Us</h3>
                <img src={Img1} id='img-c' alt= 'icon'/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi cumque vitae deleniti natus! Repellat consectetur doloremque rerum delectus excepturi velit, beatae, neque ullam quasi vero aliquid harum dolor voluptatum reprehenderit!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quasi pariatur natus aut possimus porro, sed obcaecati sequi vitae, laudantium nulla beatae iusto voluptates in, cum blanditiis. Blanditiis, velit numquam?</p>
            </div> 
        </>
    )
}

export default Contact
