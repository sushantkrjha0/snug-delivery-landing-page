import type { Config } from "tailwindcss";

const backgroundImages = Object.fromEntries(
	Array.from({ length: 21 }, (_, i) => [`br${i + 1}`, `url("/partners/bg-br${i + 1}.jpg")`])
);

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				'rosemartin': ['var(--font-rosemartin)'],
				'neue-regrade': ['var(--font-neue-regrade)'],
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'hero-banner': 'url("/img/banner1.jpeg")',
				'CP1': 'url("/img/customSofa.jpg")',
				'CP2': 'url("/img/tracks/Thumbnail.jpg")',
				'CP3': 'url("/img/wallpaper.jpg")',
				'CP4': 'url("/img/blinds.jpg")',
				'BP1': 'url("/img/SAN_1947r.jpg")',
				'BP2': 'url("/img/SAN_1976r.jpg")',	
				'BP3': 'url("/img/SAN_2010r.jpg")',
				'BP4': 'url("/img/SAN_2047r.jpg")',
				'BP5': 'url("/img/SAN_2100r.jpg")',
				'abtBg': 'url("/SAN_2059r.jpg")',
				'abtpgBg': 'url("/SAN_1934r.jpg")',
				'bgBanner': 'url("/bg.jpg")',
				'founderImg': 'url("/img/photo_6215124540296644171_y.jpg")',
				'ourVisionImg': 'url("/img/SAN_1976r.jpg")',
				'ourMissionImg': 'url("/img/SAN_1947r.jpg")',
				...backgroundImages
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
