---
tags:
  - Henkilö/Ihminen
  - Henkilö/Elossa
type: henkilö
nimi: Balokim A'jabar
titteli: 
rotu: Ihminen
ikä: "52"
sijainti: 
järjestöt: 
suku: "[[A'jabarin suku.md|A'jabarin suku]]"
elossa: true
lvl: 
lokaatio: "[[Arnakeshin valtakunta.md|Arnakeshin valtakunta]]"
---

>[!col]
>>[!col-md-2]
>>### Kuvaus
>>%%KUVAUS%%
>>
>> [A'jabarin suvun](A'jabarin%20suku.md) ruhtinas.
>>
>>[Zahhak A'jabar](Zahhak%20A'jabar.md)in veli.
>>%%KUVAUS
>
>>%%TIEDOT%%
>>![[IMG_3083.png]]
>> ## Balokim A'jabar
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







