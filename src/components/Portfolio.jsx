import {useState,useEffect} from 'react';
import {motion,AnimatePresence} from 'framer-motion';
import {Menu,X} from 'lucide-react';
import {IMGS,GIT_HUB,LINKED_IN,EMAIL,PHONE,RESUME_LINK} from '../utils/constants';
import {projects} from '../utils/data';
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJava,
  FaBootstrap,
  FaNodeJs,
  FaAngular
} from "react-icons/fa";

import {
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";

const Portfolio=()=>{
  const [open, setOpen] = useState(false);
  const [fade, setFade] = useState(true);
  const [currentImg, setCurrentImg] = useState(0);
  

  useEffect(()=>{
    const interval=setInterval(()=>{
      setFade(false);
      
        setTimeout(()=>{
          setCurrentImg((prev)=>(prev+1)%IMGS.length);
          setFade(true);
        }, 500)

       }, 30000)
    return () => clearInterval(interval);
  }, [])

    const skills = [
  { name: "HTML5", icon: <FaHtml5 size={40} /> },
  { name: "CSS3", icon: <FaCss3Alt size={40} /> },
  { name: "JavaScript ES6+", icon: <SiJavascript size={40} /> },
  { name: "ReactJS", icon: <FaReact size={40} /> },
  { name: "Redux", icon: <SiRedux size={40} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} /> },
  { name: "Bootstrap", icon: <FaBootstrap size={40} /> },
  { name: "NodeJS", icon: <FaNodeJs size={40} /> },
  { name: "MongoDB", icon: <SiMongodb size={40} /> },
  { name: "Firebase", icon: <SiFirebase size={40} /> },
  { name: "AngularJS", icon: <FaAngular size={40} /> }
];
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-gray-900 to-blue-950 opacity-95"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      {/* Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
              
        className="fixed top-0 left-0 w-full z-50 bg-[#111827]/90 backdrop-blur-md bg-white/10 rounded-b-3xl border border-white/10 shadow-xl z-50">
        <div className="max-w-8xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <h1 className="text-2xl md:text-3xl font-bold text-blue-500">
            Arshiya Fathima
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-white text-lg">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          {/* Mobile Icon */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-[#111827]"
            >
              <ul className="flex flex-col gap-5 px-6 py-5 text-white text-lg">
                <li>
                  <a href="#about" onClick={() => setOpen(false)}>
                    About
                  </a>
                </li>

                <li>
                  <a href="#experience" onClick={() => setOpen(false)}>
                    Experience
                  </a>
                </li>

                <li>
                  <a href="#projects" onClick={() => setOpen(false)}>
                    Projects
                  </a>
                </li>

                <li>
                  <a href="#contact" onClick={() => setOpen(false)}>
                    Contact
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center text-center py-28 px-6"
      >
        <motion.img
          whileHover={{ scale: 1.08, rotate: 3 }}
          transition={{ type: "spring", stiffness: 200 }}
           alt="profile"
           src={IMGS[currentImg]}
          className="w-40 h-40 object-cover rounded-full border-4 border-blue-400 shadow-2xl mb-6 transition-opacity duration-500 ease-in-out ${fade?'opacity-100':'opacity-0'}"
        />
         {/* src="https://i.pravatar.cc/200" */}
        

        <h2 className="text-5xl font-bold mb-4">
          Frontend Developer
        </h2>

        <p className="max-w-3xl text-lg text-gray-300 leading-8">
          Frontend Developer with 3.3 years of experience building scalable and
          responsive web applications using React.js, JavaScript, HTML5,
          CSS3, Bootstrap, and Node.js. Experienced in developing reusable UI
          components, mentoring junior developers, and delivering enterprise
          banking and automation solutions.
        </p>

        <div className="flex gap-6 mt-10 flex-wrap justify-center">
          <a
            href={LINKED_IN}
            target="_blank"
            className="mt-8 px-6 py-3 bg-blue-500 rounded-2xl font-semibold hover:scale-105 transition shadow-lg"
          >
            LinkedIn
          </a>

          <a
            href={GIT_HUB}
            target="_blank"
            className="mt-8 px-6 py-3 bg-white text-black rounded-2xl font-semibold hover:scale-105 transition shadow-lg"
          >
            GitHub
          </a>
          <a
          href={RESUME_LINK}
          download
          className="mt-8
            group relative inline-flex items-center gap-3
            px-6 py-3
            bg-cyan-500/20
            border border-cyan-400/30
            backdrop-blur-xl
            rounded-2xl
            text-white font-semibold
            overflow-hidden
            transition-all duration-300
            hover:scale-105 hover:bg-cyan-400/20
            shadow-lg shadow-cyan-500/20
          "
        >
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition duration-500"></span>

          <span className="relative text-xl">⬇</span>

          <span className="relative">
            Download Resume
          </span>
        </a>
        </div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="py-20 px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">About Me</h2>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white/10"
        >
          <p className="text-lg leading-8 text-gray-300">
            I am a passionate Frontend Developer with hands-on experience in
            developing enterprise-level applications using React.js, AngularJS,
            and modern frontend technologies. I have worked on banking,
            automation, and document management projects while mentoring junior
            developers and collaborating with cross-functional teams.
          </p>

          <p className="text-lg leading-8 text-gray-300 mt-6">
            After taking a planned maternity career break, I continued
            upskilling in MERN stack development, building personal projects,
            and strengthening my frontend and full-stack expertise.
          </p>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-8 bg-white/5">
        <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>

       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg border border-white/10 p-6 rounded-3xl shadow-xl hover:scale-105 transition duration-300 flex flex-col items-center gap-4"
          >
            <div className="text-cyan-400 animate-bounce">
              {skill.icon}
            </div>

            <h3 className="text-lg font-semibold text-white">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Work Experience
        </h2>

        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/10 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
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
          </ul>
        </div>

        {/* Career Break */}
        <div className="mt-10 bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/10 shadow-2xl">
          <h3 className="text-2xl font-bold text-purple-400 mb-4">
            Career Break
          </h3>

          <p className="text-gray-300 leading-8 text-lg">
            Took a planned maternity career break while continuing technical
            upskilling in MERN stack technologies, React ecosystem
            improvements, and modern frontend development practices. Built
            personal projects and strengthened full-stack development skills
            during this period.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

       <div className="grid md:grid-cols-3 gap-8">
  {projects.map((project, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
      }}
      whileHover={{
        scale: 1.05,
        rotateX: 5,
        rotateY: 5,
      }}
      viewport={{ once: true }}
      className="bg-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl hover:shadow-blue-500/20 transition duration-500"
    >
      <motion.h3
        whileHover={{ x: 5 }}
        className="text-2xl font-bold mb-4 text-cyan-400"
      >
        {project.title}
      </motion.h3>

      <p className="text-gray-300 mb-4">
        {project.desc}
      </p>

      <motion.span
        whileHover={{ scale: 1.1 }}
        className="inline-block bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm"
      >
        {project.tech}
      </motion.span>
    </motion.div>
  ))}
</div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-8 bg-white/5">
        <h2 className="text-4xl font-bold text-center mb-12">
          Achievements
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 p-8 rounded-3xl border border-white/10 shadow-xl">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              Excellence Award
            </h3>

            <p className="text-gray-300 leading-7">
              Received Excellence Award at Sirma Business Consulting India for
              contribution towards successful project delivery and frontend
              development excellence.
            </p>
          </div>

          <div className="bg-white/10 p-8 rounded-3xl border border-white/10 shadow-xl">
            <h3 className="text-2xl font-bold text-purple-400 mb-4">
              Team Mentorship
            </h3>

            <p className="text-gray-300 leading-7">
              Mentored junior developers and supported frontend implementation,
              reusable component development, and code optimization practices.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        id="contact"
        className="bg-white/10 backdrop-blur-xl border border-white/10 text-white py-20 px-8 text-center rounded-t-[3rem]"
      >
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>

        <p className="mb-4 text-lg text-gray-300">
          📧 {EMAIL}
        </p>

        <p className="mb-8 text-lg text-gray-300">
          📱 {PHONE}
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href={LINKED_IN}
            target="_blank"
            className="bg-blue-500 px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition"
          >
            LinkedIn
          </a>

          <a
            href={GIT_HUB}
            target="_blank"
            className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition"
          >
            GitHub
          </a>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-6 border-t border-white/10">
        <p>© 2026 Arshiya Fathima. All rights reserved.</p>
      </footer>
    </div>
  );
 };

export default Portfolio;


