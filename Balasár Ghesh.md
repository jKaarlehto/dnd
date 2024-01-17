---
tags:
  - Henkilö
type: henkilö
nimi: Balasár Ghesh
titteli: Kirjallisuuden Maisteri
rotu: Grelekki
ikä: N. 50
sijainti: 
järjestöt:
  - "[[Selemdûrin Maagikilta.md|Selemdûrin Maagikilta]]"
suku: 
elossa: 
lvl: 
lokaatio: "[[Selemdûr.md|Selemdûr]]"
---

>[!col]
>>[!col-md-2]
>>### Kuvaus
>>%%KUVAUS%%
>>[Selemdûrin maagikillan](Selemdûrin%20Maagikilta.md) maisteri. Kirjaston, taikakääröjen laatimisen ja taijan historian mestari.
>>
>>Balasarin toimisto sijaitsee Selemdurin luoteistornissa.
>>
>>Balasar on ollut kateissa [[Maagikillan tornien räjähdys|Maagikillan tornien räjähdyksen]] jälkeen
>>
>>%%KUVAUS
>
>>%%TIEDOT%%
>>![[Pasted image 20240118010940.png]]
>> ## Balasár Ghesh
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








