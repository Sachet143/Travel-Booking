import { useRouter } from 'next/router';
import React from 'react'

function HotelPage() {
  const router = useRouter();
  const { uuid } = router.query;


  return (
    <div>{uuid}</div>
  )
}

export default HotelPage