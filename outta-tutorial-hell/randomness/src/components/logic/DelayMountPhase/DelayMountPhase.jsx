import { useTimeoutGate } from "@app-hooks"

export default function DelayMountPhase({ delay, abortOn, onReady, children }) {
  const ready = useTimeoutGate(delay, { abortOn, onReady })

  return ready && children
}
