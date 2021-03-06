import { useEffect, useState, RefObject } from 'react';

// #region Types
type NodeRef = HTMLElement | RefObject<HTMLElement>;

export type PositionAttachmentConfig = {
  align?:
    | 'bottom'
    | 'bottom-left'
    | 'bottom-right'
    | 'left'
    | 'right'
    | 'top'
    | 'top-left'
    | 'top-right';
  consumer?: NodeRef;
  offset?: number;
  producer?: NodeRef;
};

type AttachToWindow = {
  align?: PositionAttachmentConfig['align'];
  consumerElement: HTMLElement;
  offset: PositionAttachmentConfig['offset'];
};

type AttachToElement = {
  align?: PositionAttachmentConfig['align'];
  consumerElement: HTMLElement;
  offset: PositionAttachmentConfig['offset'];
  producerElement: HTMLElement;
};

type Transform = {
  transform: string;
};

const common = {
  left: 0,
  top: 0,
  position: 'fixed',
};

type State = (typeof common & Transform) | null;
// #endregion

function attachToWindow({ align, consumerElement, offset = 0 }: AttachToWindow): Transform {
  switch (align) {
    case 'top': {
      const x = window.innerWidth / 2 - consumerElement.offsetWidth / 2;
      return {
        transform: `translate(${x}px, ${offset}px)`,
      };
    }
    case 'top-right': {
      const x = window.innerWidth - consumerElement.offsetWidth - offset;
      return {
        transform: `translate(${x}px, ${offset}px)`,
      };
    }
    case 'top-left': {
      return {
        transform: `translate(${offset}px, ${offset}px)`,
      };
    }
    case 'bottom': {
      const x = window.innerWidth / 2 - consumerElement.offsetWidth / 2;
      const y = window.innerHeight - offset - consumerElement.offsetHeight;
      return {
        transform: `translate(${x}px, ${y}px)`,
      };
    }
    case 'bottom-right': {
      const x = window.innerWidth - consumerElement.offsetWidth - offset;
      const y = window.innerHeight - offset - consumerElement.offsetHeight;
      return {
        transform: `translate(${x}px, ${y}px)`,
      };
    }
    case 'bottom-left': {
      const y = window.innerHeight - offset - consumerElement.offsetHeight;
      return {
        transform: `translate(${offset}px, ${y}px)`,
      };
    }
    case 'right': {
      const x = window.innerWidth - consumerElement.offsetWidth - offset;
      const y = window.innerHeight / 2 - consumerElement.offsetHeight / 2;
      return {
        transform: `translate(${x}px, ${y}px)`,
      };
    }
    case 'left': {
      const y = window.innerHeight / 2 - consumerElement.offsetHeight / 2;
      return {
        transform: `translate(${offset}px, ${y}px)`,
      };
    }
    default: {
      const x = window.innerWidth / 2 - consumerElement.offsetWidth / 2;
      const y = window.innerHeight / 2 - consumerElement.offsetHeight / 2;
      return {
        transform: `translate(${x}px, ${y}px)`,
      };
    }
  }
}
function attachToElement({
  align,
  consumerElement,
  offset = 0,
  producerElement,
}: AttachToElement): Transform {
  const bounds = producerElement.getBoundingClientRect();
  switch (align) {
    case 'top': {
      const x = bounds.x - consumerElement.offsetWidth / 2 + producerElement.offsetWidth / 2;
      const y = bounds.y - consumerElement.offsetHeight - offset;
      return {
        transform: `translate(${x}px, ${y}px)`,
      };
    }
    case 'top-right': {
      const x = bounds.x + producerElement.offsetWidth - consumerElement.offsetWidth;
      const y = bounds.y - consumerElement.offsetHeight - offset;
      return {
        transform: `translate(${x}px, ${y}px)`,
      };
    }
    case 'top-left': {
      const { x } = bounds;
      const y = bounds.y - consumerElement.offsetHeight - offset;
      return {
        transform: `translate(${x}px, ${y}px)`,
      };
    }
    case 'bottom': {
      const x = bounds.x - consumerElement.offsetWidth / 2 + producerElement.offsetWidth / 2;
      const y = bounds.y + producerElement.offsetHeight + offset;
      return {
        transform: `translate(${x}px, ${y}px)`,
      };
    }
    case 'bottom-right': {
      const x = bounds.x + producerElement.offsetWidth - consumerElement.offsetWidth;
      const y = bounds.y + producerElement.offsetHeight + offset;
      return {
        transform: `translate(${x}px, ${y}px)`,
      };
    }
    case 'bottom-left': {
      const { x } = bounds;
      const y = bounds.y + producerElement.offsetHeight + offset;
      return {
        transform: `translate(${x}px, ${y}px)`,
      };
    }
    case 'right': {
      const x = bounds.x + producerElement.offsetWidth + offset;
      const y = bounds.y - consumerElement.offsetHeight / 2 + producerElement.offsetHeight / 2;
      return {
        transform: `translate(${x}px, ${y}px)`,
      };
    }
    case 'left': {
      const x = bounds.x - consumerElement.offsetWidth - offset;
      const y = bounds.y - consumerElement.offsetHeight / 2 + producerElement.offsetHeight / 2;
      return {
        transform: `translate(${x}px, ${y}px)`,
      };
    }
    default: {
      const x = bounds.x - consumerElement.offsetWidth / 2 + producerElement.offsetWidth / 2;
      const y =
        bounds.y - consumerElement.offsetHeight / 2 + producerElement.offsetHeight / 2 + offset;
      return {
        transform: `translate(${x}px, ${y}px)`,
      };
    }
  }
}

export const getHTMLElementFromRef = (
  nodeRef: NodeRef | undefined,
): HTMLElement | undefined | null => (nodeRef && 'current' in nodeRef ? nodeRef.current : nodeRef);

export function usePositionAttachment({
  align,
  consumer,
  offset = 0,
  producer,
}: PositionAttachmentConfig): State {
  const [state, setState] = useState<State>(null);

  function update(): void {
    const consumerElement = getHTMLElementFromRef(consumer);
    const producerElement = getHTMLElementFromRef(producer);
    if (!consumerElement) {
      setState(null);
      return;
    }
    const next = producerElement
      ? attachToElement({ align, consumerElement, offset, producerElement })
      : attachToWindow({ align, consumerElement, offset });
    if (next.transform !== state?.transform) setState({ ...common, ...next });
  }

  useEffect(() => {
    update();
    const interval = setInterval(update, 64);
    window.addEventListener('resize', update);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', update);
    };
  }, [consumer, align, offset, producer, state?.top, state?.left]);

  return state;
}
