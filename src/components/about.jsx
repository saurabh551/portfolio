import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'> 
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>

            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            About
            </p>

            </div>
            <p className='text-xl mt-20'>
            Welcome to my about section! My name is Saurabh Soni, and I am a B.Tech graduate in Information
             Technology from Dr. Ambedkar Institute of Technology. I have a strong passion for web development, 
             specializing in the <span class="font-bold">MERN</span> (MongoDB, Express.js, React.js, Node.js) stack. I thoroughly enjoy crafting 
             efficient and user-friendly web applications.

             With my extensive knowledge and experience, I am well-versed in various web technologies and frameworks.
              In particular, I have a deep understanding of <span class="font-bold">Django</span>, a powerful Python framework for building robust web
               applications. I have worked on numerous projects leveraging Django's capabilities to create scalable and 
               secure <span class="font-bold">APIs</span>.
             </p>
             <br />

             <p className='text-xl'>
             Another area of expertise that I take pride in is solving data structures and algorithms (DSA) problems.
               Through my dedication and continuous learning, I strive to enhance my problem-solving skills further.
              In addition to my technical skills, I am a team player with excellent communication and collaboration abilities. 
              I enjoy working in dynamic environments where I can collaborate with like-minded individuals to bring ideas to life.
             </p>


         </div>
    </div>
  )
}

export default About