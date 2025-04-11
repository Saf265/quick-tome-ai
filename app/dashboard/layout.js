import { AppSidebar } from "@/layout/Sidebar";
// import { Inter } from "next/font/google";

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
// });

export default function DashboardLayout({ children }) {
  return (
    <div className="flex size-full min-h-screen ">
      <AppSidebar />
      <div className="flex-1 p-4 border-red-500 border-4">{children}</div>
    </div>
  );
}
