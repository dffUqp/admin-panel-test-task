import { useEffect, useState } from 'react';

export const useMount = (opened: boolean, animationTime = 200) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    if (opened && !mounted) {
      setMounted(true);
    } else if (!opened && mounted) {
     setTimeout(() => {
        setMounted(false);
      }, animationTime);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opened]);

  return mounted;
};
