"use client";

import React, { useEffect, useRef } from 'react';

const Comments: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';

    script.setAttribute('data-repo', 'rombey86/Schwimmbad');
    script.setAttribute('data-repo-id', 'R_kgDOPUOG9A'); // I will provide instructions on how to get this
    script.setAttribute('data-category', 'Announcements'); // I will provide instructions on how to get this
    script.setAttribute('data-category-id', 'DIC_kwDOPUOG9M4Ct0yr'); // I will provide instructions on how to get this
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', 'light');
    script.setAttribute('data-lang', 'de');

    ref.current.appendChild(script);
  }, []);

  return <div ref={ref} />;
};

export default Comments;
