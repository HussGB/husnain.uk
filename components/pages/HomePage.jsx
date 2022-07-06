import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub, faYoutube, faTwitter, faReddit, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faAngleDown, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function HomePage() {
    return (
        <section id="top"><div className="back" >
        <br></br>
        <br></br>
        <br></br>


    <center>
        <div className="shadow-lg rounded-2xl w-80 bg-dark dark:bg-gray-800">
        <Image height="150" width="400" alt="profilebg" src="/assets/img/bg-img1.jpg" className="rounded-t-lg h-28 w-full mb-4 blur"/>
        <div className="flex flex-col items-center justify-center p-4 -mt-16">
            <a href="#" className="block relative">
            <Image
            height="64" width="64" src="/favicons/circle-avatar.png" alt="avatar" className="mx-auto object-cover rounded-full h-16 w-16  border-2 border-white dark:border-gray-800"
          />
            </a>
            <p className="text-gray-800 dark:text-white text-xl font-medium mt-2">
                Husnain
            </p>
            <p className="text-gray-400 text-xs mb-4"><br></br>
            <Image 
          alt="Early verified bot developer" height="30" width="30" src="/assets/img/developer.png"
          />
          <Image 
          alt="Bravery" height="30" width="30" src="/assets/img/bravery.png"
          />
            </p>
            <p className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-200"><FontAwesomeIcon icon={faEnvelope}> </FontAwesomeIcon><a href="mailto:one@hussgb.dev">- one@hussgb.dev</a><br></br></p>
         <p className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-200">JavaScript, HTML & Python developer. Actively learning React-JS.</p>
            <div className="rounded-lg p-2 w-full mt-4">
                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-200">
                    <p className="flex flex-col">
                        Occupation
                        <span className="text-black dark:text-white font-bold">
                            Student
                        </span>
                    </p>
                    <p className="flex flex-col">
                       Developer Type
                        <span className="text-black dark:text-white font-bold">
                            Full Stack
                        </span>
                    </p>
                    <p className="flex flex-col">
                        Country
                        <span className="text-black dark:text-white font-bold">
                            UK
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
    </center>
        
      </div> 
        </section>
    )
}  