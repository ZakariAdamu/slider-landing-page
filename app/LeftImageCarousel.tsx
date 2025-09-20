"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

import { leftSlides } from "@/lib/images";

const LeftImageCarousel = () => {
	return (
		<div className="relative flex flex-col items-center">
			<Swiper
				modules={[Pagination, Autoplay]}
				pagination={{
					clickable: true,
					type: "bullets",
					el: ".custom-pagination",
				}}
				spaceBetween={30}
				slidesPerView={1}
				loop={true}
				className="h-[500px] w-[1000px] rounded-lg"
				speed={600}
				autoplay={{ delay: 3000, disableOnInteraction: false }}
			>
				{leftSlides.map(({ src, alt }, idx) => (
					<SwiperSlide
						key={idx}
						className="flex items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-lg"
					>
						<Image
							src={src}
							alt={alt}
							width={500}
							height={300}
							className="w-full h-full object-cover"
							priority={idx === 0}
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<div className="custom-pagination mt-2 flex justify-end w-full space-x-2"></div>
		</div>
	);
};

export default LeftImageCarousel;
