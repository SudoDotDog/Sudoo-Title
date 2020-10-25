# Sudoo-Title

[![Build Status](https://travis-ci.com/SudoDotDog/Sudoo-Title.svg?branch=master)](https://travis-ci.com/SudoDotDog/Sudoo-Title)
[![codecov](https://codecov.io/gh/SudoDotDog/Sudoo-Title/branch/master/graph/badge.svg)](https://codecov.io/gh/SudoDotDog/Sudoo-Title)
[![npm version](https://badge.fury.io/js/%40sudoo%2Ftitle.svg)](https://www.npmjs.com/package/@sudoo/title)
[![downloads](https://img.shields.io/npm/dm/@sudoo/title.svg)](https://www.npmjs.com/package/@sudoo/title)

:exclamation: Title Chain

## Install

```sh
yarn add @sudoo/title
# Or
npm install @sudoo/title --save
```

## Usage

```ts
import { Title } from "@sudoo/title";

const title: Title = Title.create("MyIndex");

// Options: On page init (EX: index component did mount)
title.restoreTitle(); // Title > "MyIndex"

// On page changes (EX: page component did mount)
title.setTitle("SubPageTitle"); // Title > "SubPageTitle"

// On page restored (EX: page component did unmount)
title.restoreTitle(); // Title > "MyIndex"
```
