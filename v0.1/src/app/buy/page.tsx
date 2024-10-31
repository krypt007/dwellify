"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchComponent from "@/components/SearchComponent";
import ListingCard from "@/components/ListingCard";
import { useState } from "react";
import listings from "../../data/listings.json";

const ListingsPage = () => {
    const [filtered, setFiltered] = useState(listings);

    const handleSearch = (filters) => {
        setFiltered(
            listings.filter((listing) =>
                (!filters.location || listing.location.includes(filters.location)) &&
                (!filters.bedrooms || listing.bedrooms === filters.bedrooms) &&
                (!filters.type || listing.type === filters.type)
            )
        );
    };

    return (
        <div>
            <Navbar />
            <section className="p-4">
                <SearchComponent onSearch={handleSearch} />
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8">
                    {filtered.map((listing) => (
                        <ListingCard key={listing.id} listing={listing} />
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default ListingsPage;
