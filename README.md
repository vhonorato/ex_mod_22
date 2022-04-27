# Module 22

Projeto desenvolvido para o curso de Profissão: Engenheiro de Qualidade de Software 

## Getting Started

### Setup

- [Install yarn](https://yarnpkg.com/)

## Run
- `yarn`: Install project dependencies.
- `yarn cy:open`: Start Cypress.
- `yarn cy:test`: Start Cypress headless.


## Commit Messages

### Git Commit Guidelines

- Follow the [Conventional Commits](https://conventionalcommits.org/)
- Follow the [Angular Commit Message Guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-guidelines)

- Follow the [How to Write a Git Commit Message](http://chris.beams.io/posts/git-commit/) tips
- Follow the [5 Useful Tips For A Better Commit Message](https://robots.thoughtbot.com/5-useful-tips-for-a-better-commit-message) tips
- Consider using [Commitizen cli](http://commitizen.github.io/cz-cli/)

### Follow [The seven rules of a great Git commit message](https://chris.beams.io/posts/git-commit/) (TL;DR)

1. [Separate subject from body with a blank line](https://chris.beams.io/posts/git-commit/#separate)
2. [Limit the subject line to 50 characters](https://chris.beams.io/posts/git-commit/#limit-50)
3. [Capitalize the subject line](https://chris.beams.io/posts/git-commit/#capitalize)
4. [Do not end the subject line with a period](https://chris.beams.io/posts/git-commit/#end)
5. [Use the imperative mood in the subject line](https://chris.beams.io/posts/git-commit/#imperative)
6. [Wrap the body at 72 characters](https://chris.beams.io/posts/git-commit/#wrap-72)
7. [Use the body to explain what and why vs. how](https://chris.beams.io/posts/git-commit/#why-not-how)

### Commit Types

As configured on [`.commitlintrc.yml`](https://commitlint.js.org/#/reference-configuration), it must be one of the following:

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **ref**: A code change that neither fixes a bug nor adds a feature
- **test**: Adding missing tests or correcting existing tests
- **revert**: A commit that reverts a previous commit
- **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation
- **ci**: Changes to our CI configuration files and scripts _(example scopes: Circle, BrowserStack, SauceLabs)_
- **build**: Changes that affect the build system or external dependencies _(example scopes: gulp, broccoli, npm)_
- **perf**: A code change that improves performance
- **git**: Changes on git files, such as [`.gitignore`](https://git-scm.com/docs/gitignore)

### Commit Best Practices

- Commit [often](https://sethrobertson.github.io/GitBestPractices/#sausage_metaphor)
- Keep commits small and [atomic](https://www.freshconsulting.com/atomic-commits/)
- Write [S.O.L.I.D.](https://youtu.be/e9K1gHYIE2c) commits
- Write meaningful titles targeting for non-technical readers
- Write commits that would help the Code Review
- Add any extra information that would help the Code Review
- Reference the [issue](https://help.github.com/en/articles/autolinked-references-and-urls) that originated the commit