import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faEnvelope, faTerminal } from '@fortawesome/free-solid-svg-icons';

export default function HomePage() {
    return (
        <section id="top"><div className="back" >
        <br></br>
        <br></br>
        <br></br>
        <div className="shadow-lg rounded-2xl w-100 bg-dark dark:bg-gray-800">
        <div class="badge badge-top-right"/>
        <div className="positioningHeader">
            <Image
            height="85" width="85" src="/favicons/circle-avatar.png" alt="avatar" className="mx-auto object-cover rounded-full h-16 w-16  border-2 border-white dark:border-gray-800"
          /><headerBadge className="pulse">🇬🇧</headerBadge><div className="welpThisGottaWork"><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon> - SITE IS ACTIVELY BEING REDESIGNED!!!<br/>- 14/10/22 - PRESENT</div>
            <p className="text-gray-800 dark:text-white text-xl font-medium mt-2">
                <b>Husnain</b>
            </p>
           <p className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-200">Aged 15 years, born in the United Kingdom. Known virtually as a HTML<br/>& JavaScript (frontend/backend) developer. Welcome to my website!</p>
            <div className="rounded-lg p-2 w-full mt-4">
            <Image 
      alt="Early verified bot developer" height="30" width="30" src="/assets/img/developer.png"
      />
      <Image 
      alt="Bravery" height="30" width="30" src="/assets/img/bravery.png"
      />
            </div>
            </div>
            </div>
        </div>
        </section>
    )
}  