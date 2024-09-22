import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [isIdleDevelopmentOpen, setIdleDevelopmentOpen] = useState(false);
  const [isFalixNodesOpen, setFalixNodesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleIdleDevelopment = () => {
    setIdleDevelopmentOpen((prev) => !prev);
  };

  const toggleFalixNodes = () => {
    setFalixNodesOpen((prev) => !prev);
  };

  return (
    <div>
      {/* Navbar */}
      <div
        className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ${
          scrolled ? 'bg-indigo-600 shadow-lg' : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-white text-lg font-bold">HUSNAIN.UK</div>
          <nav>
            <a href="#home" className="px-4 py-2 text-white hover:bg-indigo-700 rounded" aria-label="Home">Home</a>
            <a href="#about" className="px-4 py-2 text-white hover:bg-indigo-700 rounded" aria-label="About">About</a>
            <a href="#projects" className="px-4 py-2 text-white hover:bg-indigo-700 rounded" aria-label="Projects">Projects</a>
            <a href="#skills" className="px-4 py-2 text-white hover:bg-indigo-700 rounded" aria-label="Skills">Skills</a>
            <a href="#contact" className="px-4 py-2 text-white hover:bg-indigo-700 rounded" aria-label="Contact">Contact</a>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center bg-white-900 text-white py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate__animated animate__fadeIn">Husnain</h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-400 animate__animated animate__fadeIn animate__delay-1s">Developer | Student | Human</p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex space-x-4">
          <a
            href="#projects"
            className="bg-indigo-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700 transition-colors"
            aria-label="View My Work"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-indigo-600 text-indigo-600 py-3 px-6 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors"
            aria-label="Get in Touch"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Wave Transition at Bottom */}
      <div className="w-full mt-16">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,128L30,144C60,160,120,192,180,202.7C240,213,300,203,360,186.7C420,171,480,149,540,165.3C600,181,660,235,720,224C780,213,840,139,900,128C960,117,1020,171,1080,186.7C1140,203,1200,181,1260,160C1320,139,1380,117,1410,106.7L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* About Section */}
      <div id="about" className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 animate__animated animate__fadeIn">About Me</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            <b>I</b> am <b>currently</b> an <b>A-Level Student</b> in the <b>UK</b>, studying <b>Criminology</b>, <b>Information Technology</b> and <b>Computer Science</b>. <b>I</b> have always been <b>interested</b> in <b>modern technology</b> and have been fortunate to turn my <b>passion</b> for the digital world into action. <b>I</b> have also <b>contributed</b> to well-known <b>tech companies</b>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-700">Education</h3>
              <ul className="list-disc list-inside text-left text-gray-600">
                <li><b>A-Levels</b> in <b>IT</b>, <b>Criminology</b>, and <b>Computer Science</b> *</li>
                <li><b>OpenLearn</b> - Introduction to <b>cyber security</b>: stay safe online</li>
                <li><b>GCSEs</b> from <b>Grades 9-4</b></li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-700">Certificates</h3>
              <ul className="list-disc list-inside text-left text-gray-600">
                <li><b>iDEA:</b> Silver Cyber Security</li>
                <li><b>Discord:</b> Early Discord Verified Bot Developer</li>
                <li><b>OpenLearn:</b> course completion.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section id="projects" className="bg-gray-100 py-16">
        <div className="container mx-auto" data-aos="fade-up">
          <header className="text-center mb-12">
            <h3 className="text-3xl font-semibold animate__animated animate__fadeIn">Services</h3>
            <p className="text-gray-600 animate__animated animate__fadeIn animate__delay-1s">
              Below are all the projects I have worked on so far; some may not be listed.
            </p>
          </header>

          <div className="flex flex-wrap justify-center mb-12">
            {/* Idle Development Main Card */}
            <div className="w-full md:w-5/12 lg:w-4/12 p-2 aos-init aos-animate">
              <div
                className="bg-white shadow-lg p-6 rounded-lg mb-6 cursor-pointer flex items-center justify-between transition-transform duration-300 hover:scale-105"
                onClick={toggleIdleDevelopment}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => e.key === 'Enter' && toggleIdleDevelopment()}
                aria-expanded={isIdleDevelopmentOpen}
                aria-controls="idle-development-content"
              >
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faMoon} className="text-blue-500 mr-2" />
                  <h4 className="text-lg font-semibold">Idle Development</h4>
                </div>
                <FontAwesomeIcon icon={faChevronDown} className={`transition-transform duration-300 ${isIdleDevelopmentOpen ? 'transform rotate-180' : ''}`} />
              </div>
            </div>

            {/* FalixNodes Main Card */}
            <div className="w-full md:w-5/12 lg:w-4/12 p-2 aos-init aos-animate">
              <div
                className="bg-white shadow-lg p-6 rounded-lg mb-6 cursor-pointer flex items-center justify-between transition-transform duration-300 hover:scale-105"
                onClick={toggleFalixNodes}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => e.key === 'Enter' && toggleFalixNodes()}
                aria-expanded={isFalixNodesOpen}
                aria-controls="falix-nodes-content"
              >
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faMoon} className="text-blue-500 mr-2" />
                  <h4 className="text-lg font-semibold">FalixNodes</h4>
                </div>
                <FontAwesomeIcon icon={faChevronDown} className={`transition-transform duration-300 ${isFalixNodesOpen ? 'transform rotate-180' : ''}`} />
              </div>
            </div>
          </div>

          {/* Idle Development Content */}
          {isIdleDevelopmentOpen && (
            <div id="idle-development-content" className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p>
                Explore the innovative features of the Idle Development project, where creativity meets technology.
              </p>
              <div className="flex flex-wrap justify-center">
              <div className="w-full md:w-5/12 lg:w-4/12 p-2 aos-init aos-animate">
              <div className="bg-white shadow-lg p-6 rounded-lg mb-6">
                <h4 className="text-lg font-semibold">
                  <a href="https://web.archive.org/web/20210102173310/https://idleyhost.com/" className="text-blue-500 hover:underline">Idley Host</a>
                </h4>
                <p className="text-gray-500">A description will be set momentarily...</p>
              </div>
            </div>
            <div className="w-full md:w-5/12 lg:w-4/12 p-2 aos-init aos-animate">
              <div className="bg-white shadow-lg p-6 rounded-lg mb-6">
                <h4 className="text-lg font-semibold">
                  <a href="https://web.archive.org/web/20210102173310/https://bee.idledev.org/" className="text-blue-500 hover:underline">Idle Bee Farm</a>
                </h4>
                <p className="text-gray-500">A description will be set momentarily...</p>
              </div>
            </div>
            <div className="w-full md:w-5/12 lg:w-4/12 p-2 aos-init aos-animate">
              <div className="bg-white shadow-lg p-6 rounded-lg mb-6">
                <h4 className="text-lg font-semibold">
                  <a href="https://web.archive.org/web/20210102173310/https://bots.idledev.org/" className="text-blue-500 hover:underline">Idle Bot List</a>
                </h4>
                <p className="text-gray-500">Acquired from Mythical Bot List, Idle Bot List was a promotional hub in the Idle community that advertised Discord Bots on the internet.</p>
              </div>
            </div>
            <div className="w-full md:w-5/12 lg:w-4/12 p-2 aos-init aos-animate">
              <div className="bg-white shadow-lg p-6 rounded-lg mb-6">
                <h4 className="text-lg font-semibold">
                  <a href="#" className="text-blue-500 hover:underline">Fleco</a>
                </h4>
                <p className="text-gray-500">Fleco was a project that originated between myself and Triassic pre Idle Development. The Discord Bot was multi-purpose, sadly it is no-more maintained.</p>
              </div>
            </div>
            <div className="w-full md:w-5/12 lg:w-4/12 p-2 aos-init aos-animate">
              <div className="bg-white shadow-lg p-6 rounded-lg mb-6">
                <h4 className="text-lg font-semibold">
                  <a href="#" className="text-blue-500 hover:underline">Jeekie Host</a>
                </h4>
                <p className="text-gray-500">JeekieHost was acquired by Idle Development approximately in late 2020, the host featured a Pterodactyl panel, VPS management portal and a billing portal.</p>
              </div>
            </div>
            <div className="w-full md:w-5/12 lg:w-4/12 p-2 aos-init aos-animate">
              <div className="bg-white shadow-lg p-6 rounded-lg mb-6">
                <h4 className="text-lg font-semibold">
                  <a href="#" className="text-blue-500 hover:underline">Idle Bee Farm Web</a>
                </h4>
                <p className="text-gray-500">Although not released, during the period where Discord introduced bot verifications, Triassic, Shane, and I worked on a web version of Idle Bee Farm.</p>
              </div>
            </div>
            <div className="w-full md:w-5/12 lg:w-4/12 p-2 aos-init aos-animate">
              <div className="bg-white shadow-lg p-6 rounded-lg mb-6">
                <h4 className="text-lg font-semibold">
                  <a href="#" className="text-blue-500 hover:underline">Idley Host Desktop</a>
                </h4>
                <p className="text-gray-500">A description will be set momentarily...</p>
              </div>
            </div>
              </div>
            </div>
          )}

          {/* FalixNodes Content */}
          {isFalixNodesOpen && (
            <div id="falix-nodes-content" className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p>
                Discover the powerful tools and services provided by FalixNodes, designed for developers.
              </p>
              <div className="flex flex-wrap">
              <div className="w-full md:w-5/12 lg:w-4/12 p-2 aos-init aos-animate">
              <div className="bg-white shadow-lg p-6 rounded-lg mb-6">
                <h4 className="text-lg font-semibold">
                  <a href="#" className="text-blue-500 hover:underline">Client Panel</a>
                </h4>
                <p className="text-gray-500">I had contributed to the theme of the client panel.</p>
              </div>
            </div>
            <div className="w-full md:w-5/12 lg:w-4/12 p-2 aos-init aos-animate">
              <div className="bg-white shadow-lg p-6 rounded-lg mb-6">
                <h4 className="text-lg font-semibold">
                  <a href="#" className="text-blue-500 hover:underline">Staff Panel</a>
                </h4>
                <p className="text-gray-500">I was also responsible for a 2021 staff-panel revamp operation.</p>
              </div>
            </div>
            <div className="w-full md:w-5/12 lg:w-4/12 p-2 aos-init aos-animate">
              <div className="bg-white shadow-lg p-6 rounded-lg mb-6">
                <h4 className="text-lg font-semibold">
                  <a href="#" className="text-blue-500 hover:underline">Discord Bot</a>
                </h4>
                <p className="text-gray-500">I had also created a Discord Support Bot to integrate with Falix services.</p>
              </div>
            </div>
              </div>
            </div>
          )}
        </div>
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Current Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="font-bold text-xl">HUSNAIN.UK</h3>
              <p className="text-gray-600">This website.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="font-bold text-xl">Cyper Billing</h3>
              <p className="text-gray-600">A React NextJS billing panel.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="font-bold text-xl">Being a student</h3>
              <p className="text-gray-600">Due to the nature of my courses, you would most likely see me working in this department.</p>
            </div>
          </div>
        </div>
    </section>


      {/* Skills Section */}
      <div id="skills" className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Skills</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
           Dear Potential Employers (pls hire me), you probably will not understand majority skills so I will outly some skills that you may know of:
            </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-indigo-500 text-white p-6 rounded-lg">
              <h3 className="font-bold text-xl">English</h3>
            </div>
            <div className="bg-indigo-500 text-white p-6 rounded-lg">
              <h3 className="font-bold text-xl">Reading</h3>
            </div>
            <div className="bg-indigo-500 text-white p-6 rounded-lg">
              <h3 className="font-bold text-xl">Writing</h3>
            </div>
            <div className="bg-indigo-500 text-white p-6 rounded-lg">
              <h3 className="font-bold text-xl">Speaking</h3>
            </div>
            <div className="bg-indigo-500 text-white p-6 rounded-lg">
              <h3 className="font-bold text-xl">JavaScript</h3>
            </div>
            <div className="bg-indigo-500 text-white p-6 rounded-lg">
              <h3 className="font-bold text-xl">React.js</h3>
            </div>
            <div className="bg-indigo-500 text-white p-6 rounded-lg">
              <h3 className="font-bold text-xl">Node.js</h3>
            </div>
            <div className="bg-indigo-500 text-white p-6 rounded-lg">
              <h3 className="font-bold text-xl">Visual Basic</h3>
            </div>
            <div className="bg-indigo-500 text-white p-6 rounded-lg">
              <h3 className="font-bold text-xl">HTML</h3>
            </div>
            <div className="bg-indigo-500 text-white p-6 rounded-lg">
              <h3 className="font-bold text-xl">NODE.JS</h3>
            </div>
            <div className="bg-indigo-500 text-white p-6 rounded-lg">
              <h3 className="font-bold text-xl">Linux</h3>
            </div>
            <div className="bg-indigo-500 text-white p-6 rounded-lg">
              <h3 className="font-bold text-xl">GitHub</h3>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Section */}
      <div id="contact" className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Get in Touch</h2>
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-lg shadow-md">
      <div className="flex items-center">
        <svg
          className="w-5 h-5 mr-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4m0 4h.01M21.001 12A9.001 9.001 0 1112 3a9.001 9.001 0 019 9z"
          />
        </svg>
        <div>
          <p>The form is not functional at this moment of time! If you would like to get in touch please email me at contact@husnain.uk</p>
        </div>
      </div>
    </div><br/>
          
          <p className="text-lg text-gray-600 mb-8">Feel free to reach out for project collaborations or inquiries!</p>
          <form className="max-w-lg mx-auto">
            <input className="w-full mb-4 p-2 border border-gray-300 rounded" type="text" placeholder="Your Name" />
            <input className="w-full mb-4 p-2 border border-gray-300 rounded" type="email" placeholder="Your Email" />
            <textarea className="w-full mb-4 p-2 border border-gray-300 rounded" placeholder="Your Message"></textarea>
            <button type="submit" className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700">Send Message</button>
          </form>
        </div>
      </div>


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p className="mb-4">© 2024 Husnain. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
