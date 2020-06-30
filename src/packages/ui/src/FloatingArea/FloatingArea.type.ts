import { PositionAttachmentConfig } from '@rkta/hooks';
import { RktaElement } from '../Provider';

export type Align =
  | 'top'
  | 'top-left'
  | 'top-right'
  | 'right'
  | 'bottom'
  | 'bottom-right'
  | 'bottom-left'
  | 'left';

export type FloatingAreaProps = RktaElement & {
  active: boolean;
  align?: PositionAttachmentConfig['align'];
  blockLevel?: boolean;
  mountNodeId?: 'string';
  offset?: PositionAttachmentConfig['offset'];
  onHide: () => void;
  producer: PositionAttachmentConfig['producer'];
};
