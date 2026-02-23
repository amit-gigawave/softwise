import { AgenticAI as AgenticAISection } from "@/components/AgenticAI";
import { Contact } from "@/components/Contact";
import ChipBg from "@/components/ChipBg";

export default function AgenticAIPage() {
    return (
        <main className="min-h-screen text-white pt-24 relative">
            <ChipBg />
            <AgenticAISection />
            <Contact />
        </main>
    );
}
