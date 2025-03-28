import { NavLink } from "react-router-dom";
import Particle from "./Particle";

const Home = () => {
  return (
    <>
      
      <div className='flex flex-col relative z-10 items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black'>
        <nav className='my-16 animate-fade-in'>
          <ul className='flex items-center justify-center gap-4'>

          <NavLink
             to={'/skills'} 
             className={({isActive})=>{`text-sm duration-500  text-zinc-500 ${isActive?'text-zinc-300' :'text-zinc-500'}`}}
            >
              <p className=' text-zinc-500 hover:text-zinc-300'>Skills</p>
            </NavLink>

            <NavLink
             to={'/projects'} 
             className={({isActive})=>{`text-sm duration-500  text-zinc-500 ${isActive?'text-zinc-300' :'text-zinc-500'}`}}
            >
              <p className=' text-zinc-500 hover:text-zinc-300'>Projects</p>
            </NavLink>
            <NavLink to={'/contact'}
            
              >
              <p   className='text-sm duration-500 text-zinc-500 hover:text-zinc-300'>Contact</p>
            </NavLink>
          </ul>
        </nav>
        <div className='hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0'></div>
        <div
          className='absolute inset-0 -z-10 animate-fade-in'
          aria-hidden='true'></div>
        <h1 className='z-10 text-4xl text-transparent  bg-gradient-to-r from-red-500 to-blue-500 text-edge-outline animate-title font-bold sm:text-6xl md:text-8xl whitespace-nowrap bg-clip-text '>
          Sai Surya Karthik
        </h1>
        <h2 className='z-10 text-4xl text-transparent duration-100 text-white bg-white cursor-default text-edge-outline animate-title font-bold sm:text-6xl md:text-4xl m-4 whitespace-nowrap bg-clip-text '>
        Software Engineer
        </h2>
        <div className='hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0'></div>
        <div className='my-16 text-center animate-fade-in'>
          <h2 className='text-lg text-zinc-500 mx-5  '>
            Hi, my name is &lt;Karthik &#47;&gt;, Graduate Student at California State University San Bernardino.{" "} 
            <br className="hidden md:block" />
            Reading and learning from docs are my superpower
           
          </h2>
        </div>
      </div>
    
        </>
  );
};

export default Home;
