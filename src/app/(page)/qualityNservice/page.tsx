import { Footbar, Navbar, QNSdetail, QNSimg, Textbar } from "@/components";

export default function qualityNservice() {
    return (
        <div className="wrapper">
            <Navbar />
            <QNSdetail />
            <Textbar 
                texts={[
                    "Like a warm cup of tea on a cozy morning, our soft furnishings bring comfort and joy to your home. We pour our hearts into creating curtains, blinds, wallpapers, and upholstery that make you feel right at home, using the finest materials and most caring craftsmanship."
                ]}
                bgColor="bg-[#E5E4DF]"
            />
            <QNSimg 
                img={"q"}
            />
            <Footbar />
        </div>
    );
}