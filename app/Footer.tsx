"use client";

import Link from "next/link";
import { FaA, FaRegImage, FaVideo } from "react-icons/fa6";
import { LuMicVocal } from "react-icons/lu";
import { GiCigar } from "react-icons/gi";
import { BsFillCreditCard2FrontFill, BsPersonArmsUp } from "react-icons/bs";
import { GrMagic } from "react-icons/gr";

import brain from "@/public/images/brain.png";
import Image from "next/image";
import { BiChevronDown } from "react-icons/bi";

export type FooterItem = {
	id: string | number;
	imgSrc: string;
	alt?: string;
	title: string | React.ReactNode;
	text: string;
	href: string;
};

export type FooterColumn = {
	id: string | number;
	items: FooterItem[];
};

type FooterProps = {
	columns?: FooterColumn[];
};

const iconBgColors = [
	"bg-gradient-to-b from-slate-500 from-50% to-slate-200 to-100%",
	"bg-gradient-to-b from-purple-950 from-50% to-purple-400 to-100%",
	"bg-orange-300",
	"bg-gradient-to-b from-green-950 from-20% to-green-200 to-100%",
	"bg-gradient-to-b from-cyan-500 from-65% to-cyan-100 to-100%",
	"bg-black",
	"bg-gradient-to-b from-gray-700 from-40% to-gray-300 to-100%",
	"bg-transparent border-dashed border-2 border-gray-300 rounded-full",
];

const iconMap: Record<string, React.ReactNode> = {
	a1: <FaRegImage className="w-6 h-6 text-white" />,
	a2: <FaA className="w-6 h-6 text-white" />,
	b1: <FaVideo className="w-6 h-6 text-white " />,
	b2: <LuMicVocal className="w-6 h-6 text-white" fill="currentColor" />,
	c1: (
		<GiCigar
			className="w-6 h-6 text-white transform scale-x-[-1]"
			fill="currentColor"
		/>
	),
	c2: <BsPersonArmsUp className="w-6 h-6 text-white" />,
	d1: <GrMagic className="w-6 h-6 text-white transform rotate-270" />,
	d2: (
		<Image
			src={brain}
			alt="Brain Icon"
			className="w-10 h-10 border-dashed bg-transparent! rounded-full"
		/>
	),
};

const iconBgColorMap: Record<string, number> = {
	a1: 0,
	a2: 1,
	b1: 2,
	b2: 3,
	c1: 4,
	c2: 5,
	d1: 6,
	d2: 7,
};

const defaultColumns: FooterColumn[] = [
	{
		id: 1,
		items: [
			{
				id: "a1",
				imgSrc: "",
				alt: "Icon A1",
				title: (
					<div className="flex items-center gap-[6px]">
						Image{" "}
						<span className="px-2 py-[1px] bg-blue-500 text-white rounded-[24px]">
							New
						</span>
					</div>
				),
				text: "Generate images with custom styles and ideas",
				href: "#",
			},
			{
				id: "a2",
				imgSrc: "",
				alt: "Icon A2",
				title: (
					<div className="flex items-center gap-[6px]">
						Edit{" "}
						<span className="px-2 py-[1px] bg-blue-500 text-white rounded-[24px]">
							New
						</span>
					</div>
				),
				text: "Create images, videos, 3D models, and more with AI",
				href: "#",
			},
		],
	},
	{
		id: 2,
		items: [
			{
				id: "b1",
				imgSrc: "",
				alt: "Icon B1",
				title: "Video",
				text: "Create images, videos, 3D models, and more with AI",
				href: "#",
			},
			{
				id: "b2",
				imgSrc: "",
				alt: "Icon B2",
				title: (
					<div className="flex items-center gap-[6px]">
						Video Lipsync{" "}
						<span className="px-2 py-[1px] bg-blue-500 text-white rounded-[24px]">
							New
						</span>
					</div>
				),
				text: "Create images, videos, 3D models, and more with AI",
				href: "#",
			},
		],
	},
	{
		id: 3,
		items: [
			{
				id: "c1",
				imgSrc: "",
				alt: "Icon C1",
				title: "Realtime",
				text: "Create images, videos, 3D models, and more with AI",
				href: "#",
			},
			{
				id: "c2",
				imgSrc: "",
				alt: "Icon C2",
				title: (
					<div className="flex items-center gap-[6px]">
						Motion Transfer{" "}
						<span className="px-2 py-[1px] bg-blue-500 text-white rounded-[24px]">
							New
						</span>
					</div>
				),
				text: "Create images, videos, 3D models, and more with AI",
				href: "#",
			},
		],
	},
	{
		id: 4,
		items: [
			{
				id: "d1",
				imgSrc: "",
				alt: "Icon D1",
				title: (
					<div className="flex items-center gap-[6px]">
						Enhancer{" "}
						<span className="px-2 py-[1px] bg-blue-500 text-white rounded-[24px]">
							New
						</span>
					</div>
				),
				text: "Create images, videos, 3D models, and more with AI",
				href: "#",
			},
			{
				id: "d2",
				imgSrc: "",
				alt: "Icon",
				title: "Train",
				text: "Create images, videos, 3D models, and more with AI",
				href: "#",
			},
		],
	},
];

export default function Footer({ columns = defaultColumns }: FooterProps) {
	return (
		<footer className="bg-transparent w-full">
			<div className="max-w-screen mx-auto">
				<div className="flex items-center justify-between mb-4">
					<h3 className="font-normal">Generate</h3>
					<div className="flex items-center">
						<BiChevronDown className="w-5 h-5 text-blue-600" />
						<span className="text-xs text-blue-700">Show all</span>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-6 zsm:gap-8">
					{columns.map((col) => (
						<div key={col.id}>
							<div className="space-y-4">
								{col.items.map((item) => (
									<div key={item.id}>
										<div className="flex flex-1 items-center gap-3 sm:gap-4 p-2 rounded-md">
											{/* icon to the left with background color */}
											<div
												className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-md ${
													iconBgColors[iconBgColorMap[item.id as string] ?? 0]
												}`}
											>
												{iconMap[item.id as string] ?? null}
											</div>

											{/* text in the center */}
											<div className="flex-1 min-w-0">
												<p className="text-sm font-medium truncate">
													{item.title}
												</p>
												<p className="text-xs sm:text-sm text-gray-700 break-words">
													{item.text}
												</p>
											</div>

											{/* open button to the right */}
											<div className="flex-shrink-0 ml-2 sm:ml-4">
												<Link
													href={item.href}
													className="inline-flex items-center px-3 sm:px-4 py-1.5 border border-transparent rounded-[20px] text-xs sm:text-[16px] font-medium bg-gray-100 hover:bg-gray-300 dark:text-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
													target="_blank"
													rel="noopener noreferrer"
													title={`Open ${item.title}`}
												>
													Open
												</Link>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
				<div className="flex items-center justify-between mt-[28px]">
					<h3 className="font-normal">Gallery</h3>
					<div className="flex items-center gap-3">
						<div className="flex items-center gap-1">
							<BsFillCreditCard2FrontFill className="w-5 h-5 transform rotate-[180deg] scale-x-[-1]" />
							<span className="text-xs">Legal</span>
						</div>
						<div className="flex items-center gap-1">
							<BsFillCreditCard2FrontFill className="w-5 h-5 transform rotate-[180deg] scale-x-[-1]" />
							<span className="text-xs">Pricing</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
