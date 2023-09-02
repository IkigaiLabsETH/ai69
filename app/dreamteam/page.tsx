import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
        <li className="text-l">
          👇
          <span className="ml-2" >
            Try asking e.g. <code>Are you available to chat?</code> below!
          </span>
        </li>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chatgpt"
      emptyStateComponent={InfoCard}
      placeholder="GM! Ask me about my passion!"
      titleText="Dream Team"
      emoji="🐻"
      showIntermediateStepsToggle={false}
    ></ChatWindow>
    
  );
}
