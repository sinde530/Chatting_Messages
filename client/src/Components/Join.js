import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Assets/Join.css'

const Join = () => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    return (
        <div className='join_Container'>
            <div className='join_Title'>
                <h1 className='heading'>Messages WebSite.</h1>
            </div>

            <input
                placeholder='이름'
                className='join_Input'
                type='text'
                onChange={(event) => setName(event.target.value)}
            />
            <div>
            <input
                placeholder='채팅방'
                className='join_Input'
                type='text'
                onChange={(event) => setRoom(event.target.value)}
            />
            </div>
            <Link
            onClick={(e) => (!name || !room ? e.preventDefault() : null)}
            to={`/chat?name=${name}&room=${room}`}
            // to={`/chat?${room}`}
            >
            <button className='room_Create' type='submit'>
            방 만들기
            </button>
            </Link>

        </div>

    )
}

export default Join