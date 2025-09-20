// "use client";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import ImageCarouselLeft from "./LeftImageCarousel";
import ImageCarouselRight from "./RightImageCarousel";
export default function Home() {
	return (
		<div className="min-h-screen w-full max-w-[1600px] flex flex-col items-center justify-center mx-auto bg-white dark:bg-black text-black dark:text-white transition-all duration-200">
			<div className="max-w-3xl text-center top-0">
				{/* <h1 className="text-4xl font-bold mb-4">Hello World!</h1> */}

				<div className="space-x-16 flex items-center justify-between">
					<Button className="">Button 1</Button>
					<Button className="" variant="secondary">
						Button 2
					</Button>
					<ThemeToggle />
				</div>
			</div>
			<section className="py-12 w-full mx-auto">
				<div className="container w-full flex items-center justify-between flex-col lg:flex-row gap-[40px] mx-auto">
					<div className="left w-[2/3]">
						<ImageCarouselLeft />
					</div>
					<div className="right w-[1/3]">
						<ImageCarouselRight />
					</div>
				</div>
			</section>
		</div>
	);
}
