import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import Link from "next/link"
import { EnvelopeIcon, PhoneIcon, SocialFacebook, SocialInstagram, SocialLinkedin, SocialTwitter } from "./images"
import Logo from "./logo"

export default function Footer() {
	return (
		<>
			<footer id={style.footer}>
				<div className={style.contain}>
					<div className={style.top_blk}>
						<Logo light={true} />
						<p>A concise narrative of how your company came to be, why you decided to create the procurement solution, and what your vision is.</p>
					</div>
					<div className={style.mid_blk}>
						<ul className={style.mini_list}>
							<li>
								<Link href="/">Home</Link>
							</li>
							<li>
								<Link href="/about">About us</Link>
							</li>
							<li>
								<Link href="/contact">Contact us</Link>
							</li>
						</ul>
						<ul className={style.info_list}>
							<li>
								<a href="tel:347-919-5222">
									<Image width={60} height={60} src={PhoneIcon} alt="" />
									347-919-5222
								</a>
							</li>
							<li>
								<a href="mailto:Contact@motorweb.com">
									<Image width={60} height={60} src={EnvelopeIcon} alt="" />
									Contact@motorweb.com
								</a>
							</li>
						</ul>
						<ul className={style.social_list}>
							<li>
								<a href="?" target="_blank">
									<Image width={100} height={100} src={SocialTwitter} alt="" />
								</a>
							</li>
							<li>
								<a href="?" target="_blank">
									<Image width={100} height={100} src={SocialFacebook} alt="" />
								</a>
							</li>
							<li>
								<a href="?" target="_blank">
									<Image width={100} height={100} src={SocialLinkedin} alt="" />
								</a>
							</li>
							<li>
								<a href="?" target="_blank">
									<Image width={100} height={100} src={SocialInstagram} alt="" />
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className={style.copyright}>
					<div className={style.contain}>
						<p>
							Copyrights 2016 <Link href="/">Bridge Axis</Link>. All Rights Reserved.
						</p>
					</div>
				</div>
			</footer>
		</>
	)
}
