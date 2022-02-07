import profPic from "./img/profPic.png";
//import bannerPic from "./img/bannerPic.jpg";
import "./MainPage.css";
import ProgBar from "./ProgBar";

function MainPage() {
  return (
    <html>    
    <div className="pageContainer">
      { /* <img src={bannerPic} className="bannerPic" alt="banner pic"></img> */}
      <div className="sectionTop">
        <div className="sectionTopLeft">
          <div className="mainText">
            Hey, I'm Mark...
          </div>
          <div className="infoText">
            ... and welcome to my side of the internet!<hr></hr>
            I'm motivated to create tools and games that help people create, feel, and move forward.
          </div>
          <div className="infoText">
            Stay updated with my latest existential crises on <b><a href="/markside">my blog, Markside</a></b>
            {" "}and with my latest projects and ideas on <b><a href="http://www.youtube.com/markbacon78">YouTube</a></b> (weekly!){" "}
            <i>This site is an ongoing learning endeavor, written with React JS. </i>
          </div>
        </div>
        <img src={profPic} className="profPic" alt="Mark Headshot"></img>
      </div>
      <hr className="sectionBreaker"></hr>
      <div className="sectionBottom">
        <div className="sectionBottomThird sectionBottomThirdSkills">
          <div className="sectionBottomThirdTitle">Notable Skills</div>
          <ul className="sectionBottomThirdList">
            <li className="sectionBottomThirdListItem">Java</li>
            <ProgBar perc={80} text="Quite Knowledgeable"/>
            <li className="sectionBottomThirdListItem">Python</li>
            <ProgBar perc={85} text="Go-to Scripting Language"/>
            <li className="sectionBottomThirdListItem">Video Editing (Premiere Pro)</li>
            <ProgBar perc={95} text="Very Experienced"/>
            <li className="sectionBottomThirdListItem">Typing Speed of 180wpm</li>
            <ProgBar perc={99} text="Sanik Fast"/>
            <li className="sectionBottomThirdListItem">Public Speaking</li>
            <ProgBar perc={90} text="Very Comfortable"/>
            <li className="sectionBottomThirdListItem">Blender 3D</li>
            <ProgBar perc={40} text="Strong Basics"/>
            {/*
              <li className="sectionBottomThirdListItem">Japanese</li>
              <ProgBar perc={20} text="JLPT N5"/>
            */}
          </ul>
        </div>
        
        <div className="sectionBottomThird sectionBottomThirdProjects">
          <div className="sectionBottomThirdTitle">Projects</div>
          <ul className="sectionBottomThirdList">
            <li className="sectionBottomThirdListItem">
              My weekly{" "}
              <a href="http://www.youtube.com/markbacon78">YouTube Videos</a>
            </li>
            <li className="sectionBottomThirdListItem">
              <a href="https://github.com/Dendrobyte/TwitLess">TwitLess</a>
              , a Minimalist Twitter [Angular/PHP]
            </li>
          </ul>
        </div>

        <div className="sectionBottomThird sectionBottomThirdExternal">
          <div className="sectionBottomThirdTitle">External Links</div>
          <ul className="sectionBottomThirdList">
            <li className="sectionBottomThirdListItem">
              For my "real life" credentials, check out my{" "}
              <a href="https://www.linkedin.com/in/mark-bacon-23275616a/">LinkedIn</a> page
            </li>
            <li className="sectionBottomThirdListItem">
              My GitHub is{" "}
              <a href="http://www.github.com/dendrobyte">Dendrobyte</a>
            </li>
            <li className="sectionBottomThirdListItem">
              Follow me on{" "}
              <a href="http://www.twitter.com/Mobkinz78">Twitter</a>
            </li>
            <li className="sectionBottomThirdListItem">
              And perhaps{" "}
              <a href="http://www.instagram.com/markbacon78">Instagram</a>?
            </li>
          </ul>
        </div>
        <p className="hidden">Maybe one day this bit will be responsive...?</p>
      </div>
      
      <hr className="sectionBreaker"></hr>

      <div className="sectionBottom">
        <div className="sectionBottomThirdTitle">Some Old Things</div>
          <ul className="sectionBottomThirdList">
              <li className="sectionBottomThirdListItem">
                For 9 years, I ran a{" "}
                <a href="http://www.redstoneoinkcraft.com/">Minecraft Server</a>
              </li>
          </ul>
      </div>
      
    </div>
    </html>
  );
}

export default MainPage;
