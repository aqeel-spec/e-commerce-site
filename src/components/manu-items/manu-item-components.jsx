import React from 'react';

import './manu-item.scss';

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;

// import React from 'react';
// import './manu-item.scss';

// const ManuItem = (title) => (
//     <div className="menu-item">
//         <div className="content">
//             <h1 className="title">{title}</h1>
//             <span className="subtitle">sHOPT nOW</span>
//         </div>
//     </div>
// )
// export default ManuItem;