import { useEffect, useState } from "react";
import { FaReact, FaNodeJs, FaBars, FaTimes, FaDatabase, FaServer, FaGithub, FaLinkedin, FaCloud, FaUsers, FaLaptopCode  } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiJavascript } from "react-icons/si";

export default function Home() {

    const [isOpen, setIsOpen] = useState(false);

  const sections = ["about", "skills", "projects", "experience", "testimonials", "contact"];


  useEffect(() => {
    // Smooth scroll for navbar links
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
      });
    });
  }, []);

  return (
    <div className="font-sans antialiased bg-gray-50 text-gray-800 overflow-x-hidden">

{/* Navbar */}
<nav className="fixed w-full top-0 z-50 flex justify-between items-center px-6 md:px-0 py-4 bg-transparent">
      
      {/* Left side rectangle behind name */}
      <div className="relative flex items-center">
        <div
          className="absolute left-0 top-0 h-full bg-white"
          style={{
            width: "calc(100% + 2rem)",
            maxWidth: "300px",
            paddingLeft: "2rem",
            paddingRight: "1rem",
            zIndex: -1,
          }}
        ></div>
        <h1 className="relative text-2xl font-bold text-gray-900 pl-4">
          Mohammed Husnain
        </h1>
      </div>

      {/* Desktop nav links */}
      <div className="hidden md:flex space-x-4 md:space-x-6 text-sm md:text-lg font-medium relative">
        {sections.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className="relative text-gray-900 hover:text-indigo-500 transition-colors duration-300 font-semibold"
          >
            <div
              className="absolute bg-white"
              style={{
                top: "-0.25rem",
                bottom: "-0.25rem",
                left: "-1.5rem",
                right: "-0.5rem",
                zIndex: -1,
              }}
            ></div>
            <span className="relative px-3 py-2 text-base md:text-lg">
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </span>
          </a>
        ))}
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 focus:outline-none">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-gray-50 shadow-lg rounded-md flex flex-col z-50">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="px-4 py-2 text-gray-900 hover:bg-gray-200 transition font-medium"
              onClick={() => setIsOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      )}
    </nav>

      {/* Hero Section */}
<section className="relative h-[50vh] flex flex-col justify-center items-center text-center px-6">
  {/* Background image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/bham_banner.jpg')" }}
  ></div>

  {/* Dark overlay / tint */}
  <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.6)" }}></div>

  {/* Hero content */}
  <div className="relative z-10 flex flex-col items-center text-white">
    <h2 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in">
      Mohammed Husnain
    </h2>
    <p className="text-lg md:text-xl mb-6 animate-fade-in max-w-2xl text-center">
      Experienced Full-Stack Developer & IT Specialist | Birmingham, UK
    </p>
    <div className="flex space-x-4">
      {["about", "skills", "projects", "experience", "testimonials", "contact"].map(
        (key) => (
          <button
            key={key}
            onClick={() => setActiveSection(key)}
            className="bg-accent hover:bg-indigo-700 text-white font-semibold px-5 py-2 rounded transition"
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        )
      )}
    </div>
  </div>
</section>


{/* About Section */}
<section id="about" className="py-24 px-6 bg-white relative">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
    
    {/* Left - Text */}
    <div className="md:w-5/12 space-y-6">
      <h3 className="text-4xl font-extrabold text-gray-900 relative">
        About Me
        <span className="block w-20 h-1 bg-[#272A2F] mt-2 rounded"></span>
      </h3>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700">
        I'm <span className="font-semibold text-[#272A2F]">Mohammed Husnain</span>, 
        a <strong>Full-Stack Developer</strong> and <strong>IT Specialist</strong> based in Birmingham, UK. 
        I specialise in building <em>modern, scalable applications</em> with a strong 
        focus on <strong>security, performance, and user experience</strong>.
      </p>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700">
        With hands-on experience in web apps, dashboards, and client portals, 
        I enjoy bringing complex ideas to life through clean, reliable code.
      </p>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700">
        I thrive in solving challenging problems and continuously learning new 
        technologies to push projects further.
      </p>
    </div>

    {/* Divider */}
    <div className="hidden md:flex w-px bg-gray-200 self-stretch"></div>

    {/* Right - Image */}
    <div className="md:w-5/12 flex justify-center">
      <div className="relative w-72 h-72 rounded-xl overflow-hidden shadow-xl">
        <img 
          src="/husnain.jpeg" 
          alt="Mohammed Husnain" 
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for subtle depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
    </div>

  </div>
</section>


      {/* Skills Section */}
<section id="skills" className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-6xl mx-auto text-center">
    <h3 className="text-4xl font-bold mb-12 relative inline-block">
      Skills
      <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[#35383D] rounded"></span>
    </h3>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {[
        { icon: <SiJavascript size={40} className="text-yellow-500" />, label: "JavaScript" },
        { icon: <FaReact size={40} className="text-cyan-400" />, label: "React.js" },
        { icon: <SiNextdotjs size={40} className="text-white bg-black p-2 rounded" />, label: "Next.js" },
        { icon: <FaNodeJs size={40} className="text-green-500" />, label: "Node.js" },
        { icon: <SiTailwindcss size={40} className="text-blue-400" />, label: "TailwindCSS" },
        { icon: <FaDatabase size={40} className="text-indigo-600" />, label: "Databases" },
        { icon: <FaServer size={40} className="text-gray-600" />, label: "APIs & Servers" },
        { icon: <FaCloud size={40} className="text-gray-400" />, label: "Cloud & Hosting" },
      ].map((skill, idx) => (
        <div 
          key={idx} 
          className="flex flex-col items-center justify-center p-6 bg-white/70 backdrop-blur-sm shadow-sm rounded-xl border border-gray-200 hover:shadow-md transition"
        >
          {skill.icon}
          <p className="mt-3 text-lg font-medium text-gray-800">{skill.label}</p>
        </div>
      ))}
    </div>
  </div>
</section>

     {/* Projects Section */}
<section id="projects" className="py-24 px-6 bg-gray-50 relative overflow-hidden">
  {/* Floating decorative icons */}
  <FaServer className="absolute top-10 left-10 text-[#272A2F] opacity-10 animate-float-fast" size={80} />
  <SiNextdotjs className="absolute bottom-10 right-10 text-[#272A2F] opacity-10 animate-float-slow" size={80} />

  <div className="max-w-6xl mx-auto text-center relative z-10">
    <h3 className="text-4xl font-extrabold text-gray-900 mb-16">
      Projects
      <span className="block w-24 h-1 bg-[#272A2F] mx-auto mt-3 rounded"></span>
    </h3>

    {/* Projects Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        {
          title: "Billing Panels",
          icon: <FaServer size={40} className="text-[#272A2F]" />,
          desc: "Custom full-stack billing solutions with secure payment integration, designed for scalability.",
          img: "/CyperBilling.png"
        },
        {
          title: "Dashboards",
          icon: <FaReact size={40} className="text-cyan-500" />,
          desc: "Professional admin and client dashboards built with React & Next.js for a seamless UX.",
          img: "/TenancyPortal.jpg"
        },
        {
          title: "Automation Tools",
          icon: <FaNodeJs size={40} className="text-green-600" />,
          desc: "Backend automation scripts and integrations that streamline workflows and reduce manual effort.",
          img: "/AutomationCode.png"
        }
      ].map((project) => (
        <div
          key={project.title}
          className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 flex flex-col"
        >
          {/* Project Image */}
          <div className="relative h-40 overflow-hidden">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition"></div>
          </div>

          {/* Project Content */}
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex items-center justify-center mb-4">
              {project.icon}
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h4>
            <p className="text-gray-600 text-sm flex-grow">{project.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Experience Section */}
<section id="experience" className="py-20 px-6 bg-[#272A2F] text-white relative">
  <div className="max-w-5xl mx-auto">
    <h3 className="text-4xl font-bold text-center mb-16">Experience</h3>

    <div className="space-y-10">
      {/* Idle Development */}
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0">
          <div className="bg-gray-800 p-4 rounded-full shadow-md">
            <FaUsers size={28} className="text-cyan-400" />
          </div>
        </div>
        <div>
          <h4 className="text-2xl font-semibold">Idle Development</h4>
          <p className="text-gray-300 text-sm mt-1">
            Co-founded a team of developers focused on creative online projects (2019–2021). 
            Contributed to hosting platforms, Discord integrations, and web applications.
          </p>
          <ul className="list-disc list-inside text-gray-400 text-sm mt-2 space-y-1">
            <li><span className="font-medium text-white">Idley Host</span> — Hosting platform with Pterodactyl, VPS management, and billing portal.</li>
            <li><span className="font-medium text-white">Idle Bot List</span> — Promotional hub for Discord bots (acquired from Mythical Bot List).</li>
            <li><span className="font-medium text-white">Idle Bee Farm</span> — Community projects (bot + web version with Triassic & Shane).</li>
            <li><span className="font-medium text-white">Fleco</span> — Multi-purpose Discord bot (early collaboration project).</li>
            <li><span className="font-medium text-white">Jeekie Host</span> — Acquired project, hosting solutions integrated into Idle Dev.</li>
          </ul>
        </div>
      </div>

      {/* Falix Contributions */}
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0">
          <div className="bg-gray-800 p-4 rounded-full shadow-md">
            <FaServer size={28} className="text-green-400" />
          </div>
        </div>
        <div>
          <h4 className="text-2xl font-semibold">FalixNodes Contributions</h4>
          <p className="text-gray-300 text-sm mt-1">
            Active contributor between 2018–2021, working on both design and development.
          </p>
          <ul className="list-disc list-inside text-gray-400 text-sm mt-2 space-y-1">
            <li>Designed and implemented the <span className="font-medium text-white">Client Panel theme</span>.</li>
            <li>Led a <span className="font-medium text-white">Staff Panel revamp</span> in 2021.</li>
            <li>Developed a <span className="font-medium text-white">Discord Support Bot</span> integrating with Falix services.</li>
          </ul>
        </div>
      </div>

      {/* Skills */}
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0">
          <div className="bg-gray-800 p-4 rounded-full shadow-md">
            <FaLaptopCode size={28} className="text-indigo-400" />
          </div>
        </div>
        <div>
          <h4 className="text-2xl font-semibold">Full-Stack Development & Cybersecurity</h4>
          <p className="text-gray-300 text-sm mt-1">
            Skilled in building full-stack solutions using modern technologies while ensuring security best practices.
          </p>
          <div className="flex flex-wrap gap-3 mt-3 text-sm text-gray-200">
            <span className="bg-gray-700 px-3 py-1 rounded-full">React / Next.js</span>
            <span className="bg-gray-700 px-3 py-1 rounded-full">Node.js</span>
            <span className="bg-gray-700 px-3 py-1 rounded-full">MySQL</span>
            <span className="bg-gray-700 px-3 py-1 rounded-full">Cybersecurity</span>
            <span className="bg-gray-700 px-3 py-1 rounded-full">IT Solutions</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Testimonials Section */}
<section id="testimonials" className="py-20 px-6 relative bg-gray-100">
  <h3 className="text-4xl font-bold mb-12 text-center text-gray-800">Testimonials</h3>
  <div className="max-w-3xl mx-auto bg-gray-50 border border-gray-200 rounded-lg shadow-md p-10 text-center">
    <p className="text-gray-600 italic mb-4">
      🚧 This section is under construction. Testimonials are being collected and will be displayed here soon.
    </p>
    <p className="text-gray-500">Stay tuned for client feedback and reviews!</p>
  </div>
</section>

{/* Contact Section */}
<section id="contact" className="py-20 px-6 bg-gray-100">
  <div className="max-w-3xl mx-auto text-center space-y-6">
    <h3 className="text-4xl font-bold mb-6 text-gray-800">Contact</h3>

    {/* Social Links */}
    <div className="flex justify-center gap-8 text-gray-600">
      <a
        href="https://github.com/hussgb"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-800 transition"
      >
        <FaGithub size={40} />
      </a>
      <a
        href="https://www.linkedin.com/in/husnainuk"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-700 transition"
      >
        <FaLinkedin size={40} />
      </a>
    </div>

    {/* Placeholder form */}
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("🚧 Contact form is under construction. Please check back later!");
      }}
      className="bg-gray-50 p-8 rounded-lg shadow-md border border-gray-200 space-y-4"
    >
      <input
        type="text"
        placeholder="Your Name"
        className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-gray-400 bg-gray-50"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-gray-400 bg-gray-50"
      />
      <textarea
        placeholder="Your Message"
        className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-gray-400 bg-gray-50"
        rows={4}
      ></textarea>
      <button
        type="submit"
        className="bg-gray-600 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition"
      >
        Send Message
      </button>
    </form>

    <p className="text-gray-500 mt-4">
      🚧 This contact form is currently under construction.
    </p>
  </div>
</section>

      {/* Footer */}
      <footer className="p-6 bg-gray-100 text-gray-700 text-center">
        &copy; {new Date().getFullYear()} Mohammed Husnain, Birmingham, UK
      </footer>

      {/* Floating animation keyframes */}
      <style jsx>{`
        @keyframes float-slow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        @keyframes float-fast {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
          100% { transform: translateY(0px); }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
