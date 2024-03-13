---
tags:
  - Henkilö
type: henkilö
nimi: Rhendra
titteli: Lumousmaisteri
rotu: Ihminen
ikä: 
sijainti: "[[Selemdûr]]"
järjestöt:
  - "[[Selemdûrin Maagikilta]]"
suku: 
elossa: true
lvl:
---

>[!col]
>>[!col-md-2]
>>### Kuvaus
>>%%KUVAUS%%
>>Vanha mukava rouva. Antoi Thaerille ja Balvadurille kirjastokortit. Vähän seniili.
>>%%KUVAUS
>
>>%%TIEDOT%%
>>![[IMG_3083.png]]
>> ## Rhendra
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







