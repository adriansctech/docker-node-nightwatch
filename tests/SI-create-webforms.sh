#!/bin/bash
for i in {1..10}; do ./node_modules/.bin/nightwatch tests/ostelea-pro.js; sleep 5; done