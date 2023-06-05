import React from 'react'
import { useNavigate } from 'react-router-dom'

function ErrorPage() {
    const navigate = useNavigate()
    return (
        <div className='h-screen p-20 flex align-middle justify-center font-bold text-3xl flex-col'>
            <div>
                <div className='text-center p-5'>404 Page not found</div>
                <div className='text-center p-5'>
                    <button className='py-2 px-4 bg-[#ffd814] rounded-2xl' onClick={() => navigate("/")}>Go back</button>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage