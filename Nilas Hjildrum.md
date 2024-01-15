---
tags:
  - Henkilö
type: henkilö
nimi: Nilas Hjildrum
titteli: Herttua
rotu: Haltija
ikä: n.20
sijainti: 
järjestöt:
  - "[[Vuohiäidin kirkko.md|Vuohiäidin kirkko]]"
suku: "[[Hjildrumin haltijasuku.md|Hjildrumin haltijasuku]]"
elossa: false
lvl: 
lokaatio: "[[Filverelin kirjasto.md|Filverelin kirjasto]]"
---

>[!col]
>>[!col-md-2]
>>### Kuvaus
>>%%KUVAUS%%
>>[[Esajas Hjildrum]] vanhin poika, joka lähti pyhiinvaeltamaan [[Filverelin kirjasto]]on. Hän on kiinnostunut [[Vuohiäiti]]n kirkosta.
>>
>>Hän on tuleva suvun perillinen
>>
>>... Ellei häntä olisi uhrattu väärille jumalille ja silvottu Vaka-viiden toimesta. Nilas on kuolleena Filverelin kirjastossa.
>>%%KUVAUS
>
>>%%TIEDOT%%
>>![[IMG_3083.png]]
>> ## Nilas Hjildrum
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









