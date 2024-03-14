---
tags:
  - Henkilö/Johtaja
  - Henkilö/Elossa
edeltäjä: "[[Elhe]]"
type: henkilö
nimi: Aegor El'haera
titteli: Elhen Imperiumin Keisari
rotu: Ihminen
ikä: 
sijainti: "[[Fel-Maul]]"
järjestöt:
  - "[[Elhen Imperiumi]]"
suku: "[[El'haeran aatelishuone]]"
elossa: true
lvl: 
alaiset:
  - "[[Elhen Imperiumi]]"
---

>[!col]
>>[!col-md-2]
>>### Kuvaus
>>%%KUVAUS%%
>>[Elhen Imperiumi](Elhen%20Imperiumi.md)n keisari. Hänen kerrotaan olevan [[Elhe]]n suora jälkeläinen
>>%%KUVAUS
>
>>%%TIEDOT%%
>>![[IMG_3083.png]]
>> ## Aegor El'haera
>>##### *`VIEW[{titteli}]`*
>>###### Rotu: `VIEW[{rotu}]`
>>###### Ikä: `VIEW[{ikä}]`
>>##### Sijainti: `VIEW[{lokaatio}][link]`
>>##### Järjestöt: `VIEW[{järjestöt}][link]`
>>##### Suku: `VIEW[{suku}][link]`
>>##### Lvl: `VIEW[{lvl}]`
>>##### Elossa:`VIEW[{elossa}]`

%%KUVAUS%%



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









