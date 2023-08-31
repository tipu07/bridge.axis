import React from "react"
import Head from "next/head"
import Header from "@/components/header/header"
import ContactUs from "./contact/contactUs"
import Subscribe from "@/components/subscribe"
import Footer from "@/components/footer"

export default function Contact() {
	return (
		<>
			<Head>
				<title>Contact us — Bridge Axis</title>
				<meta name="description" content="Bridge Axis" />
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2, user-scalable=yes" />
				<link rel="icon" href="/images/favicon.png" />
			</Head>
			<Header />
			<ContactUs />
			<Subscribe />
			<Footer />
		</>
	)
}
