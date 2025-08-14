export type PageContextType = {
    page: 'dashboard' | 'department' | 'course';
    setPage: (page: 'dashboard' | 'department' | 'course') => void;
};

export type FormType = 'addStaff' | 'addDepartment' | 'myProfile' | 'addCourse' | 'scan' | null;

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
