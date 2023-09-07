import RootLayout from "@/components/Layout";
import DashboardLayout from "../layout/DashboardLayout";

const AccountPage = () => {
	return <div>Account screen</div>;
};

AccountPage.getLayout = (page: React.ReactNode) => (
	<RootLayout>
		<DashboardLayout>{page}</DashboardLayout>
	</RootLayout>
);

export default AccountPage;
