import { ReactNode, useCallback, useEffect, useState } from 'react'

import { createPortal } from 'react-dom'

const usePortal = () => {
  const [rootPopupsNode, setRootPopupsNode] = useState<HTMLElement | null>(null)

  useEffect(() => {
    const node = document.getElementById('root-popups')
    setRootPopupsNode(node)
  }, [])

  const Portal = useCallback(
    ({ children }: { children: ReactNode }) =>
      rootPopupsNode && createPortal(children, rootPopupsNode),
    [rootPopupsNode],
  )

  return Portal
}

export default usePortal
