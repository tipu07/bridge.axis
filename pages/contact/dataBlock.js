import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { IconEnvelope, IconPhone, SocialFacebook, SocialInstagram, SocialLinkedin, SocialTwitter } from "@/components/images"

export default function DataBlock() {
	return (
		<>
			<div className={style.data_block}>
				<h3 className="fw_600 mb-4">We&lsquo;d love to hear from you</h3>
				<p>If you need to help with our services, have questions about our work or experiencing any technical difficulties, please do not hesitate to contact us.</p>
				<ul class={style.info_list}>
					<li>
						<Image width={60} height={60} src={IconPhone} alt="" />
						<a href="tel:413-248-8118">413-248-8118</a>
					</li>
					<li>
						<Image width={60} height={60} src={IconEnvelope} alt="" />
						<a href="mailto:Info@bridge_axis.com">Info@bridge_axis.com</a>
					</li>
				</ul>
				<h5 className="fw_600">Follow Us On</h5>
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
		</>
	)
}
