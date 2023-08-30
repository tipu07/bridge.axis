import Image from "next/image"
import Link from "next/link"
import React from "react"
import style from "@/styles/scss/web.module.scss"
import { LogoImage, LogoImageLight } from "./images"

export default function Logo(props) {
	const { light } = props
	return (
		<>
			<div className={style.logo}>
				<Link href="/">
					{light ? (
						<>
							<Image width={1000} height={1000} src={LogoImageLight} alt="Logo" />
						</>
					) : (
						<>
							<Image width={1000} height={1000} src={LogoImage} alt="Logo" />
						</>
					)}
				</Link>
			</div>
		</>
	)
}
