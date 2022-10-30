import Conversation from './Conversation'
import '../styles/History.scss'
import { useState } from 'react'

const History = ({contacts, passToParent, changeChat}) => {
    
    const contactsArr = [];
    contacts.map(c => {
        contactsArr.push({
            contact:c,
            selected:false
        });
    })
    const [generalState, setGeneralState] = useState(contactsArr);

    const handleClick = (u) => {
        const newArr = contactsArr.map((c,j) => {
            if(u == c.contact){
                return {
                    ...c,
                    selected: true
                }
            }else{
                return {
                    ...c,
                    selected: false
                }
            }
        })
        setGeneralState(newArr);
    }
    return(
        <div className="history-container">
                {generalState.map((c,i) => {
                return (
                    <div className="history-container-convo">
                        <Conversation user={c.contact} selected={c.selected} key ={c.contact} clicked={
                            () => {handleClick(c.contact);{changeChat(c.contact)}}
                        }/> 
                    </div>
                )
            })}
        </div>
    )
}

export default History;