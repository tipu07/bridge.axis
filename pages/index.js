import React from "react"
import Head from "next/head"
import Header from "@/components/header/header"
import Banner from "./index/banner"
import Intro from "./index/intro"

export default function Index() {
	return (
		<>
			<Head>
				<title>Home — Bridge Axis</title>
				<meta name="description" content="Bridge Axis" />
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2, user-scalable=yes" />
				<link rel="icon" href="/images/favicon.png" />
			</Head>
			<Header />
			<Banner />
			<Intro />
		</>
	)
}
