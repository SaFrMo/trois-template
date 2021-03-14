Scaffold for [TroisJS](https://github.com/troisjs/trois) projects that supports standalone `.glsl, .vert, .frag` shader files.

Recommended use: Add this to your bash profile:

```sh
trois(){
  npm init @vitejs/app "${1}"
  cd "${1}"
  rm -rf ./src/assets
  rm ./src/components/HelloWorld.vue
  npm i -D rollup-plugin-glslify sass
  npm i three troisjs
  npx degit safrmo/trois-template/template#main --force
  npm i
  cd ../
  echo "Done. Run cd ${1} and npm run dev."
}

alias troisjs="trois"
```

Then run `trois your-project-name`.