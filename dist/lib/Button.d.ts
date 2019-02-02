import * as React from 'react';
/**
 * TYPES
 */
interface ButtonProps {
    /**
     * `onClick` should only be a function that is expected
     * to be invoked when the Button is clicked.
     */
    onClick: (e: React.MouseEvent<HTMLElement>) => void;
    /**
     * `children` can be used to render anything inside the Button. This
     * can range from other components that are complex to simple strings,
     * however if you are only rendering a string, please use `label`
     * instead.
     */
    children: React.ReactNode;
    /**
     * `label` will override `children` and is should only be a simple string.
     * If your Button needs more complex children elements, such as a loading
     * spinner or a component, then use `children` instead.
     */
    label: string;
}
/**
 * COMPONENTS
 */
declare const Button: ({ onClick, children, label }: ButtonProps) => JSX.Element;
declare const DangerButton: ({ onClick, children, label }: ButtonProps) => JSX.Element;
export { Button, DangerButton };
