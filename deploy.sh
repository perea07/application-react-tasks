#/usr/bin/env sh
# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if yoy are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -b main
git add -A
git commit -m 'deploy'

# if you are desploying to https://<USERNAME>.github.io
# git push -f github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are desploying to https://<USERNAME>.github.io<REPO>
# git push -f github.com:perea07/calculator-react.git main:gh-pages

cd .