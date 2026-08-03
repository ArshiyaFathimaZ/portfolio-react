
import {experience} from "../utils/data";
const Experience=()=>{
    
    return(
        
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/10 shadow-2xl">
             { experience.map((exp,index)=>(
            <div key={index}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-blue-400">
                {exp.position}
              </h3>
              <p className="text-gray-300 text-lg">
               { exp.company}
              </p>
            </div>

            <p className="text-gray-400 mt-3 md:mt-0">
              {exp.duration}
            </p>
          </div>
         
          <ul className="space-y-4 text-gray-300 leading-8 list-disc pl-6">
            <li>
             {exp.responsibilities}
            </li>

          
          </ul>
            </div>)
           
         )} 
             
          {/* <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-blue-400">
                Frontend Developer
              </h3>
              <p className="text-gray-300 text-lg">
                Sirma Business Consulting India
              </p>
            </div>

            <p className="text-gray-400 mt-3 md:mt-0">
              Nov 2020 – Jan 2024
            </p>
          </div>
         
          <ul className="space-y-4 text-gray-300 leading-8 list-disc pl-6">
            <li>
              Developed scalable and responsive enterprise web applications
              using React.js, AngularJS, JavaScript, HTML5, CSS3, and
              Bootstrap.
            </li>

            <li>
              Built reusable UI components and optimized frontend performance
              for maintainable and clean architecture.
            </li>

            <li>
              Mentored and guided a team of 5 junior developers in frontend
              implementation and coding best practices.
            </li>

            <li>
              Collaborated with backend developers, designers, and QA teams to
              deliver high-quality customer-focused applications.
            </li>

            <li>
              Worked on banking automation, document management, and RPA-based
              enterprise solutions.
            </li>
          </ul> */}
        </div>
    )
}
export default Experience;