const assert = require('assert');
const { execFile } = require('child_process');
const { version } = require('../package.json');

execFile('node', ['./yong.js', '--version'], (error, stdout, stderr) => {
  if (error) throw error;
  try {
    assert.strictEqual(stdout.trim(), version);
    console.log('ok');
  } catch (e) {
    console.error('Version mismatch:', stdout.trim(), '!=', version);
    throw e;
  }
});
