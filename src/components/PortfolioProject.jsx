import {motion} from 'framer-motion';

const PortfolioProject=()=>{
    const projects = [
    {
      title: "Student Management System",
      desc: "A web app to manage student records, attendance, and marks.",
      tech: "React, Tailwind CSS, Firebase",
    },
    {
      title: "Weather App",
      desc: "Displays real-time weather information using API integration.",
      tech: "React, OpenWeather API",
    },
    {
      title: "Online Exam Portal",
      desc: "A platform for conducting online tests with timer and results.",
      tech: "React, Node.js, MongoDB",
    },
  ];
    return (
    <div className="min-h-screen bg-transparent text-white backdrop-blur-sm overflow-hidden relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-gray-900 to-blue-950 opacity-95"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-between px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/10 shadow-xl sticky top-0 z-50 rounded-b-3xl"
      >
        <h1 className="text-2xl font-bold text-blue-600">My Portfolio</h1>
        <ul className="flex gap-6 font-medium">
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center text-center py-28 px-6"
      >
        <motion.img
          whileHover={{ scale: 1.1, rotate: 3 }}
          transition={{ type: "spring", stiffness: 200 }}
          src="https://i.pravatar.cc/150"
          alt="profile"
          className="w-36 h-36 rounded-full border-4 border-white shadow-lg mb-6"
        />
        <h2 className="text-5xl font-bold mb-4">Hi, I'm Sufiya 👋</h2>
        <p className="max-w-2xl text-lg opacity-90">
          MCA Student passionate about Web Development, Java Programming,
          and creating modern responsive applications.
        </p>
        <a
        href="/resume.pdf"
        download
        className="mt-8 px-6 py-3 bg-white text-blue-600 rounded-2xl font-semibold shadow-lg  inline-block hover:scale-105 transition"
        >
             Download Resume
        </a>
        {/* <button className="mt-8 px-6 py-3 bg-white text-blue-600 rounded-2xl font-semibold shadow-lg hover:scale-105 transition">
          Download Resume
        </button> */}
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
          <p className="text-lg leading-8 text-gray-700">
            I am currently pursuing MCA at Bangalore Institute of Technology.
            I enjoy building responsive web applications using React JS and
            Tailwind CSS. My interests include frontend development, UI/UX,
            and software engineering.
          </p>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="bg-white py-20 px-8">
        <h2 className="text-4xl font-bold text-center text-black mb-10">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React JS",
            "Tailwind CSS",
            "Java",
            "Python",
            "MySQL",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl text-center text-black font-semibold shadow-xl border border-white/10 hover:scale-105 hover:bg-blue-500/20 transition duration-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/10 hover:-translate-y-3 hover:scale-105 transition duration-500"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-600">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.desc}</p>
              <span className="text-sm font-medium bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                {project.tech}
              </span>
            </div>
          ))}
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
        <p className="mb-4 text-lg">📧 sufiya@example.com</p>
        <p className="mb-8 text-lg">📱 +91 9876543210</p>

        <div className="flex justify-center gap-6">
          <button className="bg-white text-blue-600 px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition">
            LinkedIn
          </button>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition">
            GitHub
          </button>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-4">
        <p>© 2026 Sufiya Fathima. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PortfolioProject;


