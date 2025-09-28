import * as core from "@actions/core"
import * as exec from "@actions/exec"

async function main() {

  // bun x surge --token 27c5a5e8c10bb6896be1e77ccb83499c --login um_oom@hotmail.com dist work-shop1.surge.sh

  // 1 token
  const token = core.getInput("token", {
    required: true,
    trimWhitespace: true
  })
  // 2 email
  const email = core.getInput("email", {
    required: true,
    trimWhitespace: true
  })
  // 3 dist folder
  const distFolder = core.getInput("dist-folder", {
    required: true,
    trimWhitespace: true
  })
  // 4 domain .surge.sh
  const domain = core.getInput("domain", {
    required: true,
    trimWhitespace: true
  })

  const command = `npx surge --token ${token} --login ${email} ${distFolder} ${domain}`
  return exec.exec(command)
}

main()
