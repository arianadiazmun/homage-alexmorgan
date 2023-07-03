import { useState } from "react";

export default function Header () {
    const link = 'https://www.alexmorganfoundation.org/'
return (
   <main>
    <div className="header"> <h1>Alex Morgan</h1></div>
   <div className="main-container">
    <img src="/images/img1.png"/>
    <h2>Alex Morgan is one of the best female soccer players in the world, Alex plays for the USWNT and San Diego Wave FC as forward position. She is the captain for San Diego FC and
        with the US national team she has participated in the 
        women's world cup three times and won the 2015 and 2019 world cup. Besides her achievements on the field, she is admired for her advocacy for gender equality in sports and her role as a role model for aspiring athletes around the world.
    </h2>
    </div>
    <div className="link-container">
    <p><a href={link}>Alex Morgan Foundation Here!</a></p>
       </div>
   </main> 
)
}

