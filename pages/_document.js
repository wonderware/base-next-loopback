import React from "react";
import Document, { Main, NextScript } from "next/document";
import NavBar from "components/NavBar";
import stylesheet from "styles/styles.scss";

export default class MyDocument extends Document {
	static getInitialProps({ renderPage }) {
		const { html, head, errorHtml, chunks } = renderPage();

		return {html, head, errorHtml, chunks}
	}

	render() {
		return (
			<html>
				<body>
					<style dangerouslySetInnerHTML={{ __html: stylesheet }} />
					<NavBar />
					<Main />
					<NextScript />
				</body>
			</html>
		)
	}
}
