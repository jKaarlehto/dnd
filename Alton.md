---
tags:
  - Henkilö/Elossa
type: henkilö
nimi: Alton
titteli: Varkainkillan jäsen
rotu: Ihminen
ikä: 
sijainti: 
järjestöt:
  - 
  - "[[Varkainkilta.md|Varkainkilta]]"
suku: 
elossa: true
lvl: 
aliases:
  - 
lokaatio: "[[Selemdûr.md|Selemdûr]]"
---
>[!col]
>>[!col-md-2]
>>### Kuvaus
>>%%KUVAUS%%
>>[Varkainkilta](Varkainkilta.md)n jäsen, [Shiva](Shiva.md)n mentori.
>>%%KUVAUS
>
>>%%TIEDOT%%
>>![[IMG_3083.png]]
>> ## Alton
>>##### *`VIEW[{titteli}]`*
>>###### Rotu: `VIEW[{rotu}][link]`
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







