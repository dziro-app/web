import BluePrint from  "svelte-blueprint/src/BluePrint.js"
import fs from "fs"

const defaultOptions = {
  src: 'src/Components',
  dst: 'src/Docs'
}

export default function ViteSvelteBlueprint(opts) {
  const options = {
    ...defaultOptions,
    ...opts
  }

  const sourcePath = options.src
  const dstPath = options.dst + '/Pages'

  if(!fs.existsSync(sourcePath)) throw new Error(`The path ${sourcePath} does not exists`)
  if(!fs.existsSync(dstPath)) fs.mkdirSync(dstPath, {recursive: true})

  const sd = new BluePrint(sourcePath, dstPath)
  if(options.template) sd.setTemplate(options.template)

  let srcPath = options.src.split("../")
  srcPath = srcPath[srcPath.length -1]

  return {
    name: 'svelteBluePrint-hmr',
    enforce: 'post',
    // HMR
    
    handleHotUpdate({ file, server }) {
      if (file.includes(srcPath) &&
      file.endsWith('.svelte')) {
        sd.doDir()        

        server.ws.send({
          // type: 'full-reload',          
          type: 'update',          
          path: '*'
        });
      }
    },
  }
}