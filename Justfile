dev:
  webpack-dev-server --content-base dist --mode development

bundle:
  webpack --content-base dist --mode production

setup:
  yarn install

check:
  flow

test:
  jest

ci: setup check test bundle
