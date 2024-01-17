---
tags:
  - Henkilö/Johtaja
  - Henkilö/Grelekki
  - Henkilö/Elossa
type: henkilö
nimi: Azhar
titteli: Arkkimaagi
rotu: Grelekki
ikä: 
sijainti: 
järjestöt:
  - "[[Selemdûrin Maagikilta.md|Selemdûrin Maagikilta]]"
suku: 
elossa: true
lvl: 
aliases: 
lokaatio: "[[Ûhm-gwe.md|Ûhm-gwe]]"
liittolaiset: "[[Leichten aatelishuone]]"
---
>[!col]
>>[!col-md-2]
>>### Kuvaus
>>%%KUVAUS%%
>>[Selemdûrin Maagikillan](Selemdûrin%20Maagikilta.md) arkkimaagi ja johtaja.
>>
>>Pitää kirkolta salassa hallussaan [Kalman sydäntä](Kalman%20sydän). Hänen aikeensa eivät ole selvät, eikä hänen alaisensa [Balasár Ghesh](Balasár%20Ghesh.md) vaikuta luottavan häneen täysin.
>>
>>Balasar uskoo Azharin havittelevan [[Traakkilainen imperiumi]]n uudelleennousua, ja paikkaa seuraavana Karmiinikuninkaana.
>>%%KUVAUS
>
>>%%TIEDOT%%
>>![[Azhar.png]]
>> ## Azhar
>>##### *`VIEW[{titteli}]`*
>>###### Rotu: `VIEW[{rotu}][link]`
>>###### Ikä: `VIEW[{ikä}]`
>>##### Sijainti: `VIEW[{lokaatio}][link]`
>>##### Järjestöt: `VIEW[{järjestöt}][link]`
>>##### Suku: `VIEW[{suku}][link]`
>>##### Lvl: `VIEW[{lvl}]`
>>##### Elossa:`VIEW[{elossa}]`

%%KUVAUS%%
### Yhteydet:
[Balasár Ghesh](Balasár%20Ghesh.md)
[Selemdûrin Maagikilta](Selemdûrin%20Maagikilta.md)


### Tiedot
#### Titteli: 
`INPUT[text(title(Titteli:)):titteli]`
#### Rotu:
`INPUT[rodut][:rotu]`
#### Ikä:
`INPUT[number:ikä]`
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




