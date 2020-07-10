import { PositionAttachmentConfig } from '@rkta/hooks';
import { RktaElement } from '../Provider';
import { FloatingAreaConfig } from './useFloatingArea';

export type Align = PositionAttachmentConfig['align'];

export type FloatingAreaProps = RktaElement & {
  active: boolean;
  align?: PositionAttachmentConfig['align'];
  blockLevel?: boolean;
  consumer?: never;
  mountNodeId?: 'string';
  offset?: PositionAttachmentConfig['offset'];
  onClose?: FloatingAreaConfig['onClose'];
  onEscape?: FloatingAreaConfig['onEscape'];
  onFxIn?: FloatingAreaConfig['onFxIn'];
  onFxOut?: FloatingAreaConfig['onFxOut'];
  producer?: PositionAttachmentConfig['producer'];
};
