import React from 'react';
import ReactDOM from 'react-dom';
import  './styles.css'
import mypic from "./my.jpg"


function Hi() {
  return  <div className='container' >
   
   <header>
      <img  width={100} height={150} src={mypic} alt=''/>
        <div>
       
        <h2 className='def'>Muhammad Ghufran qadri </h2>
        
        </div>
      </header>

      <hr />

      <h2 className='abc'>Web Developer</h2>
      <p className='def'>
      As a MERN stack developer,  I am proficient in building full-stack web applications using the MERN (MongoDB, Express.js, React, Node.js)
       technology stack. I Will work with both front-end and back-end technologies to create dynamic and interactive web experiences.
       From handling data storage in databases to crafting user interfaces and managing server-side logic, My skills will enable you 
       to develop robust and modern web applications.
      </p>

      <hr />

      <h2 className='abc'>ABOUT ME</h2>
      <h4 className='def'> Father Name</h4>
      <p className='def'>Muhammed Amir </p>
      <h4 className='def'> Religion</h4>
      <p className='def'>  Islam</p>
      <h4 className='def'> Nationality</h4>
      <p className='def'>Pakistani  </p>
      <h4 className='def'>Date of birth</h4>
      <p className='def'>  17 April 2006</p>
      <h4 className='def'> Marital Status</h4>
      <p className='def' >  Single </p>
      <h4 className='def' > Language Skills</h4>
      <p className='def' > Urdu, English  </p>



      
      <hr />

      <h2 className='abc'>EXPERIENCE</h2>
      
      <h4 className='def' >02  Year Experience as a Salesman in Cloths Feild</h4>
      
      <hr/>
        
        <h2 className='abc'>QUALIFICATION</h2>
        
        <h4 className='def' >Matric from Karachi Board of Education</h4>
        <h4 className='def' > First year exam done </h4>
        
        
        <hr/>
        
        <h2 className='abc'>SKILLS</h2>
        
        <ul>
          <li className='def' >HTML5 </li>
          <li className='def' >CSS3 </li>
          <li className='def' >Bootstrap</li>
          <li className='def' >Javascript  (ECMA script 6)</li>
          <li className='def' >Firebase</li>
          <li className='def' >Mongodb</li>
          <li className='def' >Express</li>
          <li className='def' >React</li>
          <li className='def' >Node.js</li>
        </ul>
        
        <hr/>

        <h2 className='abc'>
          Profile Link
        </h2>
        <h4 className='def'><a href='https://github.com/ghufrankhan12' > https://github.com/ghufrankhan12</a></h4>
        
          
        </div>
    


}

ReactDOM.render(<Hi/>, document.querySelector('#root'));