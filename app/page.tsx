import { PromptList } from "@/components/PromptList";
import { Header } from "../components/Header";
import { dummyPrompts } from "../data/prompts";
import { Stats } from "@/components/Stats";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Stats prompts={dummyPrompts} />
      <PromptList prompts={dummyPrompts} />
    </div>
  );
}
