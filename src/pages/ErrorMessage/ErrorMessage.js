import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import background from '../../assets/background/errorbackground.png';

const ErrorMessage = () => {
    const error = useRouteError()
    return (
        <>
            <div style={{
                background: `url(${background})`,
                opacity: '0.8',
                height:'auto'
            }} className='flex flex-col min-h-[700px] justify-center items-center'>
                <h1 className='text-4xl font-bold'>Ops! An Error Ocurred!</h1>
                <br />
                {error && (
                    <div>
                        <p className='text-red-500 font-bold z-40'>{error.statusText || error.message}</p>
                        <p>{error.status}</p>
                        <Link className='font-bold text-black' to='/'>Back to home page</Link>
                    </div>
                )}
            </div>
        </>
    )
}

export default ErrorMessage;