import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home.js";
import { Demo } from "./views/demo.js";
import { Single } from "./views/single.js";
import injectContext from "./store/appContext.js";

//import { Navbar } from "./component/navbar.js";
import { Footer } from "./component/footer.js";
import { BartenderList } from "./views/bartender_list.js";
import { AdminView } from "./views/admin_view.js";

//create your first component
export class Layout extends React.Component {
	render() {
		//the basename is used when your project is published in a subdirectory and not in the root of the domain
		// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
		const basename = process.env.BASENAME || "";

		return (
			<div className="d-flex flex-column h-100">
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/demo" component={Demo} />
							<Route path="/single/:theid" component={Single} />
							<Route path="/bartender/list" component={BartenderList} />
							<Route path="/admin/view" component={AdminView} />
							<Route render={() => <h1>Not found!</h1>} />
						</Switch>
						<Footer />
					</ScrollToTop>
				</BrowserRouter>
			</div>
		);
	}
}

export default injectContext(Layout);
