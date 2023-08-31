import React from "react"
import style from "@/styles/scss/web.module.scss"

export default function FormBlock() {
	return (
		<>
			<div className={style.form_block}>
				<form action="" method="post">
					<h3 className="fw_600 mb-4">Please fill these fields</h3>
					<div className="row form_row">
						<div className="col-md-6">
							<div className={style.form_blk}>
								<input type="text" name="" id="" className={style.input} placeholder="First Name *" />
							</div>
						</div>
						<div className="col-md-6">
							<div className={style.form_blk}>
								<input type="text" name="" id="" className={style.input} placeholder="Last Name *" />
							</div>
						</div>
						<div className="col-md-6">
							<div className={style.form_blk}>
								<input type="text" name="" id="" className={style.input} placeholder="Email Address *" />
							</div>
						</div>
						<div className="col-md-6">
							<div className={style.form_blk}>
								<input type="text" name="" id="" className={style.input} placeholder="Phone Number" />
							</div>
						</div>
						<div className="col-md-12">
							<div className={style.form_blk}>
								<textarea name="" id="" rows={6} className={style.input} placeholder="Message"></textarea>
							</div>
						</div>
						<div className="col-md-12">
							<div className={style.btn_blk}>
								<button type="submit" className={style.site_btn}>
									Submit
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</>
	)
}
