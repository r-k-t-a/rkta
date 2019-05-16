import React from 'react';
interface AtomProps {
    atomRef?: Function | object;
    css?: Function | object;
    element: React.ElementType;
}
declare const Atom: {
    ({ css, element: Element, atomRef, ...rest }: AtomProps): any;
    displayName: string;
};
export declare const RawAtom: {
    ({ css, element: Element, atomRef, ...rest }: AtomProps): any;
    displayName: string;
};
export default Atom;
