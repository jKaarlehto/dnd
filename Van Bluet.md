---
tags:
  - Henkilö
type: henkilö
nimi: Van Bluet
titteli: Kardinaali
rotu: Ihminen
ikä: 
sijainti: 
järjestöt:
  - "[[Elhen kirkko.md|Elhen kirkko]]"
suku: 
elossa: true
lvl: 
---

>[!col]
>>[!col-md-2]
>>### Kuvaus
>>%%KUVAUS%%
>>[Elhen kirkon](Elhen%20kirkko.md) kardinaali. 
>>
>>>[!question] Vahvistamaton 
>>>Hän on mukana [leviävään kulkutautiin](Groteski%20kulkutauti.md) liittyvässä selvityksessä.
>>>>[!quote] Lähde 
>>>>[Selemdûrin varastetut kirjeet](Selemdûrin%20varastetut%20kirjeet.md)
>>%%KUVAUS
>
>>%%TIEDOT%%
>>![[IMG_3083.png]]
>> ## Van Bluet
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











