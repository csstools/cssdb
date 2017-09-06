# CSS Database

CSS Database is a comprehensive list of CSS features and their positions in the process of becoming implemented web standards.

${features.map((feature) => `---

### <img src="https://jonathantneal.github.io/css-db/stage-${ feature.stage === -1 ? 'X' : feature.stage }.svg" alt="${ feature.stage === -1 ? 'Rejected' : `Stage ${ feature.stage }` }" width="62" height="62" align="right"> ${feature.title}

> ${feature.description}

[Specification](${feature.specification})

\`\`\`css
${feature.example}
\`\`\`

${feature.polyfills ? `###### Polyfills

${feature.polyfills.map((polyfill) => `- [${polyfill.type}](${polyfill.link})
`)}
` : ''}`)}
