# mama-repo

monorepo with turborepo, CRA, node app, vite app

find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +
delete folders one by one and print the folder being deleted:
find . -name 'node_modules' -type d -prune -print -exec rm -rf '{}' \;
