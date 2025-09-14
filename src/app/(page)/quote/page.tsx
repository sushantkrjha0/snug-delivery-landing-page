import { Bg, ContactForm, Footbar, Navbar } from "@/components";


export default function contactUs() {
    return (
        <div className="wrapper">
            <Navbar />
            <Bg />
            <ContactForm tagLine="Get a Quote" />
            <Footbar />
        </div>
    );
}