import { Card, CardHeader, CardContent } from "./ui/card";
import Image from "next/image";

const ListingCard = ({ listing }) => (
    <Card className="border rounded-lg overflow-hidden shadow">
        <CardHeader>
            <Image src={listing.image} alt={listing.title} width={500} height={300} className="w-full object-cover" />
        </CardHeader>
        <CardContent>
            <h2 className="text-lg font-semibold">{listing.title}</h2>
            <p>{listing.location}</p>
            <p>{listing.price} USD</p>
            <p>{listing.bedrooms} Bedrooms</p>
            <p>{listing.type}</p>
        </CardContent>
    </Card>
);

export default ListingCard;
