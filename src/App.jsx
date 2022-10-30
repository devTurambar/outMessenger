import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import Messages from "./components/Messages";
import MessageInput from "./components/MessageInput";

import "./App.scss";
import History from "./components/History";
import Chat from "./components/Chat";

function App() {
  const contacts = [
    "Maria Inês",
    "João Matos",
    "Inês Barbosa",
    "Leonor Rodrigues",
  ];
  const socketArr = contacts.map((a, i) => {
    return null;
  });

  const [socket, setSocket] = useState(null);
  const [activeState, setActiveState] = useState("");

  if (socket === null) console.log("Null");

  useEffect(() => {
    console.log("socket eh " + socket);
    const newSocket = io(`http://${window.location.hostname}:3000`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  const passToParent = (arg) => {
    console.log("arg eh " + arg);
    return arg;
  };

  const changeChat = () => {

  }

  return (
    <div className="App">
      <header className="app-header">React Chat</header>
      <div className="appContainer">
        <div className="content">
          <History contacts={contacts} passToParent={passToParent} key="h" changeChat={(c) => setActiveState(c) }/>
          {socket ? (
            <div className="chat-container">
              <Messages socket={socket} key="c" />
              <MessageInput socket={socket} key="d" />
              {contacts.map((c) => {
                return activeState === c ? c : null;
              })}
            </div>
          ) : (
            <div>Not Connected</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
