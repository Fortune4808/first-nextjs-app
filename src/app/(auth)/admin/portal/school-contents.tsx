'use client';
import { useEffect, useState } from "react";
import { PageProvider, usePage } from "../../../../../components/context/page-context";
import { FormProvider, useFormContext } from "../../../../../components/context/form-context";
import dynamic from "next/dynamic";
import Loader from "../../../../../components/loading/loader";
import SchoolHeader from "./school-header";
import { SchoolProps } from "./get-form/schooldashboard";

const SchoolMainDashboard = dynamic(() => import("./get-page/schoolmain"), {
    loading: () => <Loader />,
});
const StaffPage = dynamic(() => import("./get-page/staff"), {
    loading: () => <Loader />,
});
const AddNewStaffForm = dynamic(() => import("./get-form/add-staff"), {
    loading: () => <Loader />,
});

function ContentBody() {
    const { page } = usePage();

    return (
        <div className="pl-[90px] pt-[55px] h-[calc(100%-30px)] flex justify-center overflow-auto">
            <div key={page} className="w-[97%] h-full pt-[5px] animate__animated animate__fadeIn">
                {page === 'dashboard' && <SchoolMainDashboard />}
                {page === 'staff' && <StaffPage />}
            </div>
        </div>
    );
}

function ContentForm() {
    const { form, handleClose, id } = useFormContext();
    if (!form) return null;

    return (
        <div className="fixed inset-0 z-50 backdrop-blur-sm bg-black/40">
            {form === 'addStaff' && <AddNewStaffForm onClose={handleClose} />}
        </div>
    );
}

export default function ContentPages({onClose}: SchoolProps) {
    return (
        <PageProvider>
            <FormProvider>
                <SchoolHeader onClose={onClose}/>
                <ContentBody />
                <ContentForm />
                {/* <ContentNav /> */}
            </FormProvider>
        </PageProvider>

    );
}
