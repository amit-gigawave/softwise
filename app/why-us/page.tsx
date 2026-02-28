import { WhyUs as WhyUsSection } from "@/components/WhyUs";
import { Contact } from "@/components/Contact";
import ChipBg from "@/components/ChipBg";

export default function WhyUs() {
    return (
        <main className="min-h-screen relative text-white pt-20 md:pt-24">
            {/* <ChipBg /> */}
            <WhyUsSection />
            <Contact />
        </main>
    );
}
