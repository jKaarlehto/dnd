---
tags:
  - Henkilö/Johtaja
  - Henkilö/Grelekki
  - Henkilö/Elossa

type:henkilö
 
nimi: Azhar
titteli:
rotu: 
ikä: 
sijainti: 
järjestöt: 
suku:
elossa: 
lvl: 


aliases:
- 
---
>[!col]
>>[!col-md-2]
>>### Kuvaus
>>%%KUVAUS%%
>>[Selemdûrin Maagikillan](Selemdûrin%20Maagikilta.md) arkkimaagi ja johtaja.
>>
>>Pitää kirkolta salassa hallussaan [Kalman sydäntä](Kalman%20sydän). Hänen aikeensa eivät ole selvät, eikä hänen alaisensa [Maisteri Balasár](Maisteri%20Balasár.md) vaikuta luottavan häneen täysin.
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
[Maisteri Balasár](Maisteri%20Balasár.md)
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




