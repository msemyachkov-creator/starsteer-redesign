import { Header } from "@/components/header/header"

export default function App() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-background text-foreground flex flex-col">
      <Header />
      {/* Main content area placeholder */}
      <div className="flex-1 flex items-center justify-center bg-[var(--surface-2)]">
        <p className="ss-general text-[var(--text-tertiary)]">
          Content area
        </p>
      </div>
    </div>
  )
}
