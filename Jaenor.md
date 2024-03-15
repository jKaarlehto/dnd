---
tags:
  - Henkilö
type: henkilö
nimi: Jaenor
titteli: Vaskilaismatriisin äly
rotu: Haltija
ikä: 6000+
sijainti: 
järjestöt: []
suku: 
elossa: true
lvl:
---

>[!col]
>>[!col-md-2]
>>### Kuvaus
>>%%KUVAUS%%
>>Vaskilaismatriisiin kytketty haltijatutkijan tietoisuus. Tällä hetkellä kulkee [[Thaer A'jabar]]in matkassa.
>>Jaenorin tavoitteena tuhota [[Shial-Nagheraz]] ja sen liittolaiset. Hän on suostuvainen toimimaan henkilöiden kanssa, joiden tavoitteet edistävät tätä päämäärää.
>>
>>Jaenorin data-arkistot ovat korruptoituneet, mutta hän tietää varmuuskopioiden sijaitsevan [[Mylha Unarith]]issa. Jaenorin muistissa on paljon arvokasta tietoa kaukaisesta historiasta.
>>
>>###### Jaenorin paljastama tieto
>>Varmistetut Jumalentieetit:
>>
Uhat:
>>>001a ----
>>>002a Shial nageraz
>>>003a ----
>>
Entiteetti:
>>>002a ----
>>>002b ----
>>%%KUVAUS
>
>>%%TIEDOT%%
>>![[IMG_3083.png]]
>> ## Jaenor
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







