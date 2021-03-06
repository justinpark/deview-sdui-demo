import React, { useRef, useEffect, useState, useMemo } from 'react';
import { useAppFrameworkContext } from './UIContext';

type Props = {
  id: string;
};

export default function Section({ id }: Props) {
  const { registry, sections } = useAppFrameworkContext();
  const config = sections?.get(id);
  const { component: Comp, loader } = useMemo(() => {
    if (
      !registry ||
      !config ||
      !config.sectionComponentType ||
      !registry[config.sectionComponentType]
    ) {
      return { component: null, loader: null };
    }
    const { component, loader } = registry[config.sectionComponentType];

    // For server-side rendering
    if (typeof window === 'undefined' && loader?.value) {
      return { component: loader.value, loader };
    }
    return { component, loader };
  }, []);
  const ref = useRef<React.FC<any> | null | undefined>(Comp);
  const { current: Component } = ref;
  const [loaded, setLoaded] = useState(Boolean(Component));

  useEffect(() => {
    if (loader) {
      loader().then(({ default: Comp }) => {
        ref.current = Comp;
        setLoaded(true);
      });
    }
  }, [loader]);

  return <div>{loaded && Component && <Component {...config?.section} />}</div>;
}
