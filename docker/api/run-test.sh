docker run --rm -it \
--link minha-cidade-transparente-mongo-test:mongo \
-v /Users/jeanbauer/Desktop/projects/sentinela/Api:/usr/src/app \
-e NODE_ENV='test' \
--name minha-cidade-transparente-api \
minhacidadetransparente/api npm test
