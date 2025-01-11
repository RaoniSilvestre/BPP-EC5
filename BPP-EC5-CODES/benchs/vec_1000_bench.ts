import { MIL } from "../src/utils/consts.ts";
import {
  binaryBenchSearch,
  linearBenchSearch,
} from "../src/utils/generateBench.ts";

Deno.bench("Linear Search", { group: "1K" }, () => {
  linearBenchSearch(MIL);
});

Deno.bench("Binary Search", { group: "1K", baseline: true }, () => {
  binaryBenchSearch(MIL);
});
