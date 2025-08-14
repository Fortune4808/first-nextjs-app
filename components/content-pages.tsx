'use client';
import { useEffect, useState } from "react";
import { PageProvider, usePage } from "./context/page-context";
import { FormProvider, useFormContext } from "./context/form-context";
import { NavProvider, useSideNav } from "./context/side-nav-context";
import Header from "@/app/(auth)/admin/portal/header";
import Main from "./get-page/main";
import Department from "./get-page/department";
import Course from "./get-page/course";
import AddDepartment from "./get-form/add-department";
import MyProfile from "./get-form/myprofile";
import Session from "./get-side-nav/session";
import Scan from "./get-form/scan";

function ContentBody() {
    const { page } = usePage();

    return (
        <>
            <div className="absolute w-[calc(100%-90px)] h-[calc(100%-70px)] right-0 top-[70px] overflow-auto">
                <div className="w-full h-full flex justify-center">
                    <div key={page} className="w-[98%] py-[5px] animate__animated animate__fadeIn">
                        {page === 'dashboard' && <Main />}
                        {page === 'department' && <Department />}
                        {page === 'course' && <Course/>}
                    </div>
                </div>
            </div>
        </>
    );
}

function ContentForm() {
    const { form, handleClose, id } = useFormContext();
    if (!form) return null;

    return (
        <div className="fixed inset-0 z-50 backdrop-blur-sm bg-black/40">
            {form === 'addDepartment' && <AddDepartment onClose={handleClose} />}
            {form === 'myProfile' && <MyProfile id={id ?? ''} onClose={handleClose} />}
            {form === 'scan' && <Scan id={id ?? ''} onClose={handleClose}/>}
        </div>
    );
}

function ContentNav() {
    const { sideNav, handleClose } = useSideNav();
    const [isVisible, setIsVisible] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        if (sideNav) {
            setShouldRender(true);
            setTimeout(() => setIsVisible(true), 10);
        } else {
            setIsVisible(false);
            setTimeout(() => setShouldRender(false), 300);
        }
    }, [sideNav]);

    if (!shouldRender) return null;

    return (
        <div
            className={`fixed w-[calc(100%-90px)] h-[calc(100%-70px)] right-0 top-[70px] z-50 backdrop-blur-sm bg-black/70 
                animate__animated ${isVisible ? 'animate__slideInLeft' : 'animate__slideOutLeft'}`}
            onClick={handleClose}
        >
            <div onClick={(e) => e.stopPropagation()}>
                {sideNav === 'session' && <Session/>}
            </div>
        </div>
    );
}

export default function ContentPages() {
    return (
        <NavProvider>
            <PageProvider>
                <FormProvider>
                    <Header />
                    <ContentBody />
                    <ContentForm />
                    <ContentNav />
                </FormProvider>
            </PageProvider>
        </NavProvider>

    );
}
