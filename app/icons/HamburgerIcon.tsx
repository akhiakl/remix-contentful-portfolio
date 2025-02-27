import React from 'react'
import SvgIcon, { type SvgIconProps } from './SvgIcon'

const HamburgerIcon = (props: SvgIconProps) => {
    return (
        <SvgIcon viewBox="0 0 44 44" {...props}>
            <path d="M6 16H38" stroke="#C7C7C7" strokeWidth="2" />
            <path d="M6 28H38" stroke="#C7C7C7" strokeWidth="2" />
        </SvgIcon>
    )
}

export default HamburgerIcon