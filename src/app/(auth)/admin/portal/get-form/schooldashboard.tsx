import Image from "next/image";
import ContentPages from "../school-contents";

export type SchoolProps = {
    onClose?: () => void;
    id?: string;
};

export default function SchoolDashboard({ id, onClose }: SchoolProps) {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <Image
                src="/all-images/background-pix/cover-pix.jpg" alt="" fill
                className="object-cover animate__animated animate__fadeIn" priority
            />
            <ContentPages onClose={onClose}/>
        </div>
    );
}