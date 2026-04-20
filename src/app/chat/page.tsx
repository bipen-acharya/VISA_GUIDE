import { Suspense } from 'react'
import ChatClient from './ChatClient'

export default function ChatPage() {
  return (
    <Suspense fallback={<div className="flex h-screen items-center justify-center bg-slate-50 text-slate-400 text-sm">Loading…</div>}>
      <ChatClient />
    </Suspense>
  )
}
