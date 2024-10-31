import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => (
    <nav className="bg-indigo-600 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Dwelify</h1>
            <div className="space-x-4">
                {["Home", "Rent", "Buy", "Add Listing", "Invest", "Manage Rentals"].map((item) => (
                    <Button key={item} variant="link" asChild>
                        <Link href={`/${item.toLowerCase().replace(" ", "-")}`}>{item}</Link>
                    </Button>
                ))}
            </div>
        </div>
    </nav>
);

export default Navbar;
