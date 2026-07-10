import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

// testing-library only auto-cleans with globals enabled; do it explicitly.
afterEach(() => {
  cleanup()
})
