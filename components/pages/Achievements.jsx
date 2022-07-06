import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown, faUserPlus, faQuestionCircle, faRobot } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

export default function AchievementsPage() {
    return (
        <>
            <section id="section-2">
                   <br></br>
                   <br></br>
                   <br></br>
                    <div className="mx-12 bg-zinc-900 rounded-xl mt-8 p-6 h-[65%] md:min-w-full lg:min-w-full">
                        <center>
                        <p className="text-4xl text-slate-200 font-bold m-2">
                            <u><FontAwesomeIcon className="mr-6" icon={faUserPlus}></FontAwesomeIcon>
                            Achievements</u>
                        </p>
                        </center><br></br>           
                  
                  
                  <div className="row">

                 
                  <div className="column">
                    <div className="col-xs-12 col-sm-6">
                      <div className="certificate-item clearfix">
                        <div className="certi-logo">
                        <Image
      style={{textAlign:"center"}}
      alt="RAF Air Cadet" height="100" width="100" src="/assets/img/rafatc.png"
      />
                        </div>
                        
                        <div className="certi-content">
                          <div className="certi-title">
                            <h4>RAF Air Cadets</h4>
                          </div>
                          <div className="certi-id">
                            <span> <a href="https://www.raf.mod.uk/aircadets/"><button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                Learn More
            </button></a></span>
                          </div>
                          <div className="certi-date">
                            <span>13 June 2022</span>
                          </div>
                          <div className="certi-company">
                            <span>Company: N/A</span>
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
      alt="Early verified bot developer" height="100" width="100" src="/assets/img/developer.png"
      />
                        </div>
                        
                        <div className="certi-content">
                          <div className="certi-title">
                            <h4>Verified Bot Developer</h4>
                          </div>
                          <div className="certi-id">
                            <span> <a href="https://support.discord.com/hc/en-us/articles/1500006788922-Bot-Verification-FAQ-for-Parents-Legal-Guardians-and-Other-Sponsors"><button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                Learn More
            </button></a></span>
                          </div>
                          <div className="certi-date">
                            <span>4 June 2020</span>
                          </div>
                          <div className="certi-company">
                            <span>Issued by: Discord</span>
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
      alt="Arctic Code Vault Contributor" height="100" width="100" src="/assets/img/ArcticCodeVaultContributor.png"
      />
                        </div>
                        
                        <div className="certi-content">
                          <div className="certi-title">
                            <h4>Code Vault Contributor</h4>
                          </div>
                          <div className="certi-id">
                            <span> <a href="https://www.raf.mod.uk/aircadets/"><button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                Learn More
            </button></a></span>
                          </div>
                          <div className="certi-date">
                            <span>Somewhere in 2019</span>
                          </div>
                          <div className="certi-company">
                            <span>Issued by: GitHub</span>
                          </div>
                        </div>
                      </div>
                    </div>
                   </div>
                   
                   </div>
                    
                    <center>
                        <p className="text-4xl text-slate-200 font-bold m-2">
                            <u><FontAwesomeIcon className="mr-6" icon={faRobot}></FontAwesomeIcon>
                            Discord Bots</u>
                        </p>
                        </center><br></br> 

                    <div className="row">

                 
<div className="column">
  <div className="col-xs-12 col-sm-6">
    <div className="certificate-item clearfix">
      <div className="certi-logo">
      <Image
style={{textAlign:"center"}}
alt="IBF" height="100" width="100" src="/assets/img/idlebeefarm.png"
/>
      </div>
      
      <div className="certi-content">
        <div className="certi-title">
          <h4>Idle Bee Farm</h4>
        </div>
        <div className="certi-id">
          <span> <a href="https://discord.com/oauth2/authorize?client_id=582307283120291840&scope=bot&permissions=8"><button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
Add Bot
</button></a></span>
        </div>
        <div className="certi-date">
          <span>Discord Verified</span>
        </div>
        <div className="certi-company">
          <span>Development: Plasmatic</span>
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
alt="Fleco" height="100" width="100" src="/assets/img/fleco.png"
/>
      </div>
      
      <div className="certi-content">
        <div className="certi-title">
          <h4>Fleco</h4>
        </div>
        <div className="certi-id">
          <span> <a href="https://discord.com/oauth2/authorize?client_id=545980805294587905&scope=bot&permissions=909208671"><button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
Add Bot
</button></a></span>
        </div>
        <div className="certi-date">
          <span>Unfortunately not verified <b>yet</b></span>
        </div>
        <div className="certi-company">
          <span>Development: HussGB, Triassic</span>
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
alt="Flux" height="100" width="100" src="/assets/img/flux.png"
/>
      </div>
      
      <div className="certi-content">
        <div className="certi-title">
          <h4>Flux</h4>
        </div>
        <div className="certi-id">
          <span> <a href="https://top.gg/bot/467356714312663071"><button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
Learn More
</button></a></span>
        </div>
        <div className="certi-date">
          <span>Sadly archived in 2019</span>
        </div>
        <div className="certi-company">
          <span>Development: HussGB, Triassic</span>
        </div>
      </div>
    </div>
  </div>
 </div>

  
  </div> 
                    </div>
          </section><br></br><br></br>
        </>
    )
}