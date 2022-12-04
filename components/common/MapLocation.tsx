import React from 'react'

function MapLocation({ lat, long }: any) {
  return (
    <div className="google-map-code">
      <iframe
        src={`https://maps.google.com/maps?q=${lat},${long}&hl=es;z=14&output=embed`}
        width="100%"
        height="450"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen={true}
        aria-hidden="false"
        tabIndex={0}
      ></iframe>
    </div>
  )
}

export default MapLocation