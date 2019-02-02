import * as React from 'react'
import styled from 'styled-components'

/**
 * STYLES
 */

const StyledButton = styled.button`
	padding: 5px 10px;
	border: 1px solid #383838;
	background: #383838;
`

const StyledDangerButton = styled(StyledButton)`
	background: red;
	border-color: red;
`

const StyledButtonLabel = styled.span`
	color: #f8f8f8;
`

const StyledDangerButtonLabel = styled(StyledButtonLabel)`
	color: #383838;
`

/**
 * TYPES
 */

interface ButtonProps {
	/**
	 * `onClick` should only be a function that is expected
	 * to be invoked when the Button is clicked.
	 */
	onClick: (e: React.MouseEvent<HTMLElement>) => void
	/**
	 * `children` can be used to render anything inside the Button. This
	 * can range from other components that are complex to simple strings,
	 * however if you are only rendering a string, please use `label`
	 * instead.
	 */
	children: React.ReactNode
	/**
	 * `label` will override `children` and is should only be a simple string.
	 * If your Button needs more complex children elements, such as a loading
	 * spinner or a component, then use `children` instead.
	 */
	label: string
}

/**
 * COMPONENTS
 */

const Button = ({ onClick, children, label }: ButtonProps) => {
	return <StyledButton onClick={onClick}>{label || children}</StyledButton>
}

const DangerButton = ({ onClick, children, label }: ButtonProps) => {
	return (
		<StyledDangerButton onClick={onClick}>
			{label || children}
		</StyledDangerButton>
	)
}

export { Button, DangerButton }
