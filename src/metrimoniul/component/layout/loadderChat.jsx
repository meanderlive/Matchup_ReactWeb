import React from 'react'
import { MutatingDots } from 'react-loader-spinner'

const LoaderChat = (Lodder) => {
    const loaderStyles = {
        margin: "auto",
        position: "fixed",
        top: "50%",
        left: "60%",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
    };
    return (
        <div className=''>
            <MutatingDots
                visible={true}
                height="100"
                width="100"
                color="#f24570"
                secondaryColor="#FCD9E2"
                radius="12.5"
                ariaLabel="mutating-dots-loading"
                wrapperStyle={loaderStyles}
                wrapperClass=""
            />
        </div>
    )
}

export default LoaderChat;