import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

const ContactPage = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="mt-16 bg-gray-700 py-8">
        <div className="container mx-auto flex justify-between">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              | contact@husnain.uk
            </p>
            <p>
            <FontAwesomeIcon icon={faDiscord} className="mr-2" />
              | HussGB
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              {/* Use the faLinkedin icon from the correct package */}
              <a href="https://www.linkedin.com/in/mohammed-h-b40997280/" target="_blank" className="text-white">
                <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                LinkedIn
              </a>
              {/* ... other social media icons */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactPage;
