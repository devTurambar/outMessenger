import Conversation from './Conversation'

const History = () => {
    const contacts = ["Maria Inês", "João Matos", "Inês Barbosa", "Leonor Rodrigues"];
    return(
        <div className="historyContainer">
                {contacts.map(c => {
                return (
                    <div>
                        <Conversation user={c} key ={c}/>
                        <hr className="hrHistory"></hr> 
                    </div>
                )
            })}
        </div>
    )
}

export default History;