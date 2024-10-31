import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AddListingForm from "@/components/AddListingForm";

const AddListingPage = () => (
    <div>
        <Navbar />
        <section className="p-8">
            <h1 className="text-2xl font-bold text-center mb-6">Add a New Listing</h1>
            <AddListingForm />
        </section>
        <Footer />
    </div>
);

export default AddListingPage;
