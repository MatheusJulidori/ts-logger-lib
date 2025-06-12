# ts-logger-lib

A simple **TypeScript** logging library that provides functions to record **INFO**, **WARN**, and **ERROR** messages with a consistent timestamp format (`YYYY-MM-DD HH:mm:ss`). Ideal for Node.js/TypeScript projects that need uniform, easy-to-use logging.

NPM Link: [ts-logger-lib](https://www.npmjs.com/package/ts-logger-lib)

---

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [API](#api)
5. [Contributing](#contributing)

---

## Features

* Logs messages with levels: **INFO**, **WARN**, and **ERROR**
* Automatically prefixes each message with a timestamp (`YYYY-MM-DD HH:mm:ss`)
* Lightweight and dependency-free (pure TypeScript)
* Provides stack trace output when logging errors
* Ready for reuse across multiple projects

---

## Installation

```bash
npm install ts-logger-lib
# or
yarn add ts-logger-lib
```

---

## Usage

Import the desired logging functions into any TypeScript or JavaScript file:

```ts
import { logInfo, logWarn, logError } from 'ts-logger-lib';

// INFO example
logInfo('Application has started successfully');

// WARN example
logWarn('Received unexpected payload; using default values');

// ERROR example
try {
  // some code that may throw
  throw new Error('Something went wrong');
} catch (err) {
  logError('Failed to process request', err);
}
```

Each call will output to the console in this format:

```bash
### [2025-06-02 15:30:45] [INFO] ###
Application has started successfully

### [2025-06-02 15:31:12] [WARN] ###
Received unexpected payload; using default values

### [2025-06-02 15:31:30] [ERROR] ###
Failed to process request
Error: Something went wrong
    at ...
```

---

## API

### `logInfo(message: string): void`

Records an informational message with level `INFO` and a timestamp.

* **Parameters**

  * `message` (string): The message to log.

### `logWarn(message: string): void`

Records a warning message with level `WARN` and a timestamp.

* **Parameters**

  * `message` (string): The message to log.

### `logError(message: string, error?: unknown): void`

Records an error message with level `ERROR` and a timestamp. If an `Error` object is provided, its stack trace is included. If any other value is provided, it is serialized to JSON.

* **Parameters**

  * `message` (string): The message to log.
  * `error` (optional, unknown): An `Error` object or any value that should be logged alongside the message.

---

## Contributing

Contributions are welcome! To propose changes:

1. Fork the repository.
2. Create a new branch with a descriptive name (e.g., `feature/add-log-to-file`).
3. Make your changes and add tests if applicable.
4. Commit your changes with a clear message.
5. Push to your fork and open a Pull Request against `main`.

Please follow standard GitHub flow and describe the purpose of your changes in the PR description.

---

*Thank you for using ts-logger-lib!*
