import AdminLayoutClient from "./AdminLayoutClient";

export const metadata = {
    title: "Admin Dashboard",
    description: "admin dashboard",
};

export default function Adminlayout({ children }) {
    return (
        <AdminLayoutClient>
            {children}
        </AdminLayoutClient>
    );
}