import React from 'react'
import './partner.scss'
const partner = '/assets/images/partners/partner1.png';
import Image from 'next/image'
const Partner = () => {
  return (
    <div className='partner-container'>
        <h2>Our Partners</h2>
            <Image
              src={partner}
              alt="partner image"
              height={1000}
              width={1000}
            />
    </div>
  )
}

export default Partner