---
tags:
  - Henkilö
type: henkilö
nimi: Al'azir
titteli: 
rotu: 
ikä: 
sijainti: 
järjestöt: []
suku: 
elossa: 
lvl: 
lokaatio: "[[Ûhm-gwe.md|Ûhm-gwe]]"
---

>[!col]
>>[!col-md-2]
>>### Kuvaus
>>%%KUVAUS%%
>>[Uhm'gweläinen](Ûhm-gwe.md) tähtitieteilijä. 
>>
>>
>>>[!question] Vahvistamaton 
>>>Hänen muistiinpanojaan on löytynyt [Ralfphonin kirjaston vanhasta siivestä](Ralfonin%20kirjasto.md).
>>>>[!quote] Lähde
>>>>[Tähtitieteilijän muistiinpanot](Tähtitieteilijän%20muistiinpanot.md)
>>>>
>>%%KUVAUS
> 
>>%%TIEDOT%%
>>![[IMG_3083.png]]
>> ## Al'azir
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







