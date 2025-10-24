import { ImageResponse } from 'next/og'
 
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'
 
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: '#003366',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '6px',
          fontFamily: 'Arial, sans-serif',
          fontWeight: 'bold',
        }}
      >
        <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="48" height="48" rx="8" fill="#003366"/>
          <path d="M10 12 L10 36 L13 36 L13 26 L18 36 L22 36 L16 24 L22 12 L18 12 L13 20 L13 12 Z" fill="white"/>
          <rect x="24" y="12" width="3" height="24" fill="white"/>
          <path d="M29 12 L29 15 L33 15 L33 36 L36 36 L36 15 L40 15 L40 12 Z" fill="white"/>
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}

