import RootLayout from "@/components/Layout";
import DashboardLayout from "./layout/DashboardLayout";

type DashBoardProps = {
	children?: React.ReactNode;
};

const DashBoard = (props: DashBoardProps) => {
	const { children } = props;

	return <div>Dashboard Home</div>;
};

DashBoard.getLayout = (page: React.ReactNode) => {
	return (
		<RootLayout>
			<DashboardLayout>{page}</DashboardLayout>
		</RootLayout>
	);
};

export default DashBoard;
