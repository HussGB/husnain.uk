import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faEnvelope, faTerminal } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
const username = <h1>HussGB</h1>;

export default function IndexPage() {
  const [open, setOpen] = useState(true)

  const cancelButtonRef = useRef(null)

  return (
      <>
      <Transition.Root show={open} >
        <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-black rounded-lg text-left overflow shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    503
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-white">
                        Site Maintenance
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Site maintenance mode is active, you may face instabilities with components of this webpage.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-black px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                      type="button"
                      className="w-full inline-flex justify-center sm:align-middle rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={ () => setOpen(false)}
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>

      </Transition.Root>
<body>
  <section id="top"><div className="back" >
    <br></br>
    <br></br>
    <br></br>
    <br></br>

<center>
    <div className="shadow-lg rounded-2xl w-80 bg-white dark:bg-gray-800">
    <Image height="150" width="400" alt="profilebg" src="/assets/img/bg-img1.jpg" className="rounded-t-lg h-28 w-full mb-4"/>
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
                    Contacts
                    <span className="text-black dark:text-white font-bold">
                        54
                    </span>
                </p>
                <p className="flex flex-col">
                   Archived Projects
                    <span className="text-black dark:text-white font-bold">
                        82
                    </span>
                </p>
                <p className="flex flex-col">
                    Projects
                    <span className="text-black dark:text-white font-bold">
                        86
                    </span>
                </p>
            </div>
        </div>
    </div>
</div>
</center>
    
  </div></section><br></br><br></br><br></br>
  <div className="text-center">
  <a className="text-4xl text-slate-300" href="#down-1">
  <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
  </a>
  </div><br></br>

  
  <section id="down-1">
  <center>
    
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


  </center>
  </section>

</body>

     </>
        )
}