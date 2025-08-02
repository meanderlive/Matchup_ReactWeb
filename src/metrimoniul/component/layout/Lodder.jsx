import React from 'react'
import { BallTriangle, Hearts, InfinitySpin, RotatingLines } from 'react-loader-spinner'
import HeaderFour from './HeaderFour'
import FooterFour from './footer'

const Lodder = (Lodder) => {
    const loaderStyles = {
        margin: "auto",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
    };
    return (
        <div>
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#f24570"
                ariaLabel="ball-triangle-loading"
                wrapperStyle={loaderStyles}
                wrapperClass=""
                visible={true}
            />
        </div>
    )
}

export default Lodder;