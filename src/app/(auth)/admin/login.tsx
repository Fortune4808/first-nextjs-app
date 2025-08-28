import { useState } from "react";
import InputField from "../../../../components/ui/input";
import Button from "../../../../components/ui/button";
import { FaCheckDouble } from 'react-icons/fa';
import { FaSpinner } from "react-icons/fa";

export default function LoginForm({ onResetClick }: { onResetClick: () => void }){
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