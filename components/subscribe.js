import React from "react"
import style from "@/styles/scss/web.module.scss"
import { PhotoSubscribe } from "@/components/images"

export default function Subscribe() {
	return (
		<>
			<section id={style.subscribe}>
				<div className={style.contain}>
					<div className={style.wrapper} style={{ backgroundImage: "url(" + PhotoSubscribe.src + ")" }}>
						<div className={`${style.inner} text-center`}>
							<h2>Subscribe With Us</h2>
							<p>To Get Regular updates on events, conferences, workshops, trainings and monthly reports on institutions, please subscribe with us.</p>
							<form action="" method="post">
								<div className={style.form_inner}>
									<input type="text" name="" id="" className={style.input} placeholder="Enter your email address" />
									<button type="submit">Submit</button>
								</div>
							</form>
							<p>Stay up to date with the latest news and deals!</p>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
