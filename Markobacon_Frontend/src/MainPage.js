import profPic from "./profPic.png";
import "./MainPage.css";

function MainPage() {
  return (
    <div className="pageContainer">
      <div className="sectionTop">
        <div className="sectionTopLeft">
          <div className="mainText">
            Hey, I'm Mark...
          </div>
          <div className="infoText">
            ... and welcome to my side of the internet!
            My name's Mark. I do stuff and things (like the projects you see below!) and attempt to document them in some ways. While you're here, check out <a href ="/markside">my blog!</a> (It's not done yet... but we're getting there...)
          </div>
        </div>
        <img src={profPic} className="profPic" alt="Mark Headshot"></img>
      </div>
      <div className="sectionBottom">
        <div className="sectionBottomThird">
          <div className="sectionBottomThirdTitle">Skills</div>
          <ul className="sectionBottomThirdList">
            <li className="sectionBottomThirdListItem">Java</li>
            {/* put in the bar or something */}
          </ul>
        </div>
        
        <div className="sectionBottomThird">
          <div className="sectionBottomThirdTitle">Projects</div>
          <ul className="sectionBottomThirdList">
            <li className="sectionBottomThirdListItem">Java</li>
          </ul>
        </div>

      </div>
      
      

















      <div className="projContainer">
        <p className="projects">
          While you're here, feel free to check out some of my projects!
        </p>
        <ul>
          <li>
            You can find me on GitHub at{" "}
            <a href="http://www.github.com/dendrobyte">Dendrobyte</a>
          </li>
          <li>
            For my "real life" academic and work credentials, check out my{" "}
            <a href="https://www.linkedin.com/in/mark-bacon-23275616a/">LinkedIn</a> page
          </li>
          <li>
            I make weekly{" "}
            <a href="http://www.youtube.com/markbacon78">YouTube Videos</a> on
            topics such as productivity, typing, and more!
          </li>
          <li>
            After 9 years, I still run a{" "}
            <a href="http://www.redstoneoinkcraft.com/">Minecraft Server</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainPage;
