import module from 'module';

export default {
    input: 'src/index.js',
    output: [
        {
            file: 'rollup/index.js',
            format: 'cjs',
            interop: 'default',
            sourcemap: true,
        },
        {
            file: 'rollup/index.mjs',
            format: 'es',
            sourcemap: true,
        },
    ],
    external: module.builtinModules,
    plugins: [],
};
