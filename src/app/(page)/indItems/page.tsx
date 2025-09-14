import { CarouselPlugin, Footbar, Navbar, ProductDetail, QNSimg, Testimonial } from "@/components";
import { Suspense } from "react";

export default function indItems() {
    return (
        <div className="wrapper">
            <Navbar />
            <Suspense fallback={<div className="flex justify-center py-8"><div className="text-lg">Loading...</div></div>}>
                <ProductDetail />
            </Suspense>
            {/* <Testimonial /> */}
            <CarouselPlugin />
            <QNSimg 
                img={"i"}
            />
            <Footbar />
        </div>
    );
}