'use client';
import { useState } from 'react';
import dynamic from "next/dynamic";
import Loader from '../../../../components/loading/loader';

const LoginForm = dynamic(() => import("./login"), {
    loading: () => <Loader/>,
});
const ResetPassForm = dynamic(() => import("./resetpass"), {
    loading: () => <Loader/>,
});
const FinishResetForm = dynamic(() => import("./finishresetpass"), {
    loading: () => <Loader/>,
});

export default function AuthForm() {
    const [formType, setFormType] = useState<'login' | 'reset' | 'finishReset'>('login');
    const [resetId, setResetId] = useState<string | null>(null);

    return (
        <div key={formType} className="flex flex-col gap-5 animate__animated animate__fadeIn">
            <div>
                <h1 className="text-3xl text-black font-title">QR Code Smart Attendance System{" "}
                    <span className="text-[#585757]">
                        {formType === 'login' && 'Admin Log-in'}
                        {formType === 'reset' && 'Reset Password'}
                        {formType === 'finishReset' && 'Finish Reset Password'}
                    </span>
                </h1>
                <hr className="w-[35%] mt-3 border border-[#025002]" />
            </div>

            {formType === 'login' && <LoginForm onResetClick={() => setFormType('reset')} />}
            {formType === 'reset' && (<ResetPassForm onBackClick={() => setFormType('login')} onFinishReset={(id) => { setResetId(id); setFormType('finishReset'); }} />)}
            {formType === 'finishReset' && resetId && (<FinishResetForm staffId={resetId} backToLogin={() => setFormType('login')}/>)}
        </div>
    );
}
