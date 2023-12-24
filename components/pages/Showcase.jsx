import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown, faUserPlus, faQuestionCircle, faRobot, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

export default function ShowcasePage() {
    return (
        <>
            <section id="section-2">
                   <br></br>
                   <br></br>
                   <br></br>
                    <div className="mx-12 bg-zinc-900 rounded-xl mt-8 p-6 h-[65%] md:min-w-full lg:min-w-full">
                        <center>
                        <p className="text-4xl text-slate-200 font-bold m-2">
                        <FontAwesomeIcon className="mr-6" icon={faUserCircle}></FontAwesomeIcon>Highlights
                        </p>
                        </center><br></br>     
                  
                 <div className="row">

                   <div className="column">
                    <div className="col-xs-12 col-sm-6">
                      <div className="certificate-item clearfix">
                        <div className="certi-logo">
                        <Image
      style={{textAlign:"center"}}
      alt="Idley" height="100" width="100" src="/assets/img/idley.png"
      />
                        </div>
                        
                        <div className="certi-content">
                          <div className="certi-title">
                            <h4>Idley Host</h4>
                          </div>
                          <div className="certi-id">
                            <span> <a href="https://www.idley.net/"><button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                Visit Idley
            </button></a></span>
                          </div>
                          <div className="certi-date">
                            <span><b>2019 - PRESENT</b></span>
                          </div>
                          <div className="certi-company">
                            <span>Company: Eluxum Limited.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                   </div>

                   &nbsp;&nbsp;&nbsp;&nbsp;
                   
                   <div className="column">
                    <div className="col-xs-12 col-sm-6">
                      <div className="certificate-item clearfix">
                        <div className="certi-logo">
                        <Image
      style={{textAlign:"center"}}
      alt="Eggactyl" height="100" width="100" src="/assets/img/egg-icon.png"
      />
                        </div>
                        
                        <div className="certi-content">
                          <div className="certi-title">
                            <h4>Eggactyl</h4>
                          </div>
                          <div className="certi-id">
                            <span> <a href="https://eggactyl.cloud"><button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                Learn More
            </button></a></span>
                          </div>
                          <div className="certi-date">
                            <span>Unknown Date</span>
                          </div>
                          <div className="certi-company">
                            <span>Owned by myself!</span>
                          </div>
                        </div>
                      </div>
                    </div>
                   </div>

                   &nbsp;&nbsp;&nbsp;&nbsp;

                   <div className="column">
                    <div className="col-xs-12 col-sm-6">
                      <div className="certificate-item clearfix">
                        <div className="certi-logo">
                        <Image
      style={{textAlign:"center"}}
      alt="Birmingham Mail" height="100" width="100" src="/assets/img/bhammail.png"
      />
                        </div>
                        
                        <div className="certi-content">
                          <div className="certi-title">
                            <h4>Birmingham Mail</h4>
                          </div>
                          <div className="certi-id">
                            <span> <a href="#"><button disabled className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                Learn More
            </button></a></span>
                          </div>
                          <div className="certi-date">
                            <span>November 2021</span>
                          </div>
                          <div className="certi-company">
                            <span>Birmingham Live, WMP Cadets</span>
                          </div>
                        </div>
                      </div>
                    </div>
                   </div>
                   
                   </div>
                

                    </div>
          </section>
        </>
    )
}