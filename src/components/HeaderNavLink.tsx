"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactElement, ReactNode } from "react";

type HeaderNavLinkProps = {
	href: string;
	children: ReactNode;
};

const HeaderNavLink = (props: HeaderNavLinkProps) => {
	const { children, href } = props;

	const pathname = usePathname();
	const active = href === pathname;

	if (!pathname) {
		return;
	}

	return (
		<Link
			href={href}
			className={`hover:bg-gray-100 p-2 rounded block ${
				active ||
				(href.startsWith("/dashboard") && pathname.startsWith("/dashboard"))
					? "text-black font-semibold"
					: "text-gray-500"
			}`}
		>
			{children}
		</Link>
	);
};

export default HeaderNavLink;
