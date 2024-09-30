import React from "react";
import Header from "../../components/Header";

const PaymentPolicy = () => {
	return (
		<>
			<Header></Header>
			<div
				style={{
					marginTop: "60px",
					padding: "5px",
					minHeight: "100vh",
					minWidth: "100vw",
				}}
			>
				<h1>Payment and Refund Policy</h1>

				<div className="policy-section">
					<h2>1. Free Trial</h2>
					<p>
						All new customers are eligible for a{" "}
						<span className="highlight">one-month free trial period</span>.
						During this period, customers have full access to the product
						features at no cost.
					</p>
					<p>
						At the end of the free trial, customers must choose a payment plan
						to continue using the services. If no action is taken, access to the
						product will be restricted.
					</p>
				</div>

				<div className="policy-section">
					<h2>2. Payment Plans</h2>
					<ul>
						<li>
							<strong>Subscription Plan:</strong> $6 USD per month, billed
							monthly. This plan provides ongoing access to the product features
							for the duration of the subscription period.
						</li>
						<li>
							<strong>One-Time Payment Plan:</strong> $360 USD, billed once.
							This plan provides lifetime access to the product features without
							any recurring charges.
						</li>
					</ul>
				</div>

				<div className="policy-section">
					<h2>3. Payment Terms</h2>
					<p>
						Payments are due at the beginning of each billing cycle for the
						Subscription Plan. Customers are responsible for ensuring that their
						payment information is up-to-date.
					</p>
					<p>
						For the One-Time Payment Plan, the full payment amount is due at the
						time of purchase.
					</p>
				</div>

				<div className="policy-section">
					<h2>4. Refund Policy</h2>
					<p>
						<strong>Subscription Plan:</strong>
					</p>
					<ul>
						<li>
							Customers can request a refund within the first 7 days of their
							first paid month (after the trial period ends) if they are not
							satisfied with the product. Refunds requested after this period
							will not be honored.
						</li>
						<li>
							For subsequent months, cancellations can be made at any time, but
							refunds will not be issued for any partial or unused periods.
						</li>
					</ul>
					<p>
						<strong>One-Time Payment Plan:</strong>
					</p>
					<ul>
						<li>
							Refunds are available within 14 days of purchase. Customers can
							request a refund within this period if they are not satisfied with
							the product. Refunds requested after this period will not be
							honored.
						</li>
					</ul>
				</div>

				<div className="policy-section">
					<h2>5. Cancellation Policy</h2>
					<p>
						Customers can cancel their subscription at any time through their
						account settings. Upon cancellation, customers will retain access to
						the product features until the end of the current billing period.
					</p>
					<p>
						For the One-Time Payment Plan, cancellation will terminate access to
						the product and no refunds will be issued after the 14-day refund
						period.
					</p>
				</div>

				<div className="policy-section">
					<h2>6. Payment Methods</h2>
					<p>
						We accept major credit cards, debit cards, and other payment methods
						as listed on our website. All payments are processed securely.
					</p>
				</div>

				<div className="policy-section">
					<h2>7. Changes to the Policy</h2>
					<p>
						We reserve the right to modify or update this Payment and Refund
						Policy at any time. Any changes will be communicated via email or
						contact.
					</p>
				</div>

				<div className="contact-info">
					<p>
						For any questions or refund requests, please contact our support
						team at{" "}
						<a href="mailto:contact.techsystems@gmail.com">
							mailto:contact.techsystems@gmail.com
						</a>{" "}
						+254703535116/+254745301833 .
					</p>
				</div>
			</div>
		</>
	);
};

export default PaymentPolicy;
