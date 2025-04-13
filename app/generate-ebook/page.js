"use client";

// import EbookDownloader from "@/features/generation/downloader";
import GenerationForm from "@/features/generation/form";
import EbookPage from "@/features/generation/downloader" 
// import dynamic from "next/dynamic";

// const EbookDownloader = dynamic(
//   () => import("@/features/generation/downloader"),
//   {
//     ssr: false,
//   }
// );

export default function GenerateEbookForm() {
  return (
    <div className="flex items-center justify-center size-full min-h-screen py-4 flex-col gap-8">
      <GenerationForm />
      {/* <EbookDownloader /> */}
      <EbookPage />
    </div>
  );
}
