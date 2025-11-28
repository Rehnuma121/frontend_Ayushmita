import React from "react";
import Container from "../components/Container";

// Treatment Components
import HeroTreatmentSection from "../components/Treatment/HeroTreatmentSection";
import TreatmentCategorySidebar from "../components/Treatment/TreatmentCategorySidebar";
import TreatmentDescription from "../components/Treatment/TreatmentDescription";
import MedicalTourism from "../components/MedicalTourism";
import Header from "../components/Header";
import Footer from "../components/Footer";

const TreatmentPage = () => {
    return (
        <>
            <Header />

            <main className="">
                <HeroTreatmentSection />

                <section className="py-12">
                    <Container>
                        <TreatmentCategorySidebar />
                    </Container>
                </section>

                {/* Description Section */}
                <TreatmentDescription />

                {/* Medical Tourism Section */}
                <MedicalTourism />
            </main>
            <Footer />
        </>
    );
};

export default TreatmentPage;
