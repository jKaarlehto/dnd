---
tags:
  - Henkilö
puoliso: "[[Esajas Hjildrum]]"
lapset: "[[Migas Hjildrum]]"
type: henkilö
nimi: Herra Hjildrum
titteli: Suvun Keulamies
rotu: Haltija
ikä: 
sijainti: 
järjestöt: 
suku: "[[Hjildrumin haltijasuku.md|Hjildrumin haltijasuku]]"
elossa: true
lvl: 
lokaatio: "[[Risa.md|Risa]]"
---

>[!col]
>>[!col-md-2]
>>### Kuvaus
>>%%KUVAUS%%
>>
>>[Hjildrumin haltijasuvun](Hjildrumin%20haltijasuku.md) johtaja.
>>
>>Hänen poikansa [Migas Hjildrum](Migas%20Hjildrum.md) on kadoksissa Risan alueella.
>>%%KUVAUS
>
>>%%TIEDOT%%
>>![[IMG_3083.png]]
>> ## Herra Hjildrum
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







