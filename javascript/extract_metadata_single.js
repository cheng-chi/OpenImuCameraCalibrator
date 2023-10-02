#!/usr/bin/env node
// taken from https://github.com/kws/GoProTelemetryExtract/blob/master/src/extract.js
const fs = require('fs');
const path = require('path');
const { extractInfo } = require('./helpers/mp4reader');

if (process.argv.length < 4) {
  console.error('Expected 2 arguments!');
  console.error('node extract_metadata_from_video.js INPUT_VIDEO OUTPUT_JSON');
  process.exit(1);
}

let input_video = process.argv[2];
let output_json = process.argv[3];

console.log("Input video path: ".concat(input_video));
console.log("Output file will be: ".concat(output_json));

extractInfo(input_video, output_json)
    .then(() => console.log("Done"))
    .catch(err => console.error("An error occurred", err));
