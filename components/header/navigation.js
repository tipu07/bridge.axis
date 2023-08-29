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
						<Link href="/production/about" className={router.pathname === "/production/about" ? style.active : ""}>
							About Us
						</Link>
					</li>
					<li>
						<Link href="/production/contact" className={`${style.site_btn} ${style.black}`}>
							Contact Us
						</Link>
					</li>
				</ul>
			</nav>
		</>
	)
}
