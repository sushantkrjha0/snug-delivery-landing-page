import Image from 'next/image'
import React from 'react'

const QNSimg = ({img}:{img:string | null}) => {
    return (
        <div className='h-[556px] overflow-hidden'>
            <Image 
                height= "556"
                width= "1921"
                src = {img === 'i' ? "/img/indItemsTag.jpeg" : "/img/qnsIMG.jpeg"}
                alt='imgQNS'
                style={{ height: "556px", objectFit: "cover", objectPosition: "50%"}}
            />
        </div>
    )
}

export default QNSimg