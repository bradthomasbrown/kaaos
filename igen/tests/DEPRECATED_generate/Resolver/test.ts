import { fromFileUrl } from 'https://deno.land/std@0.224.0/path/mod.ts'
import { compile } from "../../../../solc/lib/DEPRECATED_compile.ts";

const solcJsonInputPath = fromFileUrl(import.meta.resolve('../../../../common/@dizzyhavoc/contracts/Resolver/settings.json'))
const solcJsonOutput = await compile(solcJsonInputPath)
const abi = solcJsonOutput.abi('Resolver')

console.log(abi.signatureComponentsMap())