import { renderFeatures } from "../components/features.mjs";
import { renderFooter } from "../components/footer.mjs";
import { renderHeader } from "../components/header.mjs";
import { renderStages } from "../components/stages.mjs";
import { html } from "../util/html.mjs";

export function renderIndex() {
	return html`<!doctype html>
<html lang="en" dir="ltr">
<head>
	<meta charset="utf-8">
	<title>CSS Database - CSS Tools</title>
	<meta name="description" content="A comprehensive list of CSS features and their positions in the process of becoming implemented web standards.">
	<link rel="preconnect" href="https://d32ekf2zat2q3c.cloudfront.net" crossorigin />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@600&display=swap" crossorigin />
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@600&display=swap" media="print" onload="this.media='all'" crossorigin />
	<noscript>
		<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@600&display=swap" crossorigin />
	</noscript>
	<meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:site" content="@css_tools_">
	<meta property="og:title" content="CSS Database">
	<meta property="og:description" content="A comprehensive list of CSS features and their positions in the process of becoming implemented web standards.">
	<meta property="og:image" content="https://cssdb.org/images/css.png">
	<meta property="og:site_name" content="cssdb">
	<meta property="og:type" content="website">
	<meta property="og:url" content="https://cssdb.org/">
	<link href="/favicon.ico" rel="shortcut icon">
	<link rel="stylesheet" href="/styles/style.css" />
</head>
<body>
	${renderHeader()}
	${renderFeatures()}
	${renderStages()}
	${renderFooter()}
</body>
</html>
`;
}
