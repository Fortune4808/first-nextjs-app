import Image from "next/image";
import ContentPages from "../../../../../components/content-pages";

export default function Portal() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <Image
                src="/all-images/background-pix/cover-pix.jpg" alt="" fill
                className="object-cover animate__animated animate__fadeIn" priority
            />
            <div>
                <ContentPages/>
            </div>
        </div>
    );
}