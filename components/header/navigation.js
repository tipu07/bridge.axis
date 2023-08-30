import Link from "next/link"
import style from "@/styles/scss/web.module.scss"
import { useRouter } from "next/router"

export default function Navigation(props) {
	const { navActive } = props
	const router = useRouter()
	return (
		<>
			<nav id={style.nav}>
				<ul id={style.nav_list} className={`${navActive ? style.active : ""}`}>
					<li>
						<Link href="/about" className={router.pathname === "/about" ? style.active : ""}>
							About Us
						</Link>
					</li>
					<li>
						<Link href="/contact" className={`${style.site_btn} ${style.black}`}>
							Contact Us
						</Link>
					</li>
				</ul>
			</nav>
		</>
	)
}
