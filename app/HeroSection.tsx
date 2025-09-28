"use client";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { leftSlides, rightSlides } from "@/lib/images";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const HeroSection = () => {
	return (
		<div className="w-screen ml-[64px] mr-[16px] mb-8">
			<div className="grid grid-cols-1 lg:grid-cols-11 gap-[32px] items-center">
				{/* Left Image Carousel */}
				<div className="lg:col-span-6 w-ful pr-10 lg:pr-0 lg:pl-2">
					<div className="relative flex flex-col w-full items-center">
						<Swiper
							modules={[Pagination, Autoplay]}
							pagination={{
								clickable: true,
								type: "bullets",
								el: ".custom-pagination",
							}}
							spaceBetween={20}
							slidesPerView={1}
							loop={true}
							className="h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] w-full rounded-[20px]"
							speed={600}
							autoplay={{ delay: 3000, disableOnInteraction: false }}
						>
							{leftSlides.map(({ src, alt }, idx) => (
								<SwiperSlide key={idx} className="bg-gray-200 dark:bg-gray-800">
									<Image
										src={src}
										alt={alt}
										width={800}
										height={500}
										className="w-full h-full object-center object-cover"
										priority={idx === 0}
									/>
								</SwiperSlide>
							))}
						</Swiper>
						<div className="custom-pagination mt-3 h-[32px] flex justify-end w-full space-x-2 mr-2 lg:mr-0"></div>
					</div>
				</div>

				{/* Right Image Carousel */}
				<div className="lg:col-span-5 w-full pr-10 2xl:pr-0">
					<div className="relative flex flex-col w-full items-center">
						<Swiper
							modules={[Navigation]}
							navigation={{
								nextEl: ".custom-swiper-button-next",
								prevEl: ".custom-swiper-button-prev",
							}}
							spaceBetween={20}
							slidesPerView={1}
							loop={true}
							className="h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] w-full rounded-tl-[20px] rounded-bl-[20px]"
						>
							{rightSlides.map((slide, index) => (
								<SwiperSlide
									key={index}
									className="bg-gray-200 dark:bg-gray-800"
								>
									<Image
										src={slide.src}
										alt={slide.alt}
										width={800}
										height={500}
										className="w-full h-full object-cover"
									/>
								</SwiperSlide>
							))}
						</Swiper>
						<div className="flex justify-end w-full mt-2 pr-8 h-[32px] gap-2">
							<button className="custom-swiper-button-prev px-4 py-2 bg-gray-200 rounded hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600">
								<FaChevronLeft />
							</button>
							<button className="custom-swiper-button-next px-4 py-2 bg-gray-200 rounded hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600">
								<FaChevronRight />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
