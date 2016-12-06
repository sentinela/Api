docker run --rm -it \
-p 8001:80 \
--link minha-cidade-transparente-mongo-dev:mongo \
-v /Users/jeanbauer/Desktop/projects/sentinela/Api:/usr/src/app \
-e NODE_ENV='dev' \
--name minha-cidade-transparente-api \
minhacidadetransparente/api npm start
