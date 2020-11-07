dev:
  parcel src/index.html

bundle:
  parcel build src/index.html

deploy:
  rm -rf docs
  parcel build src/index.html --no-source-maps --out-dir docs

setup:
  yarn install

type-check:
  flow

test:
  jest

format-check:
  prettier --check src/*
  prettier --check src/**/*

ci: setup type-check test format-check bundle
