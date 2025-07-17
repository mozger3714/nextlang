import { nextStart } from 'next/dist/cli/next-start.js'

const PORT = process.env.PORT || Math.floor(Math.random() * 500) + 35100

nextStart(['--port', PORT.toString(), '--hostname', '0.0.0.0']).catch((err) => {
  console.error('Failed to start:', err)
  process.exit(1)
})
