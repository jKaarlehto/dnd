---
tags:
  - Henkilö
type: henkilö
nimi: Krall Hios
titteli: Maagikillan kirjastonhoitaja
rotu: Grelekki
ikä: 
sijainti: 
järjestöt: 
suku: 
elossa: true
lvl: 
lokaatio: "[[Selemdûr.md|Selemdûr]]"
---

>[!col]
>>[!col-md-2]
>>### Kuvaus
>>%%KUVAUS%%
>>[[Balasár Ghesh]]in seuraaja. Toimii väliaikaisesti pestissä balasarin kadottua.
>>Tiukkapipoinen kaveri, erittäin pikkutarkka. Erikoistunut arkistointiin?
>>#### Ura
>>Osana kirjoittamista: 
>>**Historiallinen selvitys paikallaan olevien suojausloitsujen tekemisestä** - Krall listattuna suojauskehien eksperttinä selittämässä miten grelin thaeromi on epäonnistunut lähestymistapa suojauskehiin.
>>
>>**Taikakääröjen ja sitomakaavojen tutkimus** - Miten eteeriä voidaan sitoa tehokkaasti kääröihin yms. teoreettinen perusteons.
>>%%KUVAUS
>
>>%%TIEDOT%%
>>![[IMG_3083.png]]
>> ## Krall
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







