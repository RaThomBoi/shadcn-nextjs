"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type DashboardNavLinkProps = {
	href: string;
	children: React.ReactNode;
};

const DashboardNavLink = (props: DashboardNavLinkProps) => {
	const { children, href } = props;

	const pathname = usePathname();
	const active = href === pathname;

	return (
		<Link
			href={href}
			className={`hover:bg-gray-100 p-2 rounded block text-sm ${
				active ? "text-black font-semibold" : "text-gray-500"
			}`}
		>
			{children}
		</Link>
	);
};

export default DashboardNavLink;
