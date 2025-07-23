'use client';
import { useState } from 'react';
import InputField from './input';
import Button from './button';
import { FaCheckDouble } from 'react-icons/fa';

export default function AuthForm() {
    const [formType, setFormType] = useState<'login' | 'reset'>('login');
    const isLogin = formType === 'login';

    return (
        <div key={formType} className="flex flex-col gap-5 animate__animated animate__fadeIn">
            <div>
                <h1 className="text-3xl text-black font-title">QR Code Smart Attendance System{" "}
                    <span className="text-[#585757]">
                        {isLogin ? 'Admin Log-in' : 'Reset Password'}
                    </span>
                </h1>
                <hr className="w-[35%] mt-3 border border-[#025002]" />
            </div>

            {formType === 'login' ? (
                <LoginForm onResetClick={() => setFormType('reset')} />
            ) : (
                <ResetForm onBackClick={() => setFormType('login')} />
            )}
        </div>
    );
}

function LoginForm({ onResetClick }: { onResetClick: () => void }) {
    const [email, setEmail] = useState('');
    const [password, setPassowrd] = useState('');

    return (
        <>
            <div className="bg-[#EFF7F2] text-[#838F90] text-sm font-bold border-[#A3E5BF] border-[1px] py-[10px] px-[15px] rounded-[5px]">Kindly, provide your{" "}
                <span className="text-[#50A5DF]">EMAIL ADDRESS{" "}</span>to Login
            </div>

            <InputField
                id="emailAddress"
                label="Enter Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <InputField
                id="password"
                label="Enter Your Password"
                type="password"
                value={password}
                onChange={(e) => setPassowrd(e.target.value)}
            />

            <Button
                id="submit"
                label="LOG-IN"
                type="submit"
                icon={FaCheckDouble}
                onClick={() => console.log('Clicked')}
                title="Login"
                className='p-[20px] w-[50%]'
            />

            <div className="bg-[#F8F1EE] text-[#838F90] text-sm font-bold border-[#F3BEA4] border-[1px] py-[14px] px-[15px] rounded-[5px]">Forget Password?{" "}
                <span className="text-[#50A5DF] cursor-pointer" onClick={onResetClick}>RESET PASSWORD</span>
            </div>
        </>
    );
}

function ResetForm({ onBackClick }: { onBackClick: () => void }) {
    const [email, setEmail] = useState('');

    return (
        <>
            <div className="bg-[#EFF7F2] text-[#838F90] text-sm font-bold border-[#A3E5BF] border-[1px] py-[10px] px-[15px] rounded-[5px]">Kindly, provide your{" "}<span className="text-[#50A5DF]">EMAIL ADDRESS </span>to reset your password</div>
            <InputField
                id="emailAddress"
                label="Enter Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <Button
                id="submit"
                label="PROCEED"
                type="submit"
                icon={FaCheckDouble}
                onClick={() => console.log('Clicked')}
                title="Proceed"
                className='p-[20px] w-[50%]'
            />

            <div className="bg-[#F8F1EE] text-[#838F90] text-sm font-bold border-[#F3BEA4] border-[1px] py-[14px] px-[15px] rounded-[5px]">Existing User?{" "}<span className="text-[#50A5DF] cursor-pointer" onClick={onBackClick}>LOG-IN HERE</span></div>
        </>
    );
}
