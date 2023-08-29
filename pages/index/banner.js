import React from "react"
import style from "@/styles/scss/web.module.scss"
import Link from "next/link"
import Image from "next/image"
import { PhotoMainBanner, PhotoMainBannerVector } from "@/components/images"

export default function Banner() {
	return (
		<>
			<section id={style.banner} style={{ backgroundImage: "url(" + PhotoMainBannerVector.src + ")" }}>
				<div className={style.contain}>
					<div className={style.wrapper}>
						<div className={style.content}>
							<h1>
								Pioneering <span>Tomorrow's</span> Procurement
							</h1>
							<p>Bridging the gap between businesses and seamless sourcing solutions.</p>
							<div className={style.btn_blk}>
								<Link href="/contact" className={style.site_btn}>
									Contact Us
								</Link>
							</div>
						</div>
						<div className={style.image}>
							<Image width={1400} height={1000} src={PhotoMainBanner} alt="" />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
