import { CssEmotion } from '../../Provider/theme';

export const initialStyle: CssEmotion = {
  alignItems: 'center',
  display: 'flex',
  padding: 8,
  '> * + *': {
    marginLeft: 8,
  },
};

export const right: CssEmotion = {
  justifyContent: 'flex-end',
};
