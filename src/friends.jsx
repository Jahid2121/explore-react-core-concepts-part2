import { useEffect, useState } from 'react'
import './friends.css'

export default function Friends(){

    const [friends, setFriends] = useState([])

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    }, [])

    return (

        <div className='box'>
            <h3>Friends: {}</h3>
            {
                friends.map(friend => <Friends friend={friend}/>)
            }
        

        </div>
    )
}