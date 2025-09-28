"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { BsCardImage } from "react-icons/bs";
import { FaFolder } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { GiKitchenTap } from "react-icons/gi";
import { GoCalendar, GoHome } from "react-icons/go";
import { HiVideoCamera } from "react-icons/hi2";
import { MdCreditCard, MdHomeFilled } from "react-icons/md";
import { PiPaintBrushHouseholdThin } from "react-icons/pi";
import { TbSpaceOff } from "react-icons/tb";

const MobileMenuBtn = () => {
	const [showMenu, setShowMenu] = useState(false);
	const menuRef = useRef<HTMLDivElement | null>(null);

	const pathname = usePathname();

	// Close menu when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setShowMenu(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	return (
		<div className="relative flex items-center" ref={menuRef}>
			<div
				className="lg:hidden cursor-pointer"
				onClick={() => setShowMenu(!showMenu)}
			>
				<BiMenu className="w-[28px] h-[28px]" />
			</div>
			{showMenu && (
				<div className="absolute top-[51px] -right-[32px] z-10 flex flex-col gap-[8px] p-[12px] rounded-[8px] bg-white shadow-md text-base-bold w-[190px] lg:hidden">
					<Link
						href="/"
						className="flex items-center md:font-bold gap-[5px] 2xl:gap-[9px] hover:bg-[#fff] dark:hover:bg-slate-700 rounded-[10px] p-[10px]"
					>
						<MdHomeFilled className="w-[24px] h-[17px] font-bold" />
					</Link>
					<Link
						href="/"
						className={`flex items-center md:font-bold gap-[5px] 2xl:gap-[9px] hover:bg-[#fff] dark:hover:bg-slate-700 rounded-[10px] p-[10px] ${
							pathname === "/patients" ? "bg-[#494e50]" : ""
						}`}
					>
						<BsCardImage className="w-[24px] h-[17px] font-bold" />
					</Link>
					<Link
						href="/"
						className="flex items-center md:font-bold gap-[5px] 2xl:gap-[9px] hover:bg-[#fff] dark:hover:bg-slate-700 rounded-[10px] p-[10px]"
					>
						<HiVideoCamera className="w-[15px] h-[17px] font-bold" />
					</Link>
					<Link
						href="/"
						className="flex items-center md:font-bold gap-[5px] 2xl:gap-[9px] hover:bg-[#fff] dark:hover:bg-slate-700 rounded-[10px] p-[10px]"
					>
						<TbSpaceOff className="w-[19px] h-[17px] font-bold transform rotate-180" />
					</Link>
					<Link
						href="/"
						className="flex items-center md:font-bold gap-[5px] 2xl:gap-[9px] hover:bg-[#fff] dark:hover:bg-slate-700 rounded-[10px] p-[10px]"
					>
						<GiKitchenTap className="w-[22px] h-[17px] font-bold transform rotate-315" />
					</Link>
					<Link
						href="/"
						className="flex items-center md:font-bold gap-[5px] 2xl:gap-[9px] hover:bg-[#fff] dark:hover:bg-slate-700 rounded-[10px] p-[10px]"
					>
						<PiPaintBrushHouseholdThin className="w-[22px] h-[17px] font-bold transform rotate-[-44deg]" />
					</Link>
					<Link
						href="/"
						className="flex items-center md:font-bold gap-[5px] 2xl:gap-[9px] hover:bg-[#fff] dark:hover:bg-slate-700 rounded-[10px] p-[10px]"
					>
						<FaFolder className="w-[22px] h-[17px] font-bold" />
					</Link>
				</div>
			)}
		</div>
	);
};

export default MobileMenuBtn;
