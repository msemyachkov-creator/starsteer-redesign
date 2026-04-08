export default function App() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-background text-foreground flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="ss-general-strong text-text-primary text-[20px]">
          StarSteer Redesign Concept
        </h1>
        <p className="ss-general text-text-secondary">
          GridInCP+ — Concept 26.3
        </p>
        <div className="flex gap-3 justify-center mt-6">
          <div className="w-3 h-3 rounded-full" style={{ background: 'var(--rogii-azure)' }} />
          <div className="w-3 h-3 rounded-full" style={{ background: 'var(--rogii-orange)' }} />
          <div className="w-3 h-3 rounded-full" style={{ background: 'var(--rogii-candlelight)' }} />
          <div className="w-3 h-3 rounded-full" style={{ background: 'var(--rogii-jungle-green)' }} />
          <div className="w-3 h-3 rounded-full" style={{ background: 'var(--rogii-heliotrope)' }} />
        </div>
      </div>
    </div>
  )
}
