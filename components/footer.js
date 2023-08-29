import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import Link from "next/link"
import { PhoneIcon, SocialFacebook, SocialInstagram, SocialLinkedin, SocialTwitter, TelegramIcon } from "./images"

export default function Footer() {
	return (
		<>
			<footer id={style.footer}>
				<div className={style.contain}>
					<div className={`${style.main_row} row justify-content-between`}>
						<div className={style.column}>
							<div className={style.title}>Contact Us</div>
							<ul className={style.info_list}>
								<li>
									<a href="tel:347-919-5222">
										<Image width={60} height={60} src={PhoneIcon} alt="" />
										347-919-5222
									</a>
								</li>
								<li>
									<a href="mailto:Contact@motorweb.com">
										<Image width={60} height={60} src={TelegramIcon} alt="" />
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
						<div className={style.column}>
							<div className={style.title}>Short Links</div>
							<ul className={style.list}>
								<li>
									<Link href="/production">Home</Link>
								</li>
								<li>
									<Link href="/production/enquire">Enquire</Link>
								</li>
								<li>
									<Link href="/production/about">About Us</Link>
								</li>
								<li>
									<Link href="/production/terms-conditions">Terms and conditions</Link>
								</li>
								<li>
									<Link href="/production/industries">Industries</Link>
								</li>
								<li>
									<Link href="/production/privacy-policy">Privacy policy</Link>
								</li>
								<li>
									<Link href="/production/contact">Contact Us</Link>
								</li>
							</ul>
						</div>
						<div className={style.column}>
							<div className={style.title}>Join Our Mailing List</div>
							<p>Stay up to date with the latest news and deals!</p>
							<form action="" method="POST">
								<div className={`${style.form_blk} ${style.input}`}>
									<input type="text" name="" id="" className={style.input} placeholder="@ email address" />
									<button type="submit" className={`${style.site_btn} ${style.sm}`}>
										Submit
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div className={style.copyright}>
					<div className={style.contain}>
						<p>
							Copyright © 2023 <Link href="/production">MotorWeb</Link>. All Rights Reserved.
						</p>
					</div>
				</div>
			</footer>
		</>
	)
}
