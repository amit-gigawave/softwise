import { Solutions as SolutionsSection } from "@/components/Solutions";
import { UseCases as UseCasesSection } from "@/components/UseCases";
import { Contact } from "@/components/Contact";
import ChipBg from "@/components/ChipBg";

export default function Solutions() {
    return (
        <main className="min-h-screen text-white pt-24 relative">
            <ChipBg />
            <SolutionsSection />
            <UseCasesSection />
            <Contact />
        </main>
    );
}
