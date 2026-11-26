// u-motasimfuad-rename-the-planet-094b0369: one funny planet rename, written to entry.txt.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const filePath = join(dir, 'entry.txt');
const text = 'Venus is renamed The Pressure Cooker because it traps its own heat so viciously it would crush a submarine into a soda can.';

writeFileSync(filePath, text, 'utf8');
