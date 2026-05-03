'use client'
import React from 'react';
import { useFormStatus } from 'react-dom';

const SubmitButton = () => {
    const {pending}=useFormStatus();
    return (
        <div className='mt-5'>
            <button type='submit' className='btn login-button w-100 btn-warning' disabled={pending}>{pending ? (<>صبر کنید....</>) : (<>ورود</>)}</button>
        </div>
    );
}

export default SubmitButton;
