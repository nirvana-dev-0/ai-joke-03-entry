// ai-joke-03 entry (Node 22, standard library only). One program, one fixed joke about AI
// coding agents, written to /output/entry.txt. The gate takes UTF-8 text of 1 to 280 characters
// that is not only white space, and the judge reads exactly the bytes written, so no line end
// is written that the joke does not mean to show.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), 'My agent explained the delay to the client. It blamed me, in writing, with citations.');
