"use client"
const Project = [
    {
      id: 1,
      name: "Quality Veda Portal",
      description: "Quality Veda is a premier destination for diverse medical training programs, bridging theoretical knowledge with practical application.",
      imageLink: "/tbikiet.png",
      livelink: "https://qualityveda.co",
      technologies: "React.js, Redux Toolkit, MongoDB, Redis, Next.js, Node.js, Express, Socket.io",
      github: "https://github.com/adityatyagi-av/qualityveda"
    },
    {
      id: 2,
      name: "SpringBee Portal",
      description: "Established to amplify online potential, SpringBee offers premium consultancy services focused on accelerating businesses, recognizing the individuality in the needs of unparalleled business ventures.",
      imageLink: "/springbee.png",
      livelink: "https://springbee.tech",
      technologies: "React.js, Redux Toolkit, MongoDB, Redis, Next.js, Node.js, Express, Socket.io",
      github: "https://github.com/aryantiwari8736/client"
    },
    {
      id: 3,
      name: "TBI-KIET Website",
      description: "TBI-KIET is a registered body promoting entrepreneurship and innovation. It was jointly promoted by NSTEDB, Department of Science & Technology, Govt. of India and KIET Group of Institutions.",
      imageLink: "/tbikiet.png",
      livelink: "https://tbikiet.vercel.app",
      technologies: "Django, React.js, JSX, Next.js, Supabase, PostgreSQL",
      github: "https://github.com/tbikiet/TBI-Frontend"
    },
    {
      id: 4,
      name: "NSCC-KIET Website",
      description: "The NSCC-KIET website promotes technical and competitive practices in the college. It aims to train engineers from all branches to work on different aspects of technical and soft skills.",
      imageLink: "/nscckiet.png",
      livelink: "https://nscckiet.tech",
      technologies: "Next.js, Tailwind CSS, Supabase, SQL, YouTube API, Google API",
      github: "https://github.com/adityatyagi-av/nsccwebsite"
    },
    {
      id: 5,
      name: "MediCords Portal",
      description: "MediCords is a centralized portal for storing and accessing medical records. It provides a user-friendly interface for users to upload and manage their medical records securely.",
      imageLink: "/medicords.png",
      livelink: "https://github.com/adityatyagi-av/MEDI_CORD",
      technologies: "Node.js, jQuery, React.js, MongoDB",
      github: "https://github.com/adityatyagi-av/MEDI_CORD"
    }
  ];

const Projects = () => {
  return (
    
    <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 ">
        <h2 className="max-w-2xl text-center mx-auto text-4xl font-semibold tracking-tight text-gray-800 xl:text-6xl dark:text-white">
            My <span className="text-indigo-700">Projects</span>
        </h2>
        {
            Project.map((project)=>{
            return(
                
                    <div key={project.id} className={`${project.id % 2 === 0 ? "flex lg:flex-row-reverse" : "flex lg:flex-row"} my-10 flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-md  sm:mx-auto`}>

                <div className="relative lg:w-1/2">
                  <img
                    src={project.imageLink}
                    alt=""
                    className="object-contain w-full lg:absolute h-80 lg:h-full"
                  />
                  
                </div>
                <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
                  
                  <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
                    {project.name}
                  </h5>
                  <p className="mb-5 text-gray-800">
                      {project.description}
                  </p>
                  <h2 className=" text-lg font-semibold text-gray-900 dark:text-white">Tech Stack: <span className="text-sm text-gray-600">{project.technologies}</span> </h2>

                  <hr className="h-px mb-2 bg-gray-200 border-0 dark:bg-gray-700"/>
                    
                  <div className="flex  items-center gap-5">
                    
                    <a
                      href={project.github}
                      target='_blank'
                      aria-label=""
                      className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    >
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                    <a href={project.livelink}
                    target='_blank'>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z" className='bold'/></svg>
                    </a>
                    
                  </div>

                </div>
              </div>
            )})
        }
      </div>
  )
}
export default Projects