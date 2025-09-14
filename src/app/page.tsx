import { About, Banner, CarouselPlugin, Detail, Footbar, Navbar, Partners, Service, Testimonial, Textbar } from "@/components";

export default function Home() {
  return (
    <div className="wrapper">
      <Navbar />
      <Banner />
      <Textbar
        texts={["At Snug, we create more than just furnishings - we craft cozy corners and comfortable spaces that make your house feel truly like home."]}
        bgColor="bg-white"
      />
      <Detail />
      <Service />
      <About />
      <Partners />
      {/* <Testimonial /> */}
      <CarouselPlugin />
      <Footbar />
    </div>
  );
}