import chat from '../images/chat.png'
import '../styles/Conversation.scss'
import { useState } from 'react'    

function Conversation ({user, selected, clicked}){
    return(
        <div className={selected ? "convoContainer selected" : "convoContainer"} onClick={clicked} >
            <img className="convoContainer-img" src={chat} /> 
            <span className="convoContainer-name">{user}</span>
        </div>
    )
}

export default Conversation;