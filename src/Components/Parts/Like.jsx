import React, { useState } from 'react'
import { GrLike } from 'react-icons/gr'


export default function Like() {
    const [likes, up_Like] = useState(0)
    const Update = () => {
        up_Like(likes + 1)
    }

    let like = document.getElementById('like')

    return (
        <button className='w-[38px] h-[48px] relative'>
            <div id='like' className='flex justify-center items-center size-[20px] p-1 rounded-[50%] text-[13px] absolute top-0 right-0 bg-amber-500'>{likes}</div>
            <GrLike className='size-[25px]' onClick={Update} />
        </button>
    )
}