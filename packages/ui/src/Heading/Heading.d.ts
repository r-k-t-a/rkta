import Text from '../Text/Text.d';

export default interface HeadingProps extends Text {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  h1?: never;
  h2?: never;
  h3?: never;
  h4?: never;
  h5?: never;
  h6?: never;
}
