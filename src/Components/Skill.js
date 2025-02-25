import React from 'react'
import Header from './Header';
import { SkillData } from '../Data/SkillData';
import "./Skills.css";

const Skill = () => {
    return (
        <>
          <div className='flex flex-col relative z-10  w-screen   h-full '>
            <Header />
            <div className='mx-[70px] mt-20'>
              <h1 className='text-4xl text-white font-bold'>Skills</h1>
              <div className=' mt-24 mb-10  border-b border-zinc-800'></div>
              
               
                {/* {projectData.map((item) => {
                  return <SingleProjectCard key={item.id} {...item} />;
                 
                })} */}
                {
  SkillData.map((item) => {
    return (
      <div key={item.id}> 
      <div className='container_skills'>
        <div> <span className="title">{item.title}</span> <span className='description'>{item.description}</span></div>  
        </div>
      </div>
    );
  })
}

              </div>
            </div>
         
        </>
      );
}

export default Skill