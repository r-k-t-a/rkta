// NOTE: wait https://github.com/facebook/react/issues/17477 to be fixed
export const isTargetEvent = (event: Event): boolean => event.eventPhase === event.AT_TARGET;
