'use client';
import { useState } from 'react';
import InputField from './input';
import Button from './button';
import { FaCheckDouble } from 'react-icons/fa';
import { FaSpinner } from "react-icons/fa";

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
            {formType === 'reset' && (<ResetForm onBackClick={() => setFormType('login')} onFinishReset={(id) => { setResetId(id); setFormType('finishReset'); }} />)}
            {formType === 'finishReset' && resetId && (<FinishResetForm staffId={resetId} backToLogin={() => setFormType('login')}/>)}
        </div>
    );
}

function LoginForm({ onResetClick }: { onResetClick: () => void }) {
    const [emailAddress, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    async function submitLogin() {
        if (!emailAddress.trim()) {
            alert("Email Address is Required!");
            return
        }

        if (!password.trim()) {
            alert("Passord is Required!");
            return
        }
        setLoading(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/login`, {
                cache: 'no-store',
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-api-key': process.env.NEXT_PUBLIC_API_KEY ?? ''
                },
                body: JSON.stringify({ emailAddress, password })
            });

            const data = await response.json();
            if (!response.ok) {
                alert(data.message);
                return;
            }

            if (data.success) {
                sessionStorage.setItem('accessToken', data.token);
                sessionStorage.setItem('data', JSON.stringify(data.data));
                window.location.href = '/admin/portal';
            } else {
                alert(data.message);
            }

        } catch (error) {
            alert(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <div className="bg-[#EFF7F2] text-[#838F90] text-sm font-bold border-[#A3E5BF] border-[1px] py-[10px] px-[15px] rounded-[5px]">Kindly, provide your{" "}
                <span className="text-[#50A5DF]">EMAIL ADDRESS{" "}</span>to Login
            </div>

            <InputField
                label="Enter Your Email Address"
                value={emailAddress}
                onChange={(e) => setEmail(e.target.value)}
            />

            <InputField
                label="Enter Your Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <Button
                label={loading ? 'AUTHENTICATING...' : 'LOG-IN'}
                type="submit"
                icon={loading ? <FaSpinner className='animate-spin' /> : <FaCheckDouble />}
                onClick={submitLogin}
                title="Login"
                className='p-[20px] w-[50%]'
                disabled={loading}
            />

            <div className="bg-[#F8F1EE] text-[#838F90] text-sm font-bold border-[#F3BEA4] border-[1px] py-[14px] px-[15px] rounded-[5px]">Forget Password?{" "}
                <span className="text-[#50A5DF] cursor-pointer" onClick={onResetClick}>RESET PASSWORD</span>
            </div>
        </>
    );
}

function ResetForm({ onBackClick, onFinishReset }: { onBackClick: () => void; onFinishReset: (id: string) => void; }) {
    const [emailAddress, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    async function resetPassword() {
        if (!emailAddress.trim()) {
            alert("Email Address is Required!");
            return
        }

        setLoading(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/resetPassword`, {
                cache: 'no-store',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'x-api-key': process.env.NEXT_PUBLIC_API_KEY ?? ''
                },
                body: JSON.stringify({ emailAddress })
            });

            const data = await response.json();
            if (!response.ok) {
                alert(data.message);
                return;
            }

            if (data.success) {
                alert(data.message);
                onFinishReset(data.staffId);
            } else {
                alert(data.message);
            }

        } catch (error) {
            alert(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <div className="bg-[#EFF7F2] text-[#838F90] text-sm font-bold border-[#A3E5BF] border-[1px] py-[10px] px-[15px] rounded-[5px]">Kindly, provide your{" "}<span className="text-[#50A5DF]">EMAIL ADDRESS </span>to reset your password</div>
            <InputField
                label="Enter Your Email Address"
                value={emailAddress}
                onChange={(e) => setEmail(e.target.value)}
            />

            <Button
                label={loading ? 'AUTHENTICATING' : 'PROCEED'}
                type="submit"
                icon={loading ? <FaSpinner className='animate-spin' /> : <FaCheckDouble />}
                onClick={resetPassword}
                title="Proceed"
                className='p-[20px] w-[50%]'
            />

            <div className="bg-[#F8F1EE] text-[#838F90] text-sm font-bold border-[#F3BEA4] border-[1px] py-[14px] px-[15px] rounded-[5px]">Existing User?{" "}<span className="text-[#50A5DF] cursor-pointer" onClick={onBackClick}>LOG-IN HERE</span></div>
        </>
    );
}

function FinishResetForm({ staffId, backToLogin }: { staffId: string; backToLogin: () => void }) {
    const [otp, setOtp] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    async function finishResetPassword() {
        if (!otp.trim()) {
            alert("OTP is Required!");
            return
        }
        if (!password.trim()) {
            alert("Password is Required!");
            return
        }
        if (!password_confirmation.trim()) {
            alert("Confirm Password is Required!");
            return
        }

        setLoading(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/finishResetPassword`, {
                cache: 'no-store',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'x-api-key': process.env.NEXT_PUBLIC_API_KEY ?? ''
                },
                body: JSON.stringify({ otp, password, password_confirmation, staffId })
            });

            const data = await response.json();
            if (!response.ok) {
                alert(data.message);
                return;
            }

            if (data.success) {
                alert(data.message);
                backToLogin();
            } else {
                alert(data.message);
            }

        } catch (error) {
            alert(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <div className="bg-[#EFF7F2] text-[#838F90] text-sm font-bold border-[#A3E5BF] border-[1px] py-[10px] px-[15px] rounded-[5px]">Kindly, provide your{" "}<span className="text-[#50A5DF]">EMAIL ADDRESS </span>to reset your password</div>
            <InputField
                label="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
            />
            <InputField
                type="password"
                label="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <InputField
                type="password"
                label="Confirm Password"
                value={password_confirmation}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button
                label={loading ? "PROCESSING" : "PROCEED"}
                type="submit"
                icon={loading ? <FaSpinner className='animate-spin' /> : <FaCheckDouble />}
                onClick={finishResetPassword}
                title="Proceed"
                className='p-[20px] w-[50%]'
            />
        </>
    );
}
