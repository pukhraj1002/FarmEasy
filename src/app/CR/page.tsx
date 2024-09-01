import { ImageBox } from "@/components/image-box";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-5 py-24 md:p-24 overflow-x-hidden">
      <div className="text-center mt-16 w-full">
        <h1 className="scroll-m-20 text-3xl md:text-4xl font-extrabold tracking-tight lg:text-5xl">
          <span className="gradient-text">{siteConfig.name}</span> - Crop Recommendation 
        </h1>
        <div className="mt-8 w-full">
          <iframe
            src="https://krashicare.netlify.app"
            className="w-full h-[100vh]" 
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </main>
  );
}
