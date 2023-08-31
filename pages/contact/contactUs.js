import React from "react"
import style from "@/styles/scss/web.module.scss"
import { PhotoContactBanner, PhotoContactVector } from "@/components/images"
import FormBlock from "./formBlock"
import DataBlock from "./dataBlock"

export default function ContactUs() {
	return (
		<>
			<section id={style.contact} style={{ backgroundImage: "url(" + PhotoContactBanner.src + ")" }}>
				<div className={style.contain}>
					<div className={style.wrapper} style={{ backgroundImage: "url(" + PhotoContactVector.src + ")" }}>
						<div className={style.content}>
							<h2 className="fw_600 mb-5">Contact Us</h2>
							<p>If you need to help with our services, have questions about our work or experiencing any technical difficulties, please do not hesitate to contact us.</p>
						</div>
						<div className={style.main_row}>
							<div className={`${style.column} ${style.column1}`}>
								<FormBlock />
							</div>
							<div className={`${style.column} ${style.column2}`}>
								<DataBlock />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
