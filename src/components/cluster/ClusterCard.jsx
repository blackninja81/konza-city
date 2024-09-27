import React from 'react';
import './cluster.scss';
import Image from 'next/image';

const clusters = [
  {
    id: 1,
    imageSrc: '/assets/images/logo/monitor.png',
    altText: 'monitor-logo',
    title:"ICT",
    description: 'Is one of the fastest growing sectors with a high potential for job creation.'
  },
  {
    id: 2,
    imageSrc: '/assets/images/logo/microscope.png',
    altText: 'microscope-logo',
    title:"Life Sciences",
    description: 'Will provide an enabling environment for scientific breakthroughs related to bioscience and new ways of working with health providers and industry.'
  },
  {
    id: 3,
    imageSrc: '/assets/images/logo/gears.png',
    altText: 'gears-logo',
    title:"Engineering",
    description: 'This is a super cluster that encompasses energy, water, material sciences, electronics and related activities.'
  }
];

const ClusterCard = () => {
  return (
    <div className='card-container'>
      {clusters.map(cluster => (
        <div key={cluster.id} className='cluster-card'>
          <div className='cluster-logo'>
            <Image
              src={cluster.imageSrc}
              height={100}
              width={100}
              alt={cluster.altText}
            />
          </div>
          <div className='cluster-text'>
            <h3>{cluster.title}</h3>
            <p>{cluster.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClusterCard;
