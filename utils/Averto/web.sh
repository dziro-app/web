#!/bin/bash

BASE_DIR=/root/apps/dziro/web-app;

# =======================================================================
#
# 🏗️ This function moves to the repository dir and pull recent changes, also tries to install dependencies
#
# =======================================================================
function update_base {
  # Fix npm command recognition working with nvm
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
  [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

  # Move to working dir
  cd $BASE_DIR;

  # Update code from source
  git reset --hard;
  git pull origin main && echo "Updated!"; 

  npm i && echo "Installed! ";
}

# =======================================================================
#
# ⚙️ Build and move LANDING to WWW dir
#
# =======================================================================
function build_landing {
  # Move to landing app
  cd $BASE_DIR;
  cd ./apps/landing && echo "Moved";

  # Build prod version
  npm run build && echo "Builded !";

  # Copy result to www dir
  cp -r ./build/* /var/www/html/dziro/landing/;

  echo "dziro-landing updated!";
}

# =======================================================================
#
# ⚙️ Build and move PRO app to WWW dir
#
# =======================================================================
function build_pro {
  # Move to pro app
  cd $BASE_DIR;
  cd ./apps/pro && echo "Moved";

  # Build prod version
  npm run build && echo "Builded !";

  # Copy result to www dir
  cp -r ./dist/* /var/www/html/dziro/pro/;

  echo "dziro-pro updated!";
}

# =======================================================================
#
# ⚙️ Build and move FREE app to WWW dir
#
# =======================================================================

function build_free {
  # Move to pro app
  cd $BASE_DIR;
  cd ./apps/free && echo "Moved";

  # Build prod version
  npm run build && echo "Builded !";

  # Copy result to www dir
  cp -r ./dist/* /var/www/html/dziro/pro/;

  echo "dziro-free updated!";
}

# =======================================================================
#
# 🛤️ Update all apps
# =======================================================================

update_base;
build_pro;
build_free;
build_landing;
