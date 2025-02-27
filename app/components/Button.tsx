import clsx from 'clsx';
import React from 'react';

type IconButtonBaseProps = {
    children: React.ReactNode;
    icon?: React.ReactNode;
    href?: string;
};

type AnchorButtonProps = IconButtonBaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;
type ButtonProps = IconButtonBaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

type IconButtonProps = AnchorButtonProps | ButtonProps;
const Button: React.FC<IconButtonProps> = ({ children, href, icon, ...props }) => {
    const containerClass = clsx(
        "group flex items-center gap-3 bg-primary hover:bg-primary/80 text-gray-950 rounded-full uppercase font-bold duration-100 ease-out cursor-pointer",
        {
            "pl-5 pr-1.5 py-1.5": !!icon,
            "px-5 py-2": !icon,
        }
    )
    const iconMarkup = icon && (
        <span className="w-8 h-8 flex justify-center items-center">
            <span className='w-full h-full p-2 md:p-0 md:w-3 md:h-3 group-hover:p-2 group-hover:w-full group-hover:h-full bg-gray-950 rounded-full duration-100 ease-in text-white'>
                <span className='visible group-hover:visible md:invisible'>
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