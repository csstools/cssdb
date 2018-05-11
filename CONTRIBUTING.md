## Contributing to this database

Pull requests are the most helpful contributions.

I love folks who can add missing features and keep existing features up to date.
A new feature only needs a **title**, **id**, **description**, and a link to
its **specification**.

Non-CSSWG members can still update CSS features by including **citations** to
public notes that show how the CSSWG is advancing a feature. If you need
further clarification, read [why we are doing this](#why-are-we-doing-this).

### Updating a feature

Is one of these CSS features out-of-date? Open [`cssdb.json`] and find the
feature you want to update. It’s a JSON file, so make changes directly to the
file, commit it, and then [make a pull request](#making-a-pull-request).

### Adding a new feature

Is a CSS feature not listed here? Add the feature to [`cssdb.json`]. Again,
it’s a JSON file, so make changes directly to the JSON, commit it, and then
[make a pull request](#making-a-pull-request).

### Making a Pull Request

For best results, be sure your contributions make sense to everyone else. If
you’re unfamiliar with git, consider the following workflow.

1. To begin; [fork this project] and then clone your fork locally
   ```bash
   # Clone your fork of this project
   git clone git@github.com:YOUR_USER/cssdb.git

   # Navigate to your fork of this project
   cd cssdb

   # Install the tools necessary for testing this project
   npm install

   # Assign the original repo to a remote called "upstream"
   git remote add upstream git@github.com:csstools/cssdb.git
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

The only fields you’ll see in [`cssdb.json`] are, in order:

- `id`: the feature shortname, similar to a specification [Shortname].
- `title`: the name of the feature.
- `description`: a brief description of the feature.
- `specification`: a link to the specification for the feature.
- `stage`: the current [stage](README.md#staging-process) of the feature; where
    + `0` means **Stage 0** — *Aspirational*,
    + `1` means **Stage 1** — *Enthusiastic*,
    + `2` means **Stage 2** — *Experimental*,
    + `3` means **Stage 3** — *Allowable*,
    + `4` means **Stage 4** — *Embraced*,
    + `5` means **Stage 5** — *Standardized*, and
    + `-1` means **Rejected**.
- `polyfills`: a list of polyfills used to simulate the feature; each including
    + `type`: the type of polyfill (e.g. *PostCSS*, *JS Library*), and
    + `link`: the URL to the repository for the polyfill.

All contributions must follow the existing syntax and style of the JSON file,
which;

1. Exists as `cssdb.json`, and;
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

[`cssdb.json`]: cssdb.json
[fork this project]: fork
[instructions for joining the CSSWG]: https://www.w3.org/2004/01/pp-impl/32061/instructions
[staging process]: README.md#staging-process
[TC39 process]: https://thefeedbackloop.xyz/tc39-a-process-sketch-stages-0-and-1/
[Section Heading ID]: https://tabatkins.github.io/bikeshed/#section-links
[Shortname]: https://tabatkins.github.io/bikeshed/#metadata-shortname
