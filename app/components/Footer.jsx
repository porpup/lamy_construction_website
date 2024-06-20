import React from "react";
import Link from "next/link";

const Footer = () => {
	const company = {
		name: "Lamy Construction",
		address: "9 rue Debussy, Candiac, QC, J5R 6C2",
		phoneNo: "+1 (514) 591-9381",
		email: "benoit@constructionlamy.com",
	};

	const googleMap =
		"https://www.google.com/maps/place/9+Rue+Debussy,+Candiac,+QC+J5R+6C2/@45.3859549,-73.4934945,17z/data=!3m1!4b1!4m6!3m5!1s0x4cc90c20ff306c0f:0xd9adbd862e121b81!8m2!3d45.3859512!4d-73.4909142!16s%2Fg%2F11c5fnb48d?entry=ttu";

	return (
		<footer className="bg-stone-800 tc_gray pr-16 pl-16">
			<hr className="h-0.5 mx-auto my-4 border-0 rounded md:my-5 bg_gray" />

			<h6 className="mb-4 font-semibold uppercase text-center">Contact</h6>
			<div className="flex flex-col items-center md:flex-row md:justify-between">
				{/* Address Section */}
				<div className="mb-4 md:mb-0 text-left md:flex-1">
					<Link href={googleMap}>
						<p className="flex items-center justify-start hover:text-neutral-100">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="mr-3 h-5 w-5"
							>
								<path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
								<path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
							</svg>
							{company.address}
						</p>
					</Link>
				</div>

				{/* Email Section */}
				<div className="mb-4 md:mb-0 text-center md:flex-1">
					<p className="flex items-center justify-center hover:text-neutral-100">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="mr-3 h-5 w-5"
						>
							<path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
							<path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
						</svg>
						<a href={`mailto:${company.email}`}>{company.email}</a>
					</p>
				</div>

				{/* Phone Section */}
				<div className="mb-4 md:mb-0 text-right md:flex-1">
					<p className="flex items-center justify-end hover:text-neutral-100">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="mr-3 h-5 w-5"
						>
							<path
								fillRule="evenodd"
								d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
								clipRule="evenodd"
							/>
						</svg>
						<a href={`tel:${company.phoneNo}`}>{company.phoneNo}</a>
					</p>
				</div>
			</div>

			{/* Copyright Section */}
			<hr className="h-0.5 mx-auto my-4 border-0 rounded md:my-5 bg_gray" />
			<div className="bg-stone-800 pb-5 text-center">
				<p>Copyright © 2024 - {company.name}</p>
				<p>RBQ: 5848-3058-01</p>
			</div>
		</footer>
	);
};

export default Footer;
