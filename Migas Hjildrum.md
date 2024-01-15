---
tags:
  - Henkilö/Haltija
type: henkilö
nimi: Migas Hjildrum
titteli: Herttua
rotu: Haltija
ikä: "13"
sijainti: 
järjestöt:
  - "[[Vuohiäidin kirkko.md|Vuohiäidin kirkko]]"
suku: "[[Hjildrumin haltijasuku.md|Hjildrumin haltijasuku]]"
elossa: true
lvl: 3
lokaatio: "[[Filverelin kirjasto.md|Filverelin kirjasto]]"
---

>[!col]
>>[!col-md-2]
>>### Kuvaus
>>%%KUVAUS%%
>>Nuori ruhtinas, kadonnut Risan alueella. 
[Giera Hjildrum](Giera%20Hjildrum.md) etsii häntä.
>>
>>Vaka-viisi löysi hänet [[Filverelin kirjasto]]sta piileksimästä. Hän oli tullut tapaamaan veljeään, joka lähti pyhiinvaellukselle kirjastoon.
>>
>>Hän on [[Nilas Hjildrum]]in pikkuveli. 
>>
>>Migas suostui olemaan hiljaa kirjastossa näkemistään asioista, jos [[Vaka-Viisi]] palauttaa hänet perheensä luo ilman vastineita.
>>%%KUVAUS
>
>>%%TIEDOT%%
>>![[IMG_3083.png]]
>> ## Migas Hjildrum
>>##### *`VIEW[{titteli}]`*
>>###### Rotu: `VIEW[{rotu}]`
>>###### Ikä: `VIEW[{ikä}]`
>>##### Sijainti: `VIEW[{lokaatio}][link]`
>>##### Järjestöt: `VIEW[{järjestöt}][link]`
>>##### Suku: `VIEW[{suku}][link]`
>>##### Lvl: `VIEW[{lvl}]`
>>##### Elossa:`VIEW[{elossa}]`

%%KUVAUS%%
...Kuvaus


### Tiedot
#### Titteli: 
`INPUT[text(title(Titteli:)):titteli]`
#### Rotu:
`INPUT[rodut][:rotu]`
#### Ikä:
`INPUT[text:ikä]`
#### Sijainti:
`INPUT[suggester(optionQuery(#Maantiede)):lokaatio]`
#### Järjestöt:
```meta-bind
INPUT[listSuggester(title(Järjestöt:),optionQuery("/")):järjestöt]
```
#### Suku:
`INPUT[suggester(title(Suku:),optionQuery("/")):suku]`
#### Lvl:
`INPUT[number:lvl]`
#### Elossa:
`INPUT[toggle:elossa]`








