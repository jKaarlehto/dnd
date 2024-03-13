---
tags:
  - Henkilö
type: henkilö
nimi: Veli Galindus
titteli: Vaski Inkvisiittori
rotu: Ihminen
ikä: 
sijainti: "[[Syvälä]]"
järjestöt:
  - "[[Ordo hereticus]]"
suku: 
elossa: false
lvl:
---

>[!col]
>>[!col-md-2]
>>### Kuvaus
>>%%KUVAUS%%
>>Elhen kirkon jäsen, joka lähetettiin tutkimaan [[Syvälä]]n [[Kähykuolema]]tapauksia. Hänet löydettiin lukittuna huoneesta [[Sisko Modares]]in kanssa uponneesta tornista. Vaikutti siltä että he olivat odottaneet tornissa hyvin kauan.
>>
>>Veli Galindus hyökkäsi [[Vaka-Viisi|Vaka-viiden]] kimppuun, ja kuoli taistelussa.
>>%%KUVAUS
>
>>%%TIEDOT%%
>>![[IMG_3083.png]]
>> ## Veli Galindus
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








