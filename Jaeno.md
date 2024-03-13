---
tags:
  - Henkilö
type: henkilö
nimi: Jaeno
titteli: Arven maisteri
rotu: Puolituinen
ikä: "60"
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
>>Paikannusloitsujen enteiden kosmologian ja muun sellaisen proffa.
>>%%KUVAUS
>
>>%%TIEDOT%%
>>![[IMG_3083.png]]
>> ## Jaeno
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







