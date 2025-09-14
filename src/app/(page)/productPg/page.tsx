import { Footbar, Navbar, ProductList } from "@/components";

export default function productPg() {
    return (
        <div className="wrapper">
            <Navbar />
            <ProductList />
            <Footbar />
        </div>
    );
}