import { CssEmotion, RktaTheme } from '../Provider/theme/theme.type';

export { color } from '../Text/Text.styles';

export const initialStyle: CssEmotion = {
  alignItems: 'center',
  display: 'flex',
};

export const fancy = (theme: RktaTheme, props: { active: boolean }): CssEmotion => ({
  position: 'relative',
  '&:before': {
    backgroundColor: 'currentColor',
    bottom: 0,
    content: '""',
    display: 'block',
    height: 1,
    left: 0,
    right: 0,
    opacity: 0.48,
    position: 'absolute',
  },
  '&:after': {
    backgroundColor: 'currentColor',
    bottom: 0,
    content: '""',
    display: 'block',
    height: 2,
    left: 0,
    right: 0,
    position: 'absolute',
    transform: `scaleX(${props.active ? 1 : 0})`,
    transition: 'transform 0.32s ease',
  },
});
