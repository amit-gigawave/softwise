import { UseCases as UseCasesSection } from "@/components/UseCases";
import { Contact } from "@/components/Contact";

export default function UseCases() {
    return (
        <main className="min-h-screen bg-black text-white pt-24">
            <UseCasesSection />
            <Contact />
        </main>
    );
}
