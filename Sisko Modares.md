---
tags:
  - Henkilö
type: henkilö
nimi: Sisko Modares
titteli: Vaski-Inkvisiittori
rotu: Ihminen
ikä: 
sijainti: "[[Syvälä]]"
järjestöt:
  - "[[Ordo auxiliarus]]"
suku: 
elossa: false
lvl: 
lokaatio: "[[Syvälä.md|Syvälä]]"
---

>[!col]
>>[!col-md-2]
>>### Kuvaus
>>%%KUVAUS%%
>>Elhen kirkon jäsen, joka lähetettiin tutkimaan [[Syvälä]]n [[Kähykuolema]]tapauksia. Hänet löydettiin lukittuna huoneesta [[Veli Galindus]] kanssa uponneesta tornista. Vaikutti siltä että he olivat odottaneet tornissa hyvin kauan.
>>Sisko Modares hyökkäsi [[Vaka-Viisi|Vaka-viiden]] kimppuun, ja kuoli taistelussa.
>>
>>%%KUVAUS
>
>>%%TIEDOT%%
>>![[IMG_3083.png]]
>> ## Sisko Modares
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







