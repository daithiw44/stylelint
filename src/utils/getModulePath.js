import { configurationError } from "."
import resolveFrom from "resolve-from"

export default function (
  basedir: string,
  lookup: string,
): string {
  // First try to resolve from the provided directory,
  // then try to resolve from process.cwd.
  let path = resolveFrom(basedir, lookup)
  if (!path) {
    path = resolveFrom(process.cwd(), lookup)
  }
  if (!path) {
    throw configurationError(
      `Could not find "${lookup}". Do you need a \`configBasedir\`?`
    )
  }
  return path
}
