import React, { useEffect, useState } from 'react';

const Mac = () => {
  const path = process.env.PUBLIC_URL;
  const [scroll, setScroll] = useState(0);
  const onScroll = () => {
    setScroll(window.scrollY)
  };
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, []);
  return (
    <article className='mac'>
      <div className="yellowBox">
        <img src={path + "/images/CartoonMac.png"} alt="맥 이미지" className='hand' style={{ bottom: `-${scroll / 6}px` }} />
        <img src={path + "/images/SplashColor.png"} alt="컬러" className='color' style={{ top: `-${scroll / 6}px` }} />
      </div>
      <p>Leading digital agency with soild design and<br />development expertise. We focus on building<br />Webflow websites.</p>
    </article>
  );
};

export default Mac;
