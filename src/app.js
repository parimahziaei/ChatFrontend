import React, {useState, useEffect, useContext} from "react";
import { activeChatAction, userDetailAction } from "./stateManagment/actions";
import {store} from "./stateManagment/store.js"
import {sendTestSocket} from "./stateManagment/socketService.js"


// let App = ()=>{

//     const [varA, setVarA] = useState("")
//     const [varB, setVarB] = useState("")

//     return <div>
//         <input type="number" value={varA} onChange={(e) =>{console.log(e.target.value)
//         setVarA(e.target.value)}
//         } />

//         <input type="number" value={varB} onChange={(e) =>{console.log(e.target.value)
//         setVarB(e.target.value)}
//         } />
//         <Result vA={varA} vB={varB}/>
//     </div>
// };

// const Result = (propes)=>{
//     const[result, setResult] = useState("");

//     return ( <div>
//         <h3>
//             Result:{result}
//         </h3>
//         <button onClick={()=>{
//             console.log(propes);
//             var res = parseFloat(propes.vA)+parseFloat(propes.vB)
//             setResult(res)
//         }}>
//             calculate</button>
//     </div>
//     );
// };
// export default App;


const SimpleMessage = (props) =>
{
    const [name, setName] = useState("")
    const [showMessage, setShowMessage] = useState(false);

    const {dispatch} = useContext(store)

    const onsubmit = (e) => {
        e.preventDefault();
        dispatch({type: userDetailAction, payload:name})
        setShowMessage(true)
    };

    return (
        <>
        {!showMessage ? (     
        <div>
            <h3>
                hello there, plz enter your name
            </h3>

            <form onSubmit={onsubmit}>

                <input value={name} onChange={(e) =>setName(e.target.value)}/>
                <button type="submit">
                    submit
                </button>
              
            </form>
        </div>) :  (<MessageInterface />)
        }
        </>
    );
};

export default SimpleMessage;

const MessageInterface = (props) =>
{
    const [name, setName] = useState("")
    const {state:{userDetail, activeChat}, dispatch} = useContext(store)
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("")
    const [receiver, setReceiver] = useState("")

    useEffect(()=>{
        if (name !== userDetail){
            setName(userDetail)
        };

        if (activeChat)
        {
            setMessages([...messages, activeChat ])
            dispatch({type:activeChatAction, payload:null})
        };
    }, [userDetail, activeChat]);

    const onsubmit = (e) => {
        e.preventDefault();
        let data= {
            sender: name,
            message,
            receiver,

        };

        //setMessages([...messages, data])
        sendTestSocket(data);

    }

    return (    
    <div>
        <h2> hello {name} </h2>
        <form onSubmit={onsubmit}>
            <input aria-valuemin={receiver} placeholder="enter receiver name" onChange={(e)=>setReceiver(e.target.value)}>
                </input>
            <textarea value={message} placeholder="type message" onChange={(e)=>setMessage(e.target.value)}> </textarea>
            <button>
                send
            </button>
          {
            messages.length < 1 ? (<div>No message</div>) : (messages.map((item, index)=>{
                return(
                <div key={index}>
                    <h4>{item.message}</h4>
                    <small>{item.sender}</small>
                </div>);
            }))
          }
        </form>
    
    </div>);

};
 
