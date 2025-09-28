"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdHomeFilled } from "react-icons/md";
import MobileMenuBtn from "./MobileMenuBtn";
import ThemeToggle from "./ThemeToggle";
import { BsCardImage } from "react-icons/bs";
import { HiVideoCamera } from "react-icons/hi2";
import { GiKitchenTap } from "react-icons/gi";
import { PiPaintBrushHouseholdThin } from "react-icons/pi";
import { FaBell, FaFolder, FaImage } from "react-icons/fa";
import { BiChevronDown, BiSupport } from "react-icons/bi";
import Logo from "@/public/images/krea-ai-logo.webp";
import { GrMagic } from "react-icons/gr";

const navLinks = [
	{
		href: "/home",
		icon: <MdHomeFilled className="w-6 h-5 font-bold" />,
		label: "Home",
	},
	{
		href: "/",
		icon: <BsCardImage className="w-6 h-5 font-bold" />,
		label: "Photos",
	},
	{
		href: "#",
		icon: <HiVideoCamera className="w-4 h-5 font-bold" />,
		label: "Videos",
	},
	{
		href: "#",
		icon: <GrMagic className="w-5 h-5 font-bold transform rotate-270" />,
		label: "Space",
	},
	{
		href: "#",
		icon: <GiKitchenTap className="w-6 h-5 font-bold rotate-[315deg]" />,
		label: "Kitchen",
	},
	{
		href: "#",
		icon: (
			<PiPaintBrushHouseholdThin className="w-6 h-5 font-bold rotate-[-44deg]" />
		),
		label: "Paint",
	},
	{
		href: "#",
		icon: <FaFolder className="w-6 h-5 font-bold" />,
		label: "Folder",
	},
];

const Navbar = () => {
	const pathname = usePathname();

	return (
		<header className="navbar w-full mt-1 h-[60px] lg:h-[72px] bg-transparent rounded-[70px] py-1 px-4 zlg:px-8 flex items-center justify-between">
			<nav className="flex items-center justify-between w-full">
				<div className="flex items-center justify-start gap-1 cursor-pointer">
					{/* Logo */}
					<Link
						href="/"
						className="flex items-center mr-1 h-8 lg:h-12 min-w-[45px]"
					>
						<Image src={Logo} alt="logo" width={45} height={45} priority />
					</Link>

					<div className="left-radial flex items-center opacity-50 w-7 h-7 rounded-full p-2"></div>
					<span className="text-xs text-gray-500">benevolenttimebot</span>
					<BiChevronDown className="w-4 h-4 text-gray-500" />
				</div>

				{/* Desktop Nav Links (middle icon links) */}
				<div className="hidden lg:flex flex-1 justify-center 2xl:mr-[-12px]">
					<div className="hidden lg:flex gap-2 xl:gap-3 bg-gray-100 dark:bg-gray-900 rounded-xl items-center font-semibold text-xs p-1 py-1">
						{navLinks.map((link, idx) => (
							<Link
								key={idx}
								href={link.href}
								className={`flex items-center gap-2 hover:bg-white dark:hover:bg-slate-700 rounded-lg px-3 py-2 transition-colors duration-150 ${
									pathname === `${link.href}` && link.label === `${link.label}`
										? "bg-[#fff] rounded-lg dark:bg-slate-700 px-3 py-2"
										: ""
								}`}
								aria-label={link.label}
							>
								{link.icon}
							</Link>
						))}
					</div>
				</div>

				{/* Right Section */}
				<div className="flex items-center lg:mr-[-24px] gap-2">
					{/* Desktop User Links */}
					<div className="hidden lg:flex items-center gap-2 bg-gray-50 dark:bg-gray-900 rounded-xl px-2 h-full 2xl:mr-[-18px]">
						<Link
							href=""
							className={`flex items-center gap-2 hover:bg-white dark:hover:bg-slate-700 rounded-lg px-3 py-2 transition-colors duration-150 ${
								pathname === "" ? "bg-[#fff] dark:bg-slate-700" : ""
							}`}
						>
							<FaImage className="w-6 h-5 font-bold scale-x-[-1]" />
							<span>Gallery</span>
						</Link>
						<div className="flex items-center gap-2 hover:bg-white dark:hover:bg-slate-700 rounded-lg px-3 py-2 cursor-pointer transition-colors duration-150">
							<BiSupport className="w-4 h-5 font-bold" />
							<span>Support</span>
						</div>
					</div>

					{/* Mobile Menu and theme toggler */}
					<div className="flex items-center gap-2">
						<MobileMenuBtn />
						<div className="flex items-center gap-1 ml-1 hover:bg-white dark:hover:bg-slate-700 rounded-lg p-2">
							<FaBell className="w-4 h-4 font-bold" />
						</div>
						<ThemeToggle />
					</div>
					<div className="right-radial flex items-center w-7 h-7 rounded-full opacity-75 p-2 cursor-pointer"></div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
