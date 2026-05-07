import React, {useEffect} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Home() {
  const target = useBaseUrl('/intro');

  useEffect(() => {
    window.location.replace(target);
  }, [target]);

  return null;
}