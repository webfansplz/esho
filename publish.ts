import {$} from "zx"
import {io} from "fsxx"

io.json.spaces = 2

const {data: pkg, save} = await io.json<{
  name: string
  version: string
}>`package.json`

pkg.name = "esho"
await save()

console.log("> publish esho v" + pkg.version)
await $`npm publish`
