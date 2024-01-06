---
tags:
  - Henkilö/Elossa
  - Henkilö/Johtaja
type: henkilö
nimi: Dak
titteli: 
rotu: Ihminen
ikä: 
sijainti: 
järjestöt: 
suku: 
elossa: true
lvl: 
---

>[!col]
>>[!col-md-2]
>>### Kuvaus
>>%%KUVAUS%%
>>
>>[Varkainkilta](Varkainkilta.md)n valtuutettu. Vanha äijä
>>
>>>[!question] Vahvistamaton 
>>> Oli mukana juonssa toimittaa [Azhar](Azhar.md)ille [Kalman sydän](Kalman%20sydän)
>>> Tilannut pelaajahahmojen salamurhan.
[Shiva](Shiva.md) uskoo, että Dak liittyy jotenkin [Selemdûrin varastettuihin kirjeisiin](Selemdûrin%20varastetut%20kirjeet.md) ja Selemdurin vakoiluun.
>>
>>%%KUVAUS
>
>>%%TIEDOT%%
>>![[IMG_3083.png]]
>> ## Dak
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











