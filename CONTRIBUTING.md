## Contributing to this database

Pull requests are the most helpful contributions.

We need updates to existing CSS features and to add missing and new features.
A feature only needs a **title**, a **description**, and a link to its
**specification**, because every feature is "*unrecognized*" until we see proof
of a **stage** change from the [CSSWG](#join-the-csswg).

Non-CSSWG members can still update CSS features by including **citations** to
public notes that show how the CSSWG is advancing a feature. If you need
further clarification, read [why we are doing this](#why-are-we-doing-this).

### Updating a feature

Does one of the CSS features listed here have out-of-date info? Goto
[css-features](css-features) and find the feature you want to update. It’s a
JSON file, so make changes directly to the JSON and
[make a pull request](#making-a-pull-request).

### Adding a new feature

Is an experimental CSS feature not listed here? Add the feature to
[css-features](css-features). You’ll be creating a JSON file, so make additions
directly to the JSON and [make a pull request](#making-a-pull-request).

### Making a Pull Request

For best results, be sure your contributions make sense to everyone else. If
you’re unfamiliar with git, consider the following workflow.

1. To begin; [fork this project][fork], clone your fork, and add our upstream.
    ```bash
    # Clone your fork of the repo into the current directory
    git clone git@github.com:YOUR_USER/css-db.git

    # Navigate to the newly cloned directory
    cd css-db

    # Assign the original repo to a remote called "upstream"
    git remote add upstream git@github.com:jonathantneal/css-db.git

    # Install the tools necessary for testing
    npm install
    ```

2. Create a branch for your feature or update:
    ```bash
    # Move into a new branch for your new feature
    git checkout -b feature/thing
    ```
    ```bash
    # Or, move into a new branch for your update
    git checkout -b update/something
    ```

3. If your code follows our practices, then push your branch up to your fork:
    ```bash
    # Test current code
    npm test
    ```
    ```bash
    # Push the branch for your new feature
    git push origin feature/thing
    ```
    ```bash
    # Or, push the branch for your update
    git push origin update/something
    ```

---

## Advanced Usage: How the JSON file looks

The only fields you’ll see in our JSON file are, in order:

- `title`: the name of the feature.
- `description`: a brief description of the feature.
- `specification`: a link to feature’s specification.
- `stage`: the position of the feature within the [staging process]. Stages
   should be a number, and no stage (*unrecognized*) should be `null`.
- `stage`: the current [stage](README.md#staging-process) of the feature; where
    + `0` means **Stage 0** — *Aspirational*,
    + `1` means **Stage 1** — *Experimental*,
    + `2` means **Stage 2** — *Draft*,
    + `3` means **Stage 3** — *Adoption*,
    + `4` means **Stage 4** — *Complete*, and
    + `null` means **No Stage** — *Unrecognized*.
- `citations`: a list of links related to the feature and its progress.
- `issues`: a link to issue tracking for the feature.
- `polyfills`: A list of polyfills used to simulate the feature; which includes
    + `name`: the shorthand name of the polyfill, and
    + `link`: the URL to the page or repository for the polyfill.

All contributions must follow the syntax and style of existing JSON files,
which;

1. Exist as `css-features/${ featureName }.json`, where `featureName` is the
   [kebab-case](http://wiki.c2.com/?KebabCase) name representing the title and
   thematic category of the feature, like `hwb-color`, `matches-pseudo-class`,
   or `grid-syntax`.
2. Include at least the required fields; **title**, **description**,
   **specification**, and **stage** (which is `null` if you don’t know it).

Did you write the specification you are submitting? It must;

1. Describe what the feature does in as few words as possible.
2. Describe why the feature exists in as few words as possible.
3. Describe how the feature and its parts operate as clearly and completely as
   possible.

If you’re changing the **stage** of a feature, be sure to add a **citation**
that proves its new position in the
[staging process](README.md#staging-process).

---

## Join the CSSWG

Passionate and informed developers should consider joining the CSSWG. Read the
[instructions for joining the CSSWG](https://www.w3.org/2004/01/pp-impl/32061/instructions).
Supposedly this is very difficult to actually accomplish, so pull requests are
welcomed to update this section with a beginner-friendly version of these
instructions.

### Why are we doing this?

The CSSWG doesn’t follow the [TC39 process]. How they operate [in theory](https://www.w3.org/Style/CSS/specs.en.html) versus [in real life](http://fantasai.inkedblade.net/weblog/2011/inside-csswg/) is unclear, and
browsers
[don’t necessarily follow their process anyway](https://www.chromestatus.com/feature/5753701012602880),
so we have to discern what’s really going on ourselves. If we didn’t, we
probably wouldn’t need this repository.

[fork]: fork
[staging process]: README.md#staging-process
[TC39 process]: https://thefeedbackloop.xyz/tc39-a-process-sketch-stages-0-and-1/
