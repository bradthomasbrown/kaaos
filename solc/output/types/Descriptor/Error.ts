import { z } from 'https://deno.land/x/zod@v3.23.8/mod.ts';
import { error } from 'solc/output/schemas/sources/contract/descriptor/error.ts';

export type Error = z.infer<typeof error>