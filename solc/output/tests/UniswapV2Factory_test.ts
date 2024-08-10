import { output as outputSchema } from 'solc/output/schemas/mod.ts';
import { load } from 'solc/output/fixtures/lib/load.ts'
import { compile } from 'solc/compile/tests/UniswapV2Factory/compile.ts'

const outputString = await load('UniswapV2Factory', compile)

Deno.test('parse', () => { outputSchema.parse(outputString) })