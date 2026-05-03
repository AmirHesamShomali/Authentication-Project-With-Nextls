'use client'
import { handeluser } from '@/action/authAction';
import SubmitButton from '@/components/SubmitButton';
import React, { useActionState } from 'react';
const Login = () => {
    const [state, formAction, pending] = useActionState(handeluser, { eror: "", success: false })
    return (

        <div className='d-flex justify-content-center align-items-center vh-100 px-2 px-lg-5'>
            <form action={formAction} className='w-100 p-4 rounded-lg border-2 shadow form-gradient-bg' style={{ maxWidth: '500px', color: '#374151' }}>
                {state.eror && (<h1 className='text-danger m-auto'>{state.eror}</h1>)}
                <h1 className='text-center my-4'>فرم ورود</h1>
                <div className='mb-4'>
                    <label htmlFor='phoneInput' className='form-label'>شماره موبایل:</label>
                    <input
                        id='phoneInput'
                        name='phone'
                        type='number'
                        className='form-control rounded-full-custom'
                        style={{ height: '3rem', borderColor: '#9ca3af' }}
                        placeholder='شماره موبایل خود را وارد کنید'
                    />
                    <small className='text-danger d-block'>{state.errors?.phone?.at(0) || ""}</small>
                </div>
                <div className='mb-5'>
                    <label htmlFor='passwordInput' className='form-label'>رمز عبور:</label>
                    <input
                        id='passwordInput'
                        name='password'
                        type='password'
                        className='form-control rounded-full-custom'
                        style={{ height: '3rem', borderColor: '#9ca3af' }}
                        placeholder='رمز عبور خود را وارد کنید'
                    />
                    <small className='text-danger d-block'>{state.errors?.password?.at(0) || ""}</small>

                </div>
                <div className='mb-4'>
                    <div className='form-check form-switch'>
                        <input className='form-check-input' type='checkbox' id='rememberMeSwitch' name='remember' />
                        <label className='form-check-label' htmlFor='rememberMeSwitch'>مرا بخاطر بسپار</label>
                    </div>
                </div>
                <SubmitButton />
            </form>
        </div>

    );
};

export default Login;
