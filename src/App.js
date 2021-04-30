import profPic from "./profPic.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profPic} className="profPic" alt="Mark Headshot"></img>
        <p>Hi there!</p>
        <p className="infoText">
          My name's Mark. I'll be putting this site together over the summer and
          have <b>zero interest in anyone offering site building jobs.</b>
          <br></br>Not sure who's got their eyes peeled on WHOIS or whatever,
          but please stop emailing me.
        </p>
        <div class="projContainer">
          <p className="projects">
            While you're here, feel free to check out some of my projects!
          </p>
          <ul>
            <li>
              You can find me on GitHub at{" "}
              <a href="http://www.github.com/dendrobyte">Dendrobyte</a>
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

export default App;
