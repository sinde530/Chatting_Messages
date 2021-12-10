import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Join = () => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    return (
        <div className='join_Container'>
            <div>
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
                className='join_Room'
                type='text'
                onChange={(event) => setRoom(event.target.value)}
            />
            </div>
            <Link
            onClick={(e) => (!name || !room ? e.preventDefault() : null)}
            to={`/chat?name=${name}&room=${room}`}
            >
            <button className='room_Create' type='submit'>
            가입하기
            </button>
            </Link>

        </div>

    )
}

export default Join