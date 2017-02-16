# CSS Database

CSS Database is a comprehensive list of CSS features and their positions in the process of becoming implemented web standards.

${ features.map((feature) => `### ${ feature.title }

> Status: ${ feature.stage === null ? 'Unrecognized' : `Stage ${ feature.stage }` }

${ feature.description }

##### Citations

${ feature.citations.map((citation) => `- ${ citation }`) }

`) }
