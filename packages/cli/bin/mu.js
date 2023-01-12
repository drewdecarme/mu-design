#!/usr/bin/env node

import { cli } from "../dist/index.js";

console.log(typeof cli)

cli(cli.input[0], cli.flags);
