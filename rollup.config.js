import svgr       from "@svgr/rollup"
import commonjs   from "rollup-plugin-commonjs"
import resolve    from "rollup-plugin-node-resolve"
import external   from "rollup-plugin-peer-deps-external"
import postcss    from "rollup-plugin-postcss"
import typescript from "rollup-plugin-typescript2"

import pkg from "./package.json"

export default {
    input: "src/index.ts",

    output: [
        {
            file: pkg.main,
            format: "cjs",
            exports: "named",
            sourcemap: true,
        },

        {
            file: pkg.module,
            format: "es",
            exports: "named",
            sourcemap: true,
        },
    ],

    plugins: [
        external(),

        resolve(),

        postcss({
            modules: false,
        }),

        svgr(),

        typescript({
            rollupCommonJSResolveHack: true,
            exclude: "**/__tests__/**",
            clean: true,
        }),

        commonjs(),
    ],
}
