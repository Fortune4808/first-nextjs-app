'use client';
import { useEffect, useState } from "react";
import { PageProvider, usePage } from "../../../../../components/context/page-context";
import { FormProvider, useFormContext } from "../../../../../components/context/form-context";
import { NavProvider, useSideNav } from "../../../../../components/context/side-nav-context";
import dynamic from "next/dynamic";
import Loader from "../../../../../components/loading/loader";
import Header from "@/app/(auth)/admin/portal/header";
import Session from "./get-side-nav/session";
import Scan from "./get-form/scan";

function ContentBody() {
    const { page } = usePage();

    const MainDashboard = dynamic(() => import("./get-page/main"), {
        loading: () => <Loader />,
    });
    const StaffPage = dynamic(() => import("./get-page/staff"), {
        loading: () => <Loader />,
    });
    const SchoolPage = dynamic(() => import("./get-page/school"), {
        loading: () => <Loader />,
    });

    return (
        <>
            <div className="absolute pl-[90px] top-[70px] h-full w-full">
                <div key={page} className="w-full h-[calc(100%-80px)] flex justify-center overflow-auto scrollbar-hidden animate__animated animate__fadeIn">
                    <div className="w-[99%] h-full pt-[5px]">
                        {page === 'dashboard' && <MainDashboard />}
                        {page === 'staff' && <StaffPage />}
                        {page === 'school' && <SchoolPage />}
                    </div>
                </div>
            </div>
        </>
    );
}

function ContentForm() {
    const { form, handleClose, id } = useFormContext();
    if (!form) return null;

    const AddDepartmentForm = dynamic(() => import("./get-form/add-department"), {
        loading: () => <Loader />,
    });
    const MyProfileForm = dynamic(() => import("./get-form/myprofile"), {
        loading: () => <Loader />,
    });
     const AddNewStaffForm = dynamic(() => import("./get-form/add-staff"), {
        loading: () => <Loader />,
    });

    return (
        <div className="fixed inset-0 z-50 backdrop-blur-sm bg-black/40">
            {form === 'myProfile' && <MyProfileForm id={id ?? ''} onClose={handleClose} />}
            {form === 'addStaff' && <AddNewStaffForm onClose={handleClose}/>}
            {form === 'scan' && <Scan id={id ?? ''} onClose={handleClose} />}
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
                {sideNav === 'session' && <Session />}
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
