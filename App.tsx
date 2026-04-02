import { VoiceAssistant } from "./components/VoiceAssistant";

export default function App() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "#0f172a"
    }}>
      <VoiceAssistant />
    </div>
  );
}
