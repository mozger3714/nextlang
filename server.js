import { nextStart } from 'next/dist/cli/next-start.js'

nextStart([
  '--port',
  process.env.PORT || '35569',
  '--hostname',
  '0.0.0.0',
]).catch((err) => {
  console.error('Failed to start:', err)
  process.exit(1)
})
