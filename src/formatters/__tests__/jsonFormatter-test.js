import jsonFormatter from "../jsonFormatter"
import test from "tape"

test("json formatter", t => {
  const results = [{
    "source":  "path/to/file.css",
    "errored": true,
    "warnings":[{
      "line": 1,
      "column": 2,
      "rule": "bar",
      "severity": "error",
      "text": "Unexpected foo",
    }],
    "deprecations": [],
    "invalidOptionWarnings":[],
  }]

  t.deepEqual(JSON.parse(jsonFormatter(results)), results)
  t.end()
})
