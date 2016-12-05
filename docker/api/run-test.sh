docker run --rm -it \
--link minha-cidade-transparente-mongo-test:mongo \
-v /Users/jeanpinzon/workspace/minha-cidade-transparente/Api:/usr/src/app \
-e NODE_ENV='test' \
--name minha-cidade-transparente-api \
minha-cidade-transparente/api npm test
