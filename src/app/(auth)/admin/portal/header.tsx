'use client';
import Image from "next/image"
import { AiOutlineDashboard } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { LuSchool } from "react-icons/lu";
import { FaBook } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiSpreadsheet } from "react-icons/bi";
import { IoSchool } from "react-icons/io5";
import { usePage } from "../../../../../components/context/page-context";
import { useRef, useState, useEffect } from 'react';
import Button from "../../../../../components/button";
import { IoIosLogOut } from "react-icons/io";
import { useFormContext } from "../../../../../components/context/form-context";
import { useSideNav } from "../../../../../components/context/side-nav-context";
import { User } from "../../../../../components/types/user";
import { capitalizeWords } from "../../../../../components/stringutils";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const avatarRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        if (!isOpen) {
            setShouldRender(true);
            setIsOpen(true);
        } else {
            setIsOpen(false);
            setTimeout(() => setShouldRender(false), 300);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;

            if (dropdownRef.current?.contains(target) || avatarRef.current?.contains(target)) {
                return;
            }

            setIsOpen(false);
            setTimeout(() => setShouldRender(false), 300);
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const { setPage } = usePage();
    const { setForm } = useFormContext();

    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const userData = sessionStorage.getItem('data');
        if (userData) {
            setUser(JSON.parse(userData));
        }
    }, []);

    const fullName = `${user?.firstName} ${user?.middleName} ${user?.lastName}`;

    return (
        <div className="absolute inset-0">
            <header className="fixed w-full min-h-[70px] bg-white shadow flex justify-center z-10">
                <div className="w-[99%] flex items-center">
                    <Image src="/all-images/image-pix/portal-logo.png" width={230} height={60} alt="Logo" title="Logo" priority />

                    <div className="w-full flex items-center justify-between text-[#333]">
                        <nav aria-label="Main Navigation">
                            <ul className="flex text-sm gap-2">
                                <li className="flex items-center gap-2 py-[10px] px-[25px] bg-opacity-30 rounded-[5px] cursor-pointer" title="Dashboard" onClick={() => setPage('dashboard')}>
                                    <AiOutlineDashboard className="text-[var(--primary-color)]" /><span>Dashboard</span>
                                </li>

                                <li className="flex items-center gap-2 py-[10px] px-[25px] bg-opacity-30 rounded-[5px] cursor-pointer" title="My profile" onClick={() => setForm('myProfile')}>
                                    <CgProfile className="text-[var(--primary-color)]" /><span>My profile</span>
                                </li>
                            </ul>
                        </nav>

                        <div className="flex items-center text-[20px]">
                            <div className="flex items-center gap-1 pr-[20px]">
                                <div className="p-[10px] hover:bg-[#F8F8F8] hover:text-[var(--primary-color)] cursor-pointer" title="System Settings">
                                    <IoSettingsOutline />
                                </div>

                                <div className="p-[10px] hover:bg-[#F8F8F8] hover:text-[var(--primary-color)] cursor-pointer relative" title="System Alert">
                                    <IoMdNotificationsOutline className="text-[24px]" />
                                    <span className="absolute top-2 right-2 bg-[#be1d1d] text-white text-[10px] w-[16px] h-[16px] flex items-center justify-center rounded-full">3</span>
                                </div>
                            </div>

                            <div className="flex flex-col px-[20px] text-[12px] border-l-2 border-dotted">
                                <div className="font-bold">{capitalizeWords(fullName)}</div>
                                <div className="text-[var(--primary-color)]">{capitalizeWords(user?.role?.roleName ?? '')}</div>
                            </div>

                            <div ref={avatarRef} className="w-12 rounded-[50%] bg-white cursor-pointer" onClick={toggleDropdown}>
                                <Image src="/all-images/image-pix/icon.png" width={60} height={60} alt="" title="Click To View Profile" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {shouldRender && (
                <div ref={dropdownRef} className={`fixed top-[70px] right-[20px] min-w-[320px] h-[130px] bg-white shadow rounded-[5px] overflow-hidden z-[999999] animate__animated ${isOpen ? 'animate__fadeInRight' : 'animate__fadeOutRight'}`}>
                    <div className="min-w-[320px] flex items-center text-[12px] gap-3 p-[15px]">
                        <div className="w-[90px] h-[100px] bg-black rounded-[5px]">
                            <Image src="/all-images/image-pix/icon.png" width={90} height={100} className="object-cover" alt="" title="Click To View Profile" />
                        </div>

                        <div className="flex flex-col">
                            <span className="font-bold">{capitalizeWords(fullName)}</span>
                            <div>User ID:{" "}<span>{user?.staffId}</span></div>
                            <div>Phone No:{" "}<span>{user?.mobileNumber}</span></div>

                            <div className="flex gap-2">
                                <Button label="Profile" type="submit" className="w-[50%] p-[10px]" icon={<CgProfile />} onClick={() => console.log('Clicked')} title="Login" />
                                <Button label="Log-out" type="submit" className="w-[50%] p-[10px]" icon={<IoIosLogOut />} onClick={() => console.log('Clicked')} title="Login" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <SideNav />
        </div>
    );
}

function SideNav() {
    const { setPage } = usePage();

    return (
        <nav aria-label="Main Navigation" className="w-[90px] h-full bg-white shadow fixed z-5">
            <ul className="flex flex-col pt-[70px] text-sm w-full text-[#333]">
                <li title="Dashboard" className="w-full flex flex-col items-center text-center py-[15px] border-b border-[#DBEBBE] hover:border-l-[2px] border-l-[var(--border-left-color)] hover:bg-[#F8F8F8] hover:text-[var(--primary-color)] cursor-pointer" onClick={() => setPage('dashboard')}>
                    <AiOutlineDashboard className="text-[20px]" />
                    <span>Dashboard</span>
                </li>

                <li title="Staff" className="w-full flex flex-col items-center text-center py-[15px] border-b border-[#DBEBBE] hover:border-l-[2px] border-l-[var(--border-left-color)] hover:bg-[#F8F8F8] hover:text-[var(--primary-color)] cursor-pointer" onClick={() => setPage('staff')}>
                    <FaBook className="text-[20px]" />
                    <span>Staff</span>
                </li>

                <li title="School" className="w-full flex flex-col items-center text-center py-[15px] border-b border-[#DBEBBE] hover:border-l-[2px] border-l-[var(--border-left-color)] hover:bg-[#F8F8F8] hover:text-[var(--primary-color)] cursor-pointer" onClick={() => setPage('school')}>
                    <LuSchool className="text-[20px]" />
                    <span>School</span>
                </li>
            </ul>
        </nav>
    );
}