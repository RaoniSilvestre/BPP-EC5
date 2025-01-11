import { CEM_MIL } from "../src/utils/consts.ts";
import {
  binaryBenchSearch,
  linearBenchSearch,
} from "../src/utils/generateBench.ts";

Deno.bench("Linear Search", { group: "100K" }, () => {
  linearBenchSearch(CEM_MIL);
});

Deno.bench("Binary Search", { group: "100K", baseline: true }, () => {
  binaryBenchSearch(CEM_MIL);
});
