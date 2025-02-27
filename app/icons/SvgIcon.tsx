import React from 'react'

export type SvgIconProps = React.SVGProps<SVGSVGElement>

const SvgIcon = ({ children, ...props }: SvgIconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" {...props}>
            {children}
        </svg>
    )
}

export default SvgIcon