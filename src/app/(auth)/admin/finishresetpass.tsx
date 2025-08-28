import { useState } from "react";
import InputField from "../../../../components/ui/input";
import Button from "../../../../components/ui/button";
import { FaCheckDouble } from 'react-icons/fa';
import { FaSpinner } from "react-icons/fa";

export default function FinishResetFormForm({ staffId, backToLogin }: { staffId: string; backToLogin: () => void }){
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