docker run --rm -it \
-p 8001:80 \
--link minha-cidade-transparente-mongo-dev:mongo \
-v /Users/jeanpinzon/workspace/minha-cidade-transparente/Api:/usr/src/app \
-e NODE_ENV='dev' \
--name minha-cidade-transparente-api \
minha-cidade-transparente/api npm start
