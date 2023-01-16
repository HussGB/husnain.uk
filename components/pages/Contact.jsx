import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown, faUserPlus, faQuestionCircle, faRobot, faUserCircle, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { faWpforms } from '@fortawesome/free-brands-svg-icons';

export default function ContactPage() {
    return (
        <>
            <section id="section-2">
                   <br></br>
                   <br></br>
                   <br></br>
                    <div className="mx-12 bg-zinc-900 rounded-xl mt-8 p-6 h-[65%] md:min-w-full lg:min-w-full whitebruv">
                        <center>
                        <p className="text-4xl text-slate-200 font-bold m-2">
                        <FontAwesomeIcon className="mr-6" icon={faWpforms}></FontAwesomeIcon>Contact
                        </p>
                        </center><br></br>     
                   <FontAwesomeIcon className="mr-6" icon={faMailBulk}/> Email: <a href="mailto:one@hussgb.dev">one@hussgb.dev</a>
               

                    </div>                    <center><div className="whitebruv">Copyright ©️ Husnain 2023. All rights reserved. Made & Developed by Husnain.</div></center>
          </section>
        </>
    )
}