const core = require('@actions/core');
const param1 = core.getInput('param1');
const param2 = core.getInput('param2');
console.log(`Ejecutando tests ${param1} y ${param2}`);
