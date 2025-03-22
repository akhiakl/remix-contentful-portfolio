import clsx from "clsx";
import React from "react";

type IconButtonBaseProps = {
    children: React.ReactNode;
    href?: string;
    noBg?: boolean;
};

type AnchorButtonProps = IconButtonBaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;
type ButtonProps = IconButtonBaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

type IconButtonProps = AnchorButtonProps | ButtonProps;

const iconClass = "w-5 h-5 flex justify-center items-center";

const IconButton: React.FC<IconButtonProps> = ({ children, href, noBg, ...props }) => {
    const containerClass = clsx(
        "group inline-flex items-center text-primary rounded-full font-bold duration-300 ease-out cursor-pointer",
        {
            "bg-transparent hover:bg-transparent": noBg,
            "bg-neutral-800 hover:bg-neutral-700 p-3": !noBg,
        }
    );

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
