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
        <div className="badge badge-top-right"/>
        <div className="positioningHeader">
            <Image
            height="85" width="85" src="/favicons/circle-avatar.png" alt="avatar" className="mx-auto object-cover rounded-full h-16 w-16  border-2 border-white dark:border-gray-800"
          /><headerBadge className="pulse">🇬🇧</headerBadge><div className="welpThisGottaWork"><Image alt="Discord Bravery" height="30" width="30" src="/assets/img/braveryy.png"/><Image alt="Active Developer" height="30" width="30" src="/assets/img/activdev.png"/><Image alt="Verified Bot Developer" height="30" width="30" src="/assets/img/vfbotdev.gif"/><Image alt="Nitro Classic" height="30" width="30" src="/assets/img/nitro-classic.gif"/></div>
            <p className="text-gray-800 dark:text-white text-xl font-medium mt-2">
                <b>Husnain</b>
            </p>
           <p className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-200">Aged 16 years, born in the United Kingdom. Known virtually as a HTML<br/>& JavaScript (frontend/backend) developer. Welcome to my website!</p>
            <div className="rounded-lg p-2 w-full mt-4">
            <Image alt="Early verified bot developer" height="30" width="30" src="/assets/img/developer.png"/>
      <Image 
      alt="Bravery" height="30" width="30" src="/assets/img/bravery.png"
      />
            </div>
            </div>
            </div>
        </div>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6734476030952556"></script>
        </section>
    )
}  
