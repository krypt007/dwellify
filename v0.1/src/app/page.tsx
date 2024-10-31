import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ListingCard from "@/components/ListingCard";
import { Button } from "@/components/ui/button";
import listings from "../data/listings.json";

const HomePage = () => (
    <div>
        <Navbar />
        <section className="bg-indigo-600 text-white py-20 text-center">
            <h1 className="text-5xl font-bold">Welcome to Dwelify</h1>
            <p className="mt-4 text-lg">Find your dream home or perfect rental with ease.</p>
            <div className="mt-6">
                <Button variant="default" className="mr-4 bg-white text-indigo-600">
                    <a href="/rent">Browse Rentals</a>
                </Button>
                <Button variant="default" className="bg-white text-indigo-600">
                    <a href="/buy">Browse Homes for Sale</a>
                </Button>
            </div>
        </section>
        <section className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Featured Properties</h2>
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {listings.slice(0, 3).map((listing) => (
                        <ListingCard key={listing.id} listing={listing} />
                    ))}
                </div>
            </div>
        </section>
        <Footer />
    </div>
);

export default HomePage;
