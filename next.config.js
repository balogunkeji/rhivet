/** @type {import('next').NextConfig} */
module.exports = {
compiler: {
styledComponents: {
displayName: true,
ssr: true,
fileName: true,
topLevelImportPaths: [],
meaninglessFileNames: [],
cssProp: true,
namespace: "",
},
},
reactStrictMode: true,
};
