"use client"
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { databases } from "@/lib/appwriteClient";

const AddListingForm = () => {
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [bedrooms, setBedrooms] = useState('');
    const [type, setType] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await databases.createDocument("[YOUR_DATABASE_ID]", "[YOUR_COLLECTION_ID]", {
            title,
            location,
            price,
            bedrooms,
            type,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
            <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <Input placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
            <Input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
            <Input type="number" placeholder="Bedrooms" value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} />
            <Select onValueChange={setType}>
                <SelectTrigger placeholder="Type of House" />
                <SelectContent>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="townhouse">Townhouse</SelectItem>
                </SelectContent>
            </Select>
            <Button type="submit" className="w-full bg-indigo-500 text-white">
                Add Listing
            </Button>
        </form>
    );
};

export default AddListingForm;
