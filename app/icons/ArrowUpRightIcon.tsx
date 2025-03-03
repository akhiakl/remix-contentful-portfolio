import React from 'react'
import SvgIcon, { type SvgIconProps } from './SvgIcon'

const ArrowUpRightIcon = (props: Omit<SvgIconProps, 'children'>) => {
    return (
        <SvgIcon viewBox="0 0 24 24" strokeWidth={2} {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
        </SvgIcon>
    )
}

export default ArrowUpRightIcon