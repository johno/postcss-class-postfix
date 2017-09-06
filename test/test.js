import fs from 'fs'
import test from 'ava'
import postcss from 'postcss'
import classPostfix from '../'

test('postcss-class-postfix', t => {
  t.plan(1)

  testFixture(t, 'input.css', 'output.css')
})

function fixture (name) {
  return fs.readFileSync('test/fixtures/' + name, 'utf8')
}

function testFixture (t, input, output, opts) {
  const result = postcss([ classPostfix('-bar') ])
      .process(fixture(input))

  t.is(result.css, fixture(output))
}
