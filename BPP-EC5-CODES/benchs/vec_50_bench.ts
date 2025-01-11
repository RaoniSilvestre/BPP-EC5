import { CINQUENTA } from "../src/utils/consts.ts";
import {
  binaryBenchSearch,
  linearBenchSearch,
} from "../src/utils/generateBench.ts";

Deno.bench("Linear Search", { group: "50" }, () => {
  linearBenchSearch(CINQUENTA);
});

Deno.bench("Binary Search", { group: "50", baseline: true }, () => {
  binaryBenchSearch(CINQUENTA);
});
