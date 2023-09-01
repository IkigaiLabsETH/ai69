import { ChatWindow } from "@/components/ChatWindow";


export default function Home() {

  return (
    <div>
      <ChatWindow
        endpoint="api/chat"
        emoji="🐻⛓️"
        titleText="GM GM Anon"
        placeholder="I'm a fricking degen tbh! Ask me about berachain!"
        emptyStateComponent={<div>No messages to display.</div>}
      />
  </div>
  );
}
