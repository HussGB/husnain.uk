import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';

const HomePage = () => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Hello, I'm Husnain!</h1>
        <p className="text-lg">A full-stack developer & student..</p>
        <div className="mt-8 flex justify-center">
          <ul className="flex space-x-4">
            <li>
              <a href="https://www.linkedin.com/in/mohammed-h-b40997280/" target="_blank" className="text-white">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </li>
            
            <li>
              <a href="https://github.com/hussgb" target="_blank" className="text-white">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </li>
            <li>
              <a href="https://discord.com/users/532349905679679498" target="_blank" className="text-white">
                <FontAwesomeIcon icon={faDiscord} size="2x" />
              </a>
            </li>
          </ul>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 mt-8 rounded-full transition-all duration-300">
          <a href="mailto:contact@husnain.uk">Contact Me</a>
        </button>
      </div>
    </section>
  );
}

export default HomePage;
