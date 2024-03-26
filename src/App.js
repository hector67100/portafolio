
import './App.css';
import Navigations from './navigation/Navigation';
import './assets/css/main.css';
import './assets/css/noscript.css';

function App() {
  return (
      <div id="wrapper">
        <div id="main">
          <div className="inner">
            <header>
							<h1 className="text-center">Portafolio</h1>
              <h2 className="text-center">Hector J. Bastidas Aldana</h2>
						</header>
            <Navigations/>
          </div>
        </div>
        <footer id="footer">
          <div className="inner">
            <section>
              <h2>Contact</h2>
                <ul className="icons">
                  <li><a href="mailto:bastidashector09@gmail.com" className="icon solid style2 fa-envelope"><span className="label">Email</span></a></li>
                </ul>
            </section>
          </div>
        </footer>
      </div>
  );
}

export default App;
