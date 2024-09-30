import React from "react";
import Header from "../../components/Header";
import image from "../../assets/images/techsystems-img.png";
import Blogs from "../Blog/Blogs";

const Home = () => {
	return (
		<div
			style={{
				minHeight: "100vh",
				minWidth: "100vw",

				backgroundImage: `url(${image})`,
				backgroundSize: "cover",
				backgroundRepeat: "repeat-y",
				backgroundPosition: "center",
			}}
		>
			<Header></Header>
			<div
				style={{
					marginTop: "60px",
					backgroundColor: "rgba(64, 99, 112, 0.5)",
					minHeight: "100vh",
					minWidth: "100vw",
				}}
			>
				<div style={{ minHeight: "10vh" }}>
					<p className="text-light text-center h5 bg-dark">
						Become A World Class Manager And Administrator
					</p>
				</div>

				<div
					style={{
						backgroundColor: "rgba(255, 255, 255)",
						borderRadius: "20%",
						padding: "2vh",
					}}
				>
					{" "}
					<p className="text-center h6">
						Eliminate Stress Of Tedious Sheets And Paper Work <br />
						Also Earn Online By Reselling The Softwares
					</p>{" "}
					<div className="d-flex justify-content-center">
						<iframe
							width="560"
							height="315"
							src="https://www.youtube.com/embed/Z6bokD0ro5A?si=5Njm1OzNrUSRgWfL"
							title="Earn Online Through Techsystems Partnership"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowfullscreen
						></iframe>
					</div>
				</div>
				<div className="row bg-transparent d-flex justify-content-around m-2">
					<div className="col-md-6 bg-transparent my-1">
						<div className="card rounded">
							<div className="card-header">
								<p className="h5 card-title">
									School/College Management Software System
								</p>
							</div>
							<div className="card-body d-flex justify-content-center">
								<iframe
									width="560"
									height="315"
									src="https://www.youtube.com/embed/Tn81LZLFTeU?si=jw6aO9NNO_uqG1WZ"
									title="SCHOOL OR COLLEGE SOFTWARE MANAGEMENT SYSTEM"
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowfullscreen
								></iframe>
							</div>

							<div className="card-footer d-flex justify-content-around">
								<a
									download
									href="https://dl.dropbox.com/scl/fi/jisvepw4wd1s2yjt5v5j2/School-Techsystem-1.0.zip?rlkey=vrm6sgrv7racah34uhvphcfxz&st=y69nllh5&dl=0"
								>
									<button className="btn btn-outline-primary rounded">
										Download Software (Offline & Online)
									</button>
								</a>
								<a download href="https://school.techsystem.world">
									<button className="btn btn-outline-primary rounded">
										Use PWA app (Online Only)
									</button>
								</a>
							</div>
						</div>
					</div>
					<div className="col-md-6 bg-transparent my-1">
						<div className="card rounded">
							<div className="card-header">
								<p className="h5 card-title">
									Hospital/Clinic Management Software System
								</p>
							</div>
							<div className="card-body d-flex justify-content-center">
								<iframe
									width="560"
									height="315"
									src="https://www.youtube.com/embed/cXuDPkJnX6k?si=RXiRproi2IO2F8kP"
									title="Hospital/Clinic Management Software System"
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowfullscreen
								></iframe>
							</div>
							<div className="card-footer d-flex justify-content-around">
								{" "}
								<a
									download
									href="https://dl.dropbox.com/scl/fi/ulfgzcgrvbm4upjghox6v/Health-Techsystem-1.0.zip?rlkey=rhwq4gfbl7oczgoa0u4kdeiuv&st=0zwa7ooi&dl=0"
								>
									<button className="btn btn-outline-primary rounded">
										Download Software (Offline & Online)
									</button>
								</a>
								<a download href="https://health.techsystem.world">
									<button className="btn btn-outline-primary rounded">
										Use PWA app (Online Only)
									</button>
								</a>
							</div>
						</div>
					</div>
					<div className="col-md-6 bg-transparent my-1">
						<div className="card rounded">
							<div className="card-header">
								<p className="h5 card-title">
									Sacco/Microfinance Management Software System
								</p>
							</div>
							<div className="card-body d-flex justify-content-center">
								{/*<video
							style={{ width: "100%", height: "auto" }}
							controls
							autoPlay={false}
							loop
							muted
							poster="https://www.dropbox.com/scl/fi/my1uu9lwyxrnsbogxfrwh/fb-finance.jpg?rlkey=rlh8ky1fzwbtn98g933v4mo49&raw=1"
						>
							<source
								src="https://www.dropbox.com/scl/fi/106seo3eugmgvp10d7p44/SACCO-or-Microfinance-self-help-groups-savings-loan-credit-software-management-system.mp4?rlkey=x5y6c40y1ma1yqc8cpqnrha5o&raw=1"
								type="video/mp4"
							></source>
						</video>*/}
								<iframe
									width="560"
									height="315"
									src="https://www.youtube.com/embed/H4zUoacM3dk?si=6PIXsxVifwY-zc8v"
									title="SACCO OR MICROFINANACE SOFTWARE MANAGEMENT SYSTENM"
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowfullscreen
								></iframe>
							</div>

							<div className="card-footer d-flex justify-content-around">
								{" "}
								<a
									download
									href="https://dl.dropbox.com/scl/fi/e3b3gpvnm5on2h82r1wad/Finance-Techsystem-1.0.zip?rlkey=l2aara1k8hx3nn2pib9jszr1c&st=4w20fi95&dl=0"
								>
									<button className="btn btn-outline-primary rounded">
										Download Software (Offline & Online)
									</button>
								</a>
								<a download href="https://finance.techsystem.world">
									<button className="btn btn-outline-primary rounded">
										Use PWA app (Online Only)
									</button>
								</a>
							</div>
						</div>
					</div>
					<div className="col-md-6 bg-transparent my-1">
						<div className="card rounded">
							<div className="card-header">
								<p className="h5 card-title">
									Rentals/Apartments/Hostels Management Software System
								</p>
							</div>
							<div className="card-body d-flex justify-content-center">
								<iframe
									width="560"
									height="315"
									src="https://www.youtube.com/embed/eyBO9JE9Vjw?si=O-sb6M3ykrPgS5Tf"
									title="Rentals/Apartments/Hostels Management Software System"
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowfullscreen
								></iframe>
							</div>
							<div className="card-footer d-flex justify-content-around">
								{" "}
								<a
									download
									href="https://dl.dropbox.com/scl/fi/lfu9ljlvceon87vgm8x3d/Rental-Techsystem-1.0.zip?rlkey=i2upnv24dj4rslww28k06g1pg&st=1e3oph25&dl=0"
								>
									<button className="btn btn-outline-primary rounded">
										Download Software (Offline & Online)
									</button>
								</a>
								<a download href="https://rental.techsystem.world">
									<button className="btn btn-outline-primary rounded">
										Use PWA app (Online Only)
									</button>
								</a>
							</div>
						</div>
					</div>
					<div className="col-md-6 bg-transparent my-1">
						<div className="card rounded">
							<div className="card-header">
								<p className="h5 card-title">
									Business And Point Of Sale Management Software System
								</p>
							</div>
							<div className="card-body d-flex justify-content-center">
								<iframe
									width="560"
									height="315"
									src="https://www.youtube.com/embed/qU21mhVnQ2M?si=uotmDNEreItxZd0Z"
									title="Business And Point Of Sale Management Software System"
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowfullscreen
								></iframe>
							</div>
							<div className="card-footer d-flex justify-content-around">
								{" "}
								<a
									download
									href="https://dl.dropbox.com/scl/fi/ia74lq2spkjdcosvwlaxy/Business-Techsystem-1.0.zip?rlkey=n9s75r1eg90qqzs9dwnr8vur2&st=a7v0fi2e&dl=0"
								>
									<button className="btn btn-outline-primary rounded">
										Download Software (Offline & Online)
									</button>
								</a>
								<a download href="https://business.techsystem.world">
									<button className="btn btn-outline-primary rounded">
										Use PWA app (Online Only)
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Blogs></Blogs>
		</div>
	);
};

export default Home;
