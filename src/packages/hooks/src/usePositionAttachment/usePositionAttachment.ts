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
  left: number;
  top: number;
};

const common = {
  position: 'fixed',
};

type State = (typeof common & Transform) | null;
// #endregion

function attachToWindow({ align, consumerElement, offset = 0 }: AttachToWindow): Transform {
  switch (align) {
    case 'top': {
      return {
        left: window.innerWidth / 2 - consumerElement.offsetWidth / 2,
        top: offset,
      };
    }
    case 'top-right': {
      return {
        left: window.innerWidth - consumerElement.offsetWidth - offset,
        top: offset,
      };
    }
    case 'top-left': {
      return {
        left: offset,
        top: offset,
      };
    }
    case 'bottom': {
      return {
        left: window.innerWidth / 2 - consumerElement.offsetWidth / 2,
        top: window.innerHeight - offset - consumerElement.offsetHeight,
      };
    }
    case 'bottom-right': {
      return {
        left: window.innerWidth - consumerElement.offsetWidth - offset,
        top: window.innerHeight - offset - consumerElement.offsetHeight,
      };
    }
    case 'bottom-left': {
      return {
        left: offset,
        top: window.innerHeight - offset - consumerElement.offsetHeight,
      };
    }
    case 'right': {
      return {
        left: window.innerWidth - consumerElement.offsetWidth - offset,
        top: window.innerHeight / 2 - consumerElement.offsetHeight / 2,
      };
    }
    case 'left': {
      return {
        left: offset,
        top: window.innerHeight / 2 - consumerElement.offsetHeight / 2,
      };
    }
    default: {
      return {
        left: window.innerWidth / 2 - consumerElement.offsetWidth / 2,
        top: window.innerHeight / 2 - consumerElement.offsetHeight / 2,
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
      return {
        left: bounds.x - consumerElement.offsetWidth / 2 + producerElement.offsetWidth / 2,
        top: bounds.y - consumerElement.offsetHeight - offset,
      };
    }
    case 'top-right': {
      return {
        left: bounds.x + producerElement.offsetWidth - consumerElement.offsetWidth,
        top: bounds.y - consumerElement.offsetHeight - offset,
      };
    }
    case 'top-left': {
      return {
        left: bounds.x,
        top: bounds.y - consumerElement.offsetHeight - offset,
      };
    }
    case 'bottom': {
      return {
        left: bounds.x - consumerElement.offsetWidth / 2 + producerElement.offsetWidth / 2,
        top: bounds.y + producerElement.offsetHeight + offset,
      };
    }
    case 'bottom-right': {
      return {
        left: bounds.x + producerElement.offsetWidth - consumerElement.offsetWidth,
        top: bounds.y + producerElement.offsetHeight + offset,
      };
    }
    case 'bottom-left': {
      return {
        left: bounds.x,
        top: bounds.y + producerElement.offsetHeight + offset,
      };
    }
    case 'right': {
      return {
        left: bounds.x + producerElement.offsetWidth + offset,
        top: bounds.y - consumerElement.offsetHeight / 2 + producerElement.offsetHeight / 2,
      };
    }
    case 'left': {
      return {
        left: bounds.x - consumerElement.offsetWidth - offset,
        top: bounds.y - consumerElement.offsetHeight / 2 + producerElement.offsetHeight / 2,
      };
    }
    default: {
      return {
        left: bounds.x - consumerElement.offsetWidth / 2 + producerElement.offsetWidth / 2,
        top:
          bounds.y - consumerElement.offsetHeight / 2 + producerElement.offsetHeight / 2 + offset,
      };
    }
  }
}

export const getElement = (nodeRef: NodeRef | undefined) =>
  nodeRef && 'current' in nodeRef ? nodeRef.current : nodeRef;

export function usePositionAttachment({
  align,
  consumer,
  offset = 0,
  producer,
}: PositionAttachmentConfig): State {
  const [state, setState] = useState<State>(null);

  function update(): void {
    const consumerElement = getElement(consumer);
    const producerElement = getElement(producer);
    if (!consumerElement) return setState(null);
    const next = producerElement
      ? attachToElement({ align, consumerElement, offset, producerElement })
      : attachToWindow({ align, consumerElement, offset });
    console.log('next', next);
    const left = Math.round(next.left);
    const top = Math.round(next.top);
    if (top !== state?.top || left !== state?.left) setState({ ...common, left, top });
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
