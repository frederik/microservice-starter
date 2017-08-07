#!/bin/bash

cd $TRAVIS_BUILD_DIR/shared
npm install

cd $TRAVIS_BUILD_DIR/server/print
npm install

cd $TRAVIS_BUILD_DIR/server/web
npm install
