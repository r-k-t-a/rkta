import { PositionAttachmentConfig } from '@rkta/hooks';
import { RktaElement } from '../Provider';

export type Align = PositionAttachmentConfig['align'];

export type FloatingAreaProps = RktaElement & {
  active: boolean;
  align?: PositionAttachmentConfig['align'];
  blockLevel?: boolean;
  mountNodeId?: 'string';
  offset?: PositionAttachmentConfig['offset'];
  onHide?: () => void;
  producer: PositionAttachmentConfig['producer'];
};
