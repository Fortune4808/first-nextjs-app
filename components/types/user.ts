export type PageContextType = {
    page: 'dashboard' | 'staff' | 'school';
    setPage: (page: 'dashboard' | 'staff' | 'school') => void;
};

export type NavContextType = {
    sideNav: 'session' | undefined;
    setSideNav: (sideNav: 'session' | undefined) => void;
    handleClose: () => void;
};

export type FormType = 'addStaff' | 'schoolDashboard' | 'addDepartment' | 'myProfile' | 'scan' | null;

export type FormContextType = {
    form: FormType;
    id?: string;
    setForm: (form: FormType, id?: string) => void;
    handleClose: () => void;
};

export type Role = {
    roleName: string;
};

export type User = {
    staffId: string;
    firstName: string;
    middleName: string;
    lastName: string;
    emailAddress: string;
    mobileNumber: string;
    role?: Role;
};
