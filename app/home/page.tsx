import Footer from "../Footer";
import HeroSection from "../HeroSection";
import Navbar from "../Navbar";

export default function Home() {
	return (
		<div className="fixed inset-0 min-h-screen max-w-screen px-[24px] xl:pl-[32px] flex flex-col items-center bg-white dark:bg-black text-slate-900 dark:text-gray-200 transition-all overflow-y-scroll overflow-x-hidden 2xl:overflow-hidden">
			<Navbar />
			<div className="w-full flex justify-end mr-2 py-4"></div>
			<HeroSection />
			<Footer />
		</div>
	);
}
