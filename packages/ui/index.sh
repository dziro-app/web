#!/bin/bash

## Global colors
BLUE="\e[34m"
GREEN="\e[32m"
RED="\e[31m"
YELLOW="\e[33m"
RESET="\e[0m"

## Global vars
LIB_DIR="./lib"
DEST="index.js"
EXT="svelte"

components=$(ls ${LIB_DIR});

echo -n "" > "index.js";


for i in $components; do
  file=$(echo $i | sed "s/\.${EXT}//")
  echo  "import ${file} from \"${LIB_DIR}/${i}\"" >> ${DEST};
done

echo -e "\nexport {" >> ${DEST};

for i in $components; do
  file=$(echo $i | sed "s/\.${EXT}//")
  echo "  ${file}," >> ${DEST};
done
echo "}" >> ${DEST};

echo -e "${YELLOW}Generated index file: ${RESET}"
echo -e "${BLUE}";
cat "${DEST}";
echo -e "${RESET}";
