
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
                  <li>
                  {/* eslint-disable-next-line */}
                    <a href="https://www.linkedin.com/in/hector-bastidas-aldana" target="_blank" className="icon solid style2">
                      <svg width="50%" height="50%" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      
                        <title>linkedin [#161]</title>
                        <desc>Created with Sketch.</desc>
                        <defs>

                        </defs>
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Dribbble-Light-Preview" transform="translate(-180.000000, -7479.000000)" fill="#000000">
                                    <g id="icons" transform="translate(56.000000, 160.000000)">
                                        <path d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z" id="linkedin-[#161]">

                        </path>
                                </g>
                            </g>
                        </g>
                      </svg>
                    </a>
                  </li>
                </ul>
            </section>
          </div>
        </footer>
      </div>
  );
}

export default App;
