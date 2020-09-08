import React, {useEffect} from "react"

export default function RoomWebSocket(props){
    useEffect(()=>{
        props.getRoom
    },[])
}