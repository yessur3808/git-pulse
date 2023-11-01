# GitPulse

**GitPulse** is a command-line tool and REST API service that allows you to generate GitHub or GitLab activity. It creates commits with customizable messages and dates, making it appear as if you've been coding regularly. It's built with Express.js and TypeScript.

## Getting Started

### Prerequisites

- Node.js
- npm (comes with Node.js)
- Git 

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your_username/git-activity-generator.git

```



### Directory Structure

```sh
.
├── src
│   ├── cli
│   │   ├── commands
│   │   │   ├── create.ts
│   │   │   └── remove.ts
│   │   └── index.ts        # CLI interface
│   ├── server
│   │   ├── routes
│   │   │   ├── commits.ts
│   │   │   └── index.ts
│   │   └── index.ts        # REST API interface
│   ├── utils
│   │   ├── date
│   │   │   └── formatDate.ts
│   │   ├── exec
│   │   │   └── execAsync.ts
│   │   ├── directories
│   │   │   └── handleDirectories.ts
│   │   └── index.ts        # Export all utils
│   ├── commits
│   │   ├── create
│   │   │   ├── createCommit.ts
│   │   │   └── createCommitDateList.ts
│   │   ├── remove
│   │   │   └── removeCommits.ts
│   │   ├── handleCommits.ts
│   │   └── index.ts        # Export all commit-related functions
│   ├── constants
│   │   ├── commitMessages.ts
│   │   └── index.ts        # Export all constants
│   └── index.ts            # Main entry point
├── test
│   ├── cli
│   │   └── index.test.ts
│   ├── server
│   │   └── index.test.ts
│   ├── utils
│   │   └── index.test.ts
│   ├── commits
│   │   └── index.test.ts
│   └── constants
│       └── index.test.ts
├── package.json
└── tsconfig.json

```



### Install npm packages

`npm install`


### Start the server

`npm start`


### Usage

The application provides a command-line tool and exposes two endpoints:

- GET `/commits`: Returns the commit activity of the specified Git account.
- POST `/commits`: Creates a new commit in the local Git repository and pushes it to the specified Git account. The request body should include a date (ISO string) and totalCommits (number).



### CLI Usage


```bash


./cli.js create-commit --date="2023-01-01" --totalCommits=5

```

### Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/NewFeature)
3. Commit your Changes (git commit -m 'Add some NewFeature')
4. Push to the Branch (git push origin feature/NewFeature)
5. Open a Pull Request


### License

Distributed under the MIT License. See LICENSE for more information.

Please note that you'll need to replace `your_username` with your actual GitHub username and modify the repository URL as needed. You might also want to add more sections to the README, such as a `Tests` section for running tests or a `Deployment` section for deployment instructions.