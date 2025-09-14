import { Bg, ContactForm, Footbar, Navbar } from "@/components";


export default function contactUs() {
    return (
        <div className="wrapper">
            <Navbar />
            <ContactForm tagLine="Contact Us" />
            <Bg />
            <Footbar />
        </div>
    );
}