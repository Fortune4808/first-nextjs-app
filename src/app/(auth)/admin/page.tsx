import Image from "next/image";
import AuthForm from "./auth";

export default function Admin() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <Image src="/all-images/background-pix/bg1.jpg" alt="" fill
                className="object-cover filter blur-[3px] scale-110 animate__animated animate__fadeIn" priority
            />

            <div className="absolute inset-0 text-white text-4xl">

                <div className="absolute w-[80%] min-h-[200px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-end gap-1 max-w-[1200px] h-custom-screen-ml:w-full h-custom-screen-ml:h-full overflow-visible">
                    <div className="relative w-[50%] min-h-[530px] bg-white/90 rounded flex justify-center">
                        <div className="absolute top-0 left-4 -translate-y-1/2 w-15 rounded-[50%] bg-white animate__animated animate__bounceInDown">
                            <Image src="/all-images/image-pix/icon.png" width={60} height={60} alt="Logo" title="Logo" priority />
                        </div>

                        <div className="w-[80%] mt-10 animate__animated animate__fadeIn">
                            <AuthForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}