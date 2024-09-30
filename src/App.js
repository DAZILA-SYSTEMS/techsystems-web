import React, { Component, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Blogs from "./Pages/Blog/Blogs";
import PaymentPolicy from "./Pages/Home/PaymentPolicy";

class App extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<Suspense
						fallback={
							<div className="d-flex justify-content-center align-items-center">
								<span className="spinner-border text-primary"></span>
							</div>
						}
					>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/blog/:title" element={<Blogs />} />
							<Route path="/blog" element={<Blogs />} />
							<Route path="/payment-policy" element={<PaymentPolicy />} />

							{/*<Route path="*" element={<NotFound />} />*/}
						</Routes>
					</Suspense>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
