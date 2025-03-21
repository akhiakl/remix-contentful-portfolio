import clsx from 'clsx';
import React from 'react';

type IconButtonBaseProps = {
    children: React.ReactNode;
    icon?: React.ReactNode;
    href?: string;
    variant?: 'primary' | 'secondary' | 'link';
};

type AnchorButtonProps = IconButtonBaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;
type ButtonProps = IconButtonBaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

type IconButtonProps = AnchorButtonProps | ButtonProps;
const Button: React.FC<IconButtonProps> = ({ children, href, icon, variant = 'primary', ...props }) => {
    const containerClass = clsx(
        "group flex items-center shrink-0 uppercase font-bold cursor-pointer",
        {
            "gap-3 bg-primary hover:bg-primary/80 text-neutral-950 rounded-full duration-100 ease-out": variant !== 'link',
            "gap-1 text-primary border-b": variant === 'link',
            "pl-5 pr-1.5 py-1.5": variant !== 'link' && !!icon,
            "px-5 py-2": variant !== 'link' && !icon,
        }
    )
    const iconMarkup = icon && (
        <span className={clsx("flex justify-center items-center", {
            "w-6 h-6": variant === 'link',
            "w-8 h-8": variant !== 'link'
        })}>
            <span className={clsx('w-full h-full', {
                ' bg-neutral-950 text-white p-2 md:p-0 md:w-3 md:h-3 group-hover:p-2 group-hover:w-full group-hover:h-full rounded-full duration-100 ease-in': variant !== 'link',
                'text-primary p-1': variant === 'link',
            })}>
                <span className={clsx({
                    'visible group-hover:visible md:invisible': variant !== 'link',
                })}>
                    {icon}
                </span>
            </span>
        </span>
    )
    if (href) {
        return (
            <a {...(props as AnchorButtonProps)} href={href} className={containerClass}>
                {children}
                {iconMarkup}
            </a>
        );
    }
    return (
        <button {...(props as ButtonProps)} className={containerClass}>
            {children}
            {iconMarkup}
        </button>
    );
};

export default Button;