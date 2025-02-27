import React from "react";

type IconButtonBaseProps = {
    children: React.ReactNode;
    href?: string;
};

type AnchorButtonProps = IconButtonBaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;
type ButtonProps = IconButtonBaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

type IconButtonProps = AnchorButtonProps | ButtonProps;

const containerClass = "group flex items-center p-3 bg-gray-800 hover:bg-gray-700 text-primary rounded-full font-bold duration-300 ease-out cursor-pointer";
const iconClass = "w-5 h-5 flex justify-center items-center";

const IconButton: React.FC<IconButtonProps> = ({ children, href, ...props }) => {
    if (href) {
        return (
            <a {...(props as AnchorButtonProps)} href={href} className={containerClass}>
                <span className={iconClass}>{children}</span>
            </a>
        );
    }

    return (
        <button {...(props as ButtonProps)} className={containerClass}>
            <span className={iconClass}>{children}</span>
        </button>
    );
};

export default IconButton;
