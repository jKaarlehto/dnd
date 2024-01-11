---
tags:
  - Henkilö/Haltija
  - Henkilö/Johtaja
  - Henkilö/Elossa
type: henkilö
nimi: Esajas Hjildrum
titteli: Aatelinen
rotu: Haltija
ikä: 
sijainti: 
järjestöt: 
suku: "[[Hjildrumin haltijasuku.md|Hjildrumin haltijasuku]]"
elossa: true
lvl: 
---

>[!col]
>>[!col-md-2]
>>### Kuvaus
>>%%KUVAUS%%
>>
>>[Migas Hjildrum](Migas%20Hjildrum.md)in äiti. [[Esajas Hjildrum]]in vaimo.
>>%%KUVAUS
>
>>%%TIEDOT%%
>>![[IMG_3083.png]]
>> ## Esajas Hjildrum
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









