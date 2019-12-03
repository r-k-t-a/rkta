import { SyntheticEvent } from 'react';

// TODO: use normal handling
// NOTE: wait https://github.com/facebook/react/issues/17477 to be fixed
// export const isTargetEvent = (event: SyntheticEvent): boolean =>
//   event.eventPhase === event.nativeEvent.AT_TARGET;

export const isTargetEvent = (event: SyntheticEvent): boolean => event.eventPhase > 0;
