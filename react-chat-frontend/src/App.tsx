import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div>
      <header className="main-chat-header">
        <p className="main-chat-title">Chat bots 2.0</p>
      </header>

      <div className="container">
        <div className="main-chat">
          <div className="left-column">
            <div className="bot-info">
              <div className="bot-avatar">
                <img src="/1.png" alt="" />
                <div className="bot-details">
                  <div className="bot-title">Reverse bot</div>

                  <div className="bot-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </div>
                </div>
              </div>
            </div>
            <div className="chat-box">
              <div className="chat-message">
                <div className="chat-user">
                  <div className="chat-username">Reverse bot</div>
                  <div className="chat-content">Hello world!</div>
                </div>
              </div>
              <div className="chat-message-left">
                <div className="chat-user">
                  <div className="chat-username">Username</div>
                  <div className="chat-content">Hello robot</div>
                </div>
              </div>
            </div>
            <div className="chat-input">
              <input
                type="text"
                className="input-field"
                placeholder="Start chatting!"
              />
              <button className="send-button">Send message</button>
            </div>
          </div>
          <div className="right-column">
            <div className="online-bots">
              <div className="online-bot">
                <div className="online-status"></div>
                <div className="online-bot-info">
                  <div className="online-bot-name">Echo bot</div>
                  <div className="online-bot-description">
                    Fusce dapibus, tellus ac cursus commodo, tort...
                  </div>
                </div>
              </div>
              <div className="online-bot">
                <div className="online-status"></div>
                <div className="online-bot-info">
                  <div className="online-bot-name">Reverse bot</div>
                  <div className="online-bot-description">
                    Fusce dapibus, tellus ac cursus commodo, tort...
                  </div>
                </div>
              </div>
              <div className="online-bot">
                <div className="online-status"></div>
                <div className="online-bot-info">
                  <div className="online-bot-name">Spam bot</div>
                  <div className="online-bot-description">
                    Fusce dapibus, tellus ac cursus commodo, tort...
                  </div>
                </div>
              </div>
              <div className="online-bot">
                <div className="online-status"></div>
                <div className="online-bot-info">
                  <div className="online-bot-name">Ignore bot</div>
                  <div className="online-bot-description">
                    Fusce dapibus, tellus ac cursus commodo, tort...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

{
  /* /* <div classNameName="App">
    //   <div>
    //     <header classNameName="header">
    //       <h3>My React Chat</h3>
    //     </header>
    //   </div>

    //   <div>
    //     <section>
    //       <h4>Message Area</h4>
    //     </section>
    //   </div>


    //   <div> 
    //     <p>
    //       send message input
    //     </p>
    //   </div>

    //   <div classNameName="sidebar"> 
    //     <p>sidebar toggle</p>

    //     <div>onli   ne</div>

    //     <div>all</div>


    //     <div>input search</div>
    //   </div>

   
    // </div>  */
}
