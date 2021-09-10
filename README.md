# jest-heap-graph

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/jest-heap-graph.svg)](https://npmjs.org/package/jest-heap-graph)
[![Downloads/week](https://img.shields.io/npm/dw/jest-heap-graph.svg)](https://npmjs.org/package/jest-heap-graph)
[![License](https://img.shields.io/npm/l/jest-heap-graph.svg)](https://github.com/chauchakching/jest-heap-graph/blob/master/package.json)

Command line tool to plot jest tests heap usage graph. 

Help you observe the memory usage and find the root cause of memory leak.

The tool run your command, extract the `stderr` and plot graph using [ink](https://github.com/vadimdemedes/ink) and [asciichart](https://github.com/kroitor/asciichart)

# Getting started

Put your command that run jest tests as the first argument.

```bash
# install cli globally
> npm install -g jest-heap-graph

# or use npx to run it directly
> npx jest-heap-graph "yarn jest --logHeapUsage"

# run the globally installed cli
> jest-heap-graph "yarn jest --logHeapUsage"
PASS src/test/dummy-113..test.js (1929 MB heap size)
PASS src/test/dummy-114.test.js (1940 MB heap size)
PASS src/test/dummy-115.test.js (1959 MB heap size)

Test Suites: 115 passed, 115 total
Tests:       115 passed, 115 total
Snapshots:   0 total
Time:        30.371 s, estimated 31 s
Ran all test suites.

--- n: 115 ---
    1959.00 ┤                                                                                        ╭
    1902.30 ┤                                                                                   ╭────╯
    1845.60 ┤                                                                         ╭╮   ╭────╯
    1788.90 ┤                                                                       ╭╮│╰───╯
    1732.20 ┤                                                                  ╭╮ ╭─╯╰╯
    1675.50 ┤                                                              ╭╮╭─╯╰─╯
    1618.80 ┤                                               ╭╮        ╭╮╭╮ │╰╯
    1562.10 ┤                                               ││     ╭╮ │╰╯╰─╯
    1505.40 ┤                                     ╭╮  ╭╮ ╭╮╭╯│╭╮ ╭─╯╰─╯
    1448.70 ┤                                     ││ ╭╯│╭╯╰╯ ╰╯╰─╯
    1392.00 ┤                               ╭╮   ╭╯│╭╯ ││
    1335.30 ┤                           ╭╮ ╭╯│ ╭─╯ ││  ╰╯
    1278.60 ┤                           ││ │ │╭╯   ╰╯
    1221.90 ┤                    ╭╮    ╭╯│╭╯ ╰╯
    1165.20 ┤                ╭╮ ╭╯│╭╮╭─╯ ╰╯
    1108.50 ┤        ╭╮  ╭╮ ╭╯│╭╯ ││╰╯
    1051.80 ┤    ╭╮  ││ ╭╯│╭╯ ││  ╰╯
     995.10 ┤╭╮  ││ ╭╯│╭╯ ││  ╰╯
     938.40 ┤││ ╭╯│╭╯ ╰╯  ╰╯
     881.70 ┼╯│╭╯ ╰╯
     825.00 ┤ ╰╯
```
