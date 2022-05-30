# Running the project locally
- Navigate to the project's root folder using the command line
- Run the command: `npm i` to install all the dependencies
- Run the command: `npm run dev`, this will host the website on http://localhost:1234/
---

# Building the project
- Navigate to the project's root folder using the command line
- Run the command: `npm i` to install all the dependencies
- Run the command: `npm run build`, the generated files will be placed inside `/bin`
---

# Publishing the project
- Since we are publishing a new version of the website, we should increment the version number. For sky-screenshot-stats we use the [Semantic Versioning](https://semver.org/) convention to update the version number.
    - In summary:
      - Given a version number MAJOR.MINOR.PATCH, increment the:
        - MAJOR version when making major (breaking) changes.
        - MINOR version when adding new features or improvements.
        - PATCH version when making bugfixes or small improvements.


- Edit package.json to update the version number
- Run `npm i`
- Run `npm run build`
- Commit and push the changes
- Change your branch to the `website` branch.
- Remove all the files of the previous version of the website
- Copy the contents of the bin folder, to the root folder
- Commit and push the changes
- Now you can switch back to the `master` branch
