---
tags:
  - Henkilö
type: henkilö
nimi: Lloer
titteli: Kaivoksenhoitaja
rotu: Haltija
ikä: ""
sijainti: 
järjestöt: []
suku: 
elossa: true
lvl: 
lokaatio: "[[Risa.md|Risa]]"
---

>[!col]
>>[!col-md-2]
>>### Kuvaus
>>%%KUVAUS%%
>>
>>[Kidan](Kita.md) kaivoksen työnjohtaja. 
>>
>>###### Tuntomerkit
>>- Lyhyt haltijaksi
>>%%KUVAUS
>
>>%%TIEDOT%%
>>![[Pasted image 20240107192533.png]]
>> ## Lloer
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







