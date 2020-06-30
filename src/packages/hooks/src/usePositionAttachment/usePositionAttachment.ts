import { useEffect, useState, RefObject } from 'react';

// #region Types
type NodeRef = HTMLElement | RefObject<HTMLElement>;

export type PositionAttachmentConfig = {
  align?:
    | 'bottom'
    | 'bottom-left'
    | 'bottom-right'
    | 'left'
    | 'top'
    | 'top-left'
    | 'top-right'
    | 'right';
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
      const left = window.innerWidth / 2 - consumerElement.offsetWidth / 2;
      return {
        left,
        top: offset,
      };
    }
    case 'top-right': {
      const left = window.innerWidth - consumerElement.offsetWidth - offset;
      return {
        left,
        top: offset,
      };
    }
    case 'top-left': {
      const x = 0;
      return {
        left: offset,
        top: offset,
      };
    }
    case 'bottom': {
      const left = window.innerWidth / 2 - consumerElement.offsetWidth / 2;
      const top = window.innerHeight - offset - consumerElement.offsetHeight;
      return { left, top };
    }
    case 'bottom-right': {
      const left = window.innerWidth - consumerElement.offsetWidth;
      const top = window.innerHeight - offset - consumerElement.offsetHeight;
      return {
        left,
        top,
      };
    }
    case 'bottom-left': {
      const left = offset;
      const top = window.innerHeight - offset - consumerElement.offsetHeight;
      return {
        left,
        top,
      };
    }
    case 'right': {
      const left = window.innerWidth - consumerElement.offsetWidth;
      const top = window.innerHeight / 2 - consumerElement.offsetHeight / 2;
      return {
        left,
        top,
      };
    }
    case 'left': {
      const left = offset;
      const top = window.innerHeight / 2 - consumerElement.offsetHeight / 2;
      return {
        left,
        top,
      };
    }
    default: {
      const left = window.innerWidth / 2 - consumerElement.offsetWidth / 2;
      const top = window.innerHeight / 2 - consumerElement.offsetHeight / 2;
      return {
        left,
        top,
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
      const left = bounds.x - consumerElement.offsetWidth / 2 + producerElement.offsetWidth / 2;
      const top = bounds.y + producerElement.offsetHeight + offset;
      return {
        left,
        top,
      };
    }
    case 'top-right': {
      const left = bounds.x + producerElement.offsetWidth;
      const top = bounds.y + producerElement.offsetHeight + offset;
      return {
        left,
        top,
      };
    }
    case 'top-left': {
      const left = bounds.x - consumerElement.offsetWidth;
      const top = bounds.y + producerElement.offsetHeight + offset;
      return {
        left,
        top,
      };
    }
    case 'bottom': {
      const left = bounds.x - consumerElement.offsetWidth / 2 + producerElement.offsetWidth / 2;
      const top = bounds.y - consumerElement.offsetHeight - offset;
      return {
        left,
        top,
      };
    }
    case 'bottom-right': {
      const left = bounds.x + producerElement.offsetWidth;
      const top = bounds.y - consumerElement.offsetHeight - offset;
      return {
        left,
        top,
      };
    }
    case 'bottom-left': {
      const left = bounds.x - consumerElement.offsetWidth;
      const top = bounds.y - consumerElement.offsetHeight - offset;
      return {
        left,
        top,
      };
    }
    case 'right': {
      const left = bounds.x + producerElement.offsetWidth;
      const top =
        bounds.y - consumerElement.offsetHeight / 2 + producerElement.offsetHeight / 2 + offset;
      return {
        left,
        top,
      };
    }
    case 'left': {
      const left = bounds.x - consumerElement.offsetWidth;
      const top =
        bounds.y - consumerElement.offsetHeight / 2 + producerElement.offsetHeight / 2 + offset;
      return {
        left,
        top,
      };
    }
    default: {
      const left = bounds.x - consumerElement.offsetWidth / 2 + producerElement.offsetWidth / 2;
      const top =
        bounds.y - consumerElement.offsetHeight / 2 + producerElement.offsetHeight / 2 + offset;
      return {
        left,
        top,
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
    if ((next.top !== state?.top, next.left !== state?.left)) setState({ ...common, ...next });
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
