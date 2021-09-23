import profPic from "./profPic.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profPic} className="profPic" alt="Mark Headshot"></img>
        <p>Hi there!</p>
        <p className="infoText">
          My name's Mark. I'm currently wrapping up the Markside blog page and will be making this page look a little more... exciting... as the year wraps up.
        </p>
        <p className="infoText">
          Feel free to check out the <a href="https://github.com/Dendrobyte/markobacon-site">GitHub repository</a> that the site is public on if you want to see how things work and whatnot.
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

export default App;
