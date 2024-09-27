import React from 'react'
import Image from 'next/image';
import { Button } from '../ui/button';

const clusters = [
    {
      id: 1,
      imageSrc: '/assets/images/pictures/konza1.jpg',
      altText: 'monitor-logo',
      title:"TECHNOLOGY",
      description: 'These are parcels designed for Research and Development Centres, Outsourcing campuses BPO/ITES,Innovation Parks,Technology business Incubation and Accelarion Parks,Business Continuity Centre and other investor driven Science Technology and Innovation facilities.'
    },
    {
      id: 2,
      imageSrc: '/assets/images/pictures/konza2.jpg',
      altText: 'microscope-logo',
      title:"EDUCATION",
      description: 'This project entails the universities in Konza Technopolis which are envisioned as a special place where innovative groups develop and apply modern technology; as a place where higher education and industry come together, and a site of life-long learning.'
    },
    {
      id: 3,
      imageSrc: '/assets/images/pictures/konza3.jpg',
      altText: 'gears-logo',
      title:"COMMERCIAL AND RESIDENTIAL",
      description: 'These include general and Affordable housing for people workingand living in Konza Technopolis and affordable housing for students. Opportunities also exist for mixed use commercial facilities such as office buildings and trading facilities.'
    }
  ];
const OpportunityCard = () => {
    return (
        <div className='opportunity-card-container'>
          {clusters.map(cluster => (
            <div key={cluster.id} className='cluster-card'>
              <div className='cluster-logo'>
                <Image
                  src={cluster.imageSrc}
                  height={100}
                  width={450}
                  alt={cluster.altText}
                />
              </div>
              <div className='cluster-text'>
                <h3>{cluster.title}</h3>
                <p>{cluster.description}</p>
              </div>
              <Button>Learn More...</Button>
            </div>
          ))}
        </div>
      );
}

export default OpportunityCard