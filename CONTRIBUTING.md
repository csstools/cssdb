## Contributing to this database

Pull requests are the most helpful contributions.

I love folks who can add missing features and keep existing features up to date.
A new feature only needs a **title**, a **description**, and a link to its
**specification**.

Non-CSSWG members can still update CSS features by including **citations** to
public notes that show how the CSSWG is advancing a feature. If you need
further clarification, read [why we are doing this](#why-are-we-doing-this).

### Updating a feature

Is one of these CSS features out-of-date? Open [`features.json`] and find the
feature you want to update. It’s a JSON file, so make changes directly to the
file, commit it, and then [make a pull request](#making-a-pull-request).

### Adding a new feature

Is a CSS feature not listed here? Add the feature to [`features.json`]. Again,
it’s a JSON file, so make changes directly to the JSON, commit it, and then
[make a pull request](#making-a-pull-request).

### Making a Pull Request

For best results, be sure your contributions make sense to everyone else. If
you’re unfamiliar with git, consider the following workflow.

1. To begin; [fork this project] and then clone your fork locally
   ```bash
   # Clone your fork of this project
   git clone git@github.com:YOUR_USER/css-db.git

   # Navigate to your fork of this project
   cd css-db

   # Install the tools necessary for testing this project
   npm install

   # Assign the original repo to a remote called "upstream"
   git remote add upstream git@github.com:jonathantneal/css-db.git
   ```

2. Create a branch for your feature or fix:
   ```bash
   # Move into a new branch for your feature
   git checkout -b feature/thing
   ```
   ```bash
   # Move into a new branch for your fix
   git checkout -b fix/something
   ```

3. If your code follows our practices, then push your feature branch:
   ```bash
   # Test your code
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

The only fields you’ll see in [`features.json`] are, in order:

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
    + `-1` means **Rejected**.
- `polyfills`: A list of polyfills used to simulate the feature; which includes
    + `type`: the type of polyfill (e.g. *PostCSS*, *JS Library*), and
    + `link`: the URL to the page or repository for the polyfill.

All contributions must follow the existing syntax and style of the JSON file,
which;

1. Exists as `features.json`, and;
2. Includes at least the required fields; **title**, **description**,
   **specification**, and **stage** (which is `0` if you don’t know it).

Did you write the specification you are submitting? It must;

1. Describe what the feature does in as few words as possible.
2. Describe why the feature exists in as few words as possible.
3. Describe how the feature and its parts operate as clearly and completely as
   possible.

If you’re changing the **stage** of a feature, be sure to include a link along
with your PR to prove the new position.

---

## Join the CSSWG

Passionate and informed developers should consider joining the CSSWG. Read the
[instructions for joining the CSSWG]. This is a very difficult to actually
accomplish, so I welcome pull requests to update this section with some
beginner-friendly instructions.

### Why are we doing this?

The CSSWG doesn’t follow the [TC39 process]. How they operate [in theory](https://www.w3.org/Style/CSS/specs.en.html) versus [in real life](http://fantasai.inkedblade.net/weblog/2011/inside-csswg/) is unclear, and
browsers
[don’t necessarily follow their process anyway](https://www.chromestatus.com/feature/5753701012602880),
so we have to discern what’s really going on ourselves. If we didn’t, we
probably wouldn’t need this repository.

[fork this project]: fork
[staging process]: README.md#staging-process
[TC39 process]: https://thefeedbackloop.xyz/tc39-a-process-sketch-stages-0-and-1/
[`features.json`]: features.json
[instructions for joining the CSSWG]: https://www.w3.org/2004/01/pp-impl/32061/instructions
