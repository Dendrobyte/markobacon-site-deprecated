import profPic from "./profPic.png";
import "./MainPage.css";

function MainPage() {
  console.log("oh snap, the page has loaded!");
  return (
    <div className="App">
      <header className="App-header">
        <img src={profPic} className="profPic" alt="Mark Headshot"></img>
        <p>Hi there!</p>
        <p className="infoText">
          My name's Mark. I do stuff and things (like the projects you see below!) and attempt to document them in some ways. While you're here, check out <a href ="/markside">my blog!</a> (It's not done yet... but we're getting there...)
        </p>
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
      </header>
    </div>
  );
}

export default MainPage;
