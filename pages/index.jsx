import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
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
    <div className=" text-center">
    <center>
    <Image
        height="150" width="150" src="/favicons/circle-avatar.png" alt="avatar"
      />
      </center>
    <br></br>
    <div className="text-lg leading-6 font-medium text-white">{username}</div><br></br>
    <center>
      <Image 
      alt="Early verified bot developer" height="30" width="30" src="/assets/img/developer.png"
      />
    </center>
    </div>
  </div></section>
  <div className="text-center">
  <a className="text-4xl text-slate-300" href="#down-1">
  <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
  </a>
  </div>
  <section id="down-1">
  <div className="min-h-screen py-6 flex flex-col justify-center mx-auto sm:py-12">
  <div className="">
    <div className="h-auto py-20 px-10 w-2/3 bg-gray-900 flex flex-col space-y-5 mx-auto rounded-3xl shadow-xl hover:rotate-1 transition-transform">
    <h2 className=" font-normal tracking-wide text-2xl text-white">User Description</h2>
      <h3 className=" font medium text-white text-x1 tracking-wide">Husnain, who is also known as HussGB or Huss is a British front-end and back-end developer.
      With 3 years of programming experience I know JavaScript/HTML/React (which I am still learning) and more to go. I prefer JetBrains software when it
      comes to programming but I occasionally use Visual Studio Code as it does not eat up my RAM.
      </h3>
</div></div></div></section>

</body>

     </>
        )
}