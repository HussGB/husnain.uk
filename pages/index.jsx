import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faEnvelope, faTerminal } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
const username = <h1>Husnain</h1>;

export default function IndexPage() {
  const [open, setOpen] = useState(true)

  const cancelButtonRef = useRef(null)

  return (
      <>
<body>
  <section id="top"><div className="back" >
    <br></br>
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
    
  </div></section><br></br><br></br><br></br><br></br>
  <div className="text-center">
  <a className="text-4xl text-slate-300" href="#down-1">
  <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
  </a>
  </div><br></br>

  
  <section id="down-1">
  <center>

  <div className="bg-dark-new flex max-w-md shadow-lg rounded-lg overflow-hidden">
    <div className="w-1/3 bg-cover bg-landscape"><br></br><br></br>
    <Image
      style={{textAlign:"center"}}
      alt="RAF Air Cadet" height="100" width="100" src="/assets/img/rafatc.png"
      />
    </div>
    <div className="w-2/3 p-4">
        <h1 className="font-bold text-2xl text-gray-400 dark:text-gray-100">
            RAF Air Cadet
        </h1>
        <p className="mt-2 text-gray-500 text-sm">
        Recently joined RAF Air Cadets.. I think I&apos;m on a trial-period for now, why don&apos;t you join in the mean-time?
        </p>
        <div className="flex item-center mt-2">
        </div>
        <div className="flex item-center justify-between mt-3">
            <a href="https://www.raf.mod.uk/aircadets/"><button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                Learn More
            </button></a>
        </div>
    </div>
</div>

  <div className="flex flex-row flex item-center justify-center">     
<div className="bg-dark flex max-w-md shadow-lg rounded-lg overflow-hidden">
    <div className="w-1/3 bg-cover bg-landscape"><br></br><br></br>
    <Image
      style={{textAlign:"center"}}
      alt="Early verified bot developer" height="100" width="100" src="/assets/img/developer.png"
      />
    </div>
    <div className="w-2/3 p-4">
        <h1 className="font-bold text-2xl text-gray-400 dark:text-gray-100">
            Verified Bot Developer
        </h1>
        <p className="mt-2 text-gray-600 text-sm">
            This badge represents Discord bot developers who&#x27;ve reached over 80+ servers in succession for their bots.
        </p>
        <div className="flex item-center mt-2">
        </div>
        <div className="flex item-center justify-between mt-3">
            <a href="https://top.gg/bot/582307283120291840"><button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                View Verified Discord Bot
            </button></a>
        </div>
    </div>
</div>
&nbsp;&nbsp;&nbsp;&nbsp;
<div className="bg-dark flex max-w-md shadow-lg rounded-lg overflow-hidden">
    <div className="w-1/3 bg-cover bg-landscape"><br></br><br></br>
    <Image
      style={{textAlign:"center"}}
      alt="Arctic Code Vault Contributor" height="100" width="100" src="/assets/img/ArcticCodeVaultContributor.png"
      />
    </div>
    <div className="w-2/3 p-4">
        <h1 className="font-bold text-2xl text-gray-400 dark:text-gray-100">
          Arctic Code Vault Contributor
        </h1>
        <p className="mt-2 text-gray-600 text-sm">
        &quot;Preserving open source software for future generations&quot; by GitHub
        </p>
        <div className="flex item-center mt-2">
        </div>
        <div className="flex item-center justify-between mt-3">
            <a href="https://archiveprogram.github.com/"><button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                Visit the Archive Program
            </button></a>
        </div>
    </div>
</div>
</div>
  </center>
  </section>


  <section id="down-2">
  <center>
  <div className="flex flex-row flex item-center justify-center">     
<div className="bg-dark flex max-w-md shadow-lg rounded-lg overflow-hidden">
    <div className="w-1/3 bg-cover bg-landscape"><br></br><br></br>
    <Image
      style={{textAlign:"center"}}
      alt="Early verified bot developer" height="100" width="100" src="/assets/img/WMPCadets.png"
      />
    </div>
    <div className="w-2/3 p-4">
        <h1 className="font-bold text-2xl text-gray-400 dark:text-gray-100">
            WMP Cadets
        </h1>
        <p className="mt-2 text-gray-600 text-sm">
          Currently enrolled into the cadets scheme, learning new skills on a weekly! As-well as participating positively in the community.
        </p>
        <div className="flex item-center mt-2">
        </div>
        <div className="flex item-center justify-between mt-3">
            <a href="https://vpc.police.uk/"><button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                Visit Volunteer Police Cadets Website
            </button></a>
        </div>
    </div>
</div>
&nbsp;&nbsp;&nbsp;&nbsp;
<div className="bg-dark flex max-w-md shadow-lg rounded-lg overflow-hidden">
    <div className="w-1/3 bg-cover bg-landscape"><br></br><br></br>
    <Image
      style={{textAlign:"center"}}
      alt="GitHub Developer Logo" height="100" width="100" src="/assets/img/GitHubDeveloper.jpeg"
      />
    </div>
    <div className="w-2/3 p-4">
        <h1 className="font-bold text-2xl text-gray-400 dark:text-gray-100">
          GitHub Developer
        </h1>
        <p className="mt-2 text-gray-600 text-sm">
        Enrolled into the GitHub Developer Program, allowing my application to integrate with their API.
        </p>
        <div className="flex item-center mt-2">
        </div>
        <div className="flex item-center justify-between mt-3">
            <a href="https://developer.github.com/program/"><button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                View GitHub Developer Program
            </button></a>
        </div>
    </div>
</div>
</div>
  </center>
  </section>

</body>

     </>
        )
}