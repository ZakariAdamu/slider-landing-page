"use client";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
	const { theme, setTheme } = useTheme();

	return (
		<div>
			<Button
				variant="outline"
				size="icon"
				className="rounded-full cursor-pointer p-2 border border-gray-200 dark:border-gray-800 bg-transparent relative w-10 h-10 overflow-hidden"
				onClick={() => setTheme(theme === "light" ? "dark" : "light")}
			>
				<FaSun className="text-2xl absolute size-4 rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
				<FaMoon className="text-2xl absolute size-4 rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
			</Button>
		</div>
	);
};

export default ThemeToggle;
