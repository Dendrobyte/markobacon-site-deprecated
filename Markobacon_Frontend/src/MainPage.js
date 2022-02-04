import profPic from "./img/profPic.png";
import bannerPic from "./img/bannerPic.jpg";
import "./MainPage.css";

function MainPage() {
  return (
    <div className="pageContainer">
      {/* TODO: <img src={bannerPic} className="bannerPic" alt="banner pic"></img> */}
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
            {" "}and with my latest projects and ideas on <b><a href="http://www.youtube.com/markbacon78">YouTube</a></b> (weekly!)
          </div>
        </div>
        <img src={profPic} className="profPic" alt="Mark Headshot"></img>
      </div>
      <hr className="sectionBreaker"></hr>
      <div className="sectionBottom">
        <div className="sectionBottomThird sectionBottomThirdSkills">
          <div className="sectionBottomThirdTitle">Skills</div>
          <ul className="sectionBottomThirdList">
            <li className="sectionBottomThirdListItem">Java</li>
            {/* put in the bar or something */}
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
              <a href="/TwitLess">TwitLess</a>
              , a Minimalist Twitter
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
  );
}

export default MainPage;
