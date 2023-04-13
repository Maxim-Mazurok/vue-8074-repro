# repro for https://github.com/vuejs/core/issues/8074

## To run

1. `git clone https://github.com/Maxim-Mazurok/vue-8074-repro`
1. `cd vue-8074-repro`
1. `nvm i 18.13.0`
1. `npm ci`
1. `npx vitest`
1. Observe:

   ```
    Vitest caught 2 unhandled errors during the test run.
    This might cause false positive tests. Resolve unhandled errors to make sure your tests are not affected.

    ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Unhandled Rejection ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
    RangeError: Maximum call stack size exceeded
    ❯ node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:72:19
    ❯ formatTrace node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:72:11
    ❯ warn node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:38:36
    ❯ Object.PublicInstanceProxyHandlers.ownKeys node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:3255:9
    ❯ getKeys node:internal/util/inspect:711:19
    ❯ formatRaw node:internal/util/inspect:947:12
    ❯ formatValue node:internal/util/inspect:841:10
    ❯ inspect node:internal/util/inspect:365:10

    This error originated in "src/App.spec.tsx" test file. It doesn't mean the error was thrown inside the file itself, but while it was running.

    ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Unhandled Rejection ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
    RangeError: Maximum call stack size exceeded
    ❯ warn node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:33:26
    ❯ Object.PublicInstanceProxyHandlers.ownKeys node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:3255:9
    ❯ getKeys node:internal/util/inspect:711:19
    ❯ formatRaw node:internal/util/inspect:947:12
    ❯ formatValue node:internal/util/inspect:841:10
    ❯ inspect node:internal/util/inspect:365:10
    ❯ formatWithOptionsInternal node:internal/util/inspect:2273:40
    ❯ formatWithOptions node:internal/util/inspect:2135:10
    ❯ Console.value node:internal/console/constructor:349:14

    This error originated in "src/App.spec.tsx" test file. It doesn't mean the error was thrown inside the file itself, but while it was running.
    ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
   ```
