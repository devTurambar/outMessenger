import chat from '../images/chat.png'
function Conversation ({user}){
    return(
        <div className="convoContainer">
            <img src={chat} /> 
            <span>{user}</span>
        </div>
    )
}

export default Conversation;