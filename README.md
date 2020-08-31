## Velkommen til **[Gummiand.no](http://gummiand.no)**, den "uoffiselle survival guiden for studenter ved informatikk!

Dette er en samling tips og triks for nye studenter som "veteranene" ved II har samlet gjennom sin tid ved UiB.

Så her finner du blant annet:

- kjekke rabatter,
- forkortelser du må kunne
- tips til programmeringsfagene
- hvem du skal snakke med ved spørsmål om studiet (og hvor du finner dem)
- Informasjon om echo
- bedriftspresentasjoner
- undergrupper

Om det er noe som mangler, eller er galt er det bare å clone repoet og lage en pull request. Eller ta kontakt med en maintainer.

## Utvikling

Dersom du vil se lokalt det du jobber med kan du bruke Docker til å vise siden lokalt:

```sh
$ docker build -t gummiand .
$ docker run -it --rm -p 4000:4000 -v "$PWD":/usr/src/app:z --name gummiand gummiand
```

Og åpne `localhost:4000` i nettleseren din. Men du skal ikke trenge det med mindre du gjør større endringer, som f.eks. å flytte filer eller konfigurere rotfiler osv.
