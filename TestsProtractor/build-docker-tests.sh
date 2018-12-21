#!/bin/bash
set -e

branch=$1
repo=ssh://git@gitlab.akka.eu:22522/aeag/siga/dispositif/frontend.git

if [ ! -d "build/frontend" ]; then
  [ -z "$branch" ] && \
   echo "ERROR: need to fill the parameter with the branch name" && \
   exit 1
   git clone $repo -b $branch build/frontend
fi
opt=""
cmd="docker build \
   --build-arg="HTTP_PROXY=http://lucas.dure:Folio109!!@172.25.254.203:9090" \
   -t siga/protractor:dispositif-${branch/\//-} $opt build/"
echo $cmd
eval $cmd

