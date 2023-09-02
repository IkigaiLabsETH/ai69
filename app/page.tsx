import { ChatWindow } from "@/components/ChatWindow";


export default function Home() {

  return (
    <div>
      <ChatWindow
        endpoint="api/chat/"
        emoji="🐻⛓️"
        titleText="GM GM Degen"
        placeholder="I'm a fricking degen tbh! Ask me about berachain!"
        emptyStateComponent={<div style={{ color: "white" }}>Berachain may or may not launch thoon.</div>}
      />
  </div>
  );
}
