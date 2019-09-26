import React from 'react'

// Helpers
const pad = n => (n < 10 ? `0${n}` : n)
const format = t =>
  `${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(t.getUTCSeconds())}`

export default function Clock({ lastUpdate, light }) {
  return (
    <div>
      <p>{format(new Date(lastUpdate))}</p>
      <p>{`Theme: ${light ? 'light' : ''}`}</p>
    </div>
  )
}
