dev:
  parcel src/index.html

bundle:
  parcel build src/index.html

deploy:
  rm -rf docs
  parcel build src/index.html --no-source-maps --out-dir docs

setup:
  yarn install

check:
  flow

test:
  jest

ci: setup check test bundle
