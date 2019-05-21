export type CssType = Function | object | object[] | string;

export interface ThemedComponentProps {
  css: CssType;
  [key: string]: CssType | object | boolean;
}
