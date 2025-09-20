"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { rightSlides } from "@/lib/images";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
const RightImageCarousel = () => {
	return (
		<div className="relative flex flex-col items-center">
			<Swiper
				modules={[Navigation, Autoplay]}
				navigation={{
					nextEl: ".custom-swiper-button-next",
					prevEl: ".custom-swiper-button-prev",
				}}
				spaceBetween={30}
				slidesPerView={1}
				loop={true}
				className="h-[500px] w-[540px] rounded-lg"
			>
				{rightSlides.map((slide, index) => (
					<SwiperSlide
						key={index}
						className="flex h-full w-full items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-lg"
					>
						<Image
							src={slide.src}
							alt={slide.alt}
							width={500}
							height={300}
							className="block w-full h-full object-cover"
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<div className="flex justify-end w-full mt-4 gap-2">
				<button className="custom-swiper-button-prev px-4 py-2 bg-gray-200 rounded hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600">
					<FaChevronLeft />
				</button>
				<button className="custom-swiper-button-next px-4 py-2 bg-gray-200 rounded hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600">
					<FaChevronRight />
				</button>
			</div>
		</div>
	);
};

export default RightImageCarousel;
