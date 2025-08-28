import { useState } from "react";
import InputField from "../../../../components/ui/input";
import Button from "../../../../components/ui/button";
import { FaCheckDouble } from 'react-icons/fa';
import { FaSpinner } from "react-icons/fa";

export default function ResetPassForm({ onBackClick, onFinishReset }: { onBackClick: () => void; onFinishReset: (id: string) => void; }){
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