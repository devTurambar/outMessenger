import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import Messages from "./components/Messages";
import MessageInput from "./components/MessageInput";

import "./App.scss";
import History from "./components/History";
import Chat from "./components/Chat";

function App() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:3000`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  return (
    <div className="App">
      <header className="app-header">React Chat</header>
      {socket ? (
        <div className="chat-container">
          <Messages socket={socket} />
          <MessageInput socket={socket} />
        </div>
      ) : (
        <div>Not Connected</div>
      )}

      <div className="appContainer">
        <div className="content">
          <History />
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default App;
