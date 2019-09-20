import { Button, Alert } from "reactstrap";

import Layout from "../components/layout";

export default () => {
	return (
		<Layout>
			<div>
				<Alert color="primary">
					Hello Project is strapi-next with Bootstrap
				</Alert>
				&nbsp; <Button color="primary">Hello from nextjs</Button>
			</div>
		</Layout>
	);
};
