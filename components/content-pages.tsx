'use client';
import { PageProvider, usePage } from "./context/page-context";
import { FormProvider, useFormContext } from "./context/form-context";
import Header from "@/app/(auth)/admin/portal/header";
import Main from "./get-page/main";
import Department from "./get-page/department";
import AddDepartment from "./get-form/add-department";
import MyProfile from "./get-form/myprofile";

function ContentBody() {
    const { page } = usePage();

    return (
        <>
            <main className="absolute w-[calc(100%-90px)] h-[calc(100%-70px)] right-0 top-[70px] overflow-auto">
                <div className="w-full h-full flex justify-center">
                    <div key={page} className="w-[98%] py-[5px] animate__animated animate__fadeIn">
                        {page === 'dashboard' && <Main />}
                        {page === 'department' && <Department />}
                    </div>
                </div>
            </main>
        </>
    );
}

function ContentForm() {
    const { form, handleClose } = useFormContext();
    if (!form) return null;

    return (
        <div className="fixed inset-0 z-50 backdrop-blur-sm bg-black/40">
            {form==='addDepartment' && <AddDepartment onClose={handleClose}/>}
            {form==='myProfile' && <MyProfile onClose={handleClose}/>}
        </div>
    );
}

export default function ContentPages() {
    return (
        <PageProvider>
            <FormProvider>
                <Header />
                <ContentBody />
                <ContentForm />
            </FormProvider>
        </PageProvider>
    );
}
