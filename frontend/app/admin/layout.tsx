import { AdminAuthProvider } from "@/context/AdminAuthContext";

export const metadata = { title: "Aether Admin" };

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminAuthProvider>
      {children}
    </AdminAuthProvider>
  );
}