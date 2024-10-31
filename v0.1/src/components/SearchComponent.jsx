'use client';
import { Input } from "./ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem } from "./ui/select";
import { Button } from "./ui/button";
import { useState } from "react";

const SearchComponent = ({ onSearch }) => {
    const [location, setLocation] = useState('');
    const [bedrooms, setBedrooms] = useState('');
    const [type, setType] = useState('');

    const handleSearch = () => {
        onSearch({ location, bedrooms, type });
    };

    return (
        <div className="bg-white p-4 rounded shadow space-y-4">
            <Input
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <Input
                type="number"
                placeholder="Bedrooms"
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
            />
            <Select onValueChange={setType}>
                <SelectTrigger placeholder="Type of House" />
                <SelectContent>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="townhouse">Townhouse</SelectItem>
                </SelectContent>
            </Select>
            <Button onClick={handleSearch} className="bg-indigo-500 text-white w-full">
                Search
            </Button>
        </div>
    );
};

export default SearchComponent;
