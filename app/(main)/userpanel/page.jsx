'use client'
import { handellogout } from '@/action/authAction';
import CustomButton from '@/components/CustomButton';
import { useRouter } from 'next/navigation';
import React from 'react';

const Posts = () => {
    const router = useRouter()
    return (
        <div className="d-flex flex-column justify-content-center align-items-center h-100">
            <h1 className="my-5">صفحه کاربر</h1>
            <CustomButton className='w-64' onClick={handellogout}>خروج</CustomButton>
        </div>
    );

}

export default Posts;
