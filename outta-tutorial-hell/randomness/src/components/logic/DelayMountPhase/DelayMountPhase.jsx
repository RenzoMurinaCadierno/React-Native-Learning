import useTimeoutGate from "@app-hooks/useTimeoutGate"

export default function DelayMountPhase({ delay, children }) {
  const ready = useTimeoutGate(delay)

  return ready && children
}
