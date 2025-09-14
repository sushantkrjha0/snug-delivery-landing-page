import { Aboutbanner, Bg, CarouselPlugin, Footbar, Navbar, Partners, Team, Testimonial } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Snug Soft Furnishings",
    description: "Learn about Snug's journey in soft furnishing excellence. Founded in 2014, we specialize in custom curtains, blinds, wallpapers, and upholstery solutions in Bangalore.",
};

export default function about() {
    return (
        <div className="wrapper">
            <Navbar />
            <Aboutbanner />
            <Team />
            <Bg />
            <Partners />
            <CarouselPlugin />
            <Footbar />
        </div>
    );
}