---
tags:
  - Henkilö
type: henkilö
nimi: Kääpiökuningas
titteli: Kuningas
rotu: Kääpiö
ikä: 100+
sijainti: 
järjestöt:
  - "[[Nori-Koldhazâd|Nori-Koldhazâd]]"
suku: 
elossa: 
lvl: 
---

>[!col]
>>[!col-md-2]
>>### Kuvaus
>>%%KUVAUS%%
>> 
>> [[Nori-Koldhazâd|Pohjoisten kääpiömaiden]] kuningas [[Pohjoisen kapina]]n aikaan, joka puolusti [[Iki-Koivu]]a [[Shial-Nagheraz]]in joukoilta.
>>  
>>*![[Kidan alttari#^c623f7]]*
>>
>>%%KUVAUS
>
>>%%TIEDOT%%
>>![[IMG_3083.png]]
>> ## Kääpiökuningas
>>##### *`VIEW[{titteli}]`*
>>###### Rotu: `VIEW[{rotu}]`
>>###### Ikä: `VIEW[{ikä}]`
>>##### Sijainti: `VIEW[{lokaatio}][link]`
>>##### Järjestöt: `VIEW[{järjestöt}][link]`
>>##### Suku: `VIEW[{suku}][link]`
>>##### Lvl: `VIEW[{lvl}]`
>>##### Elossa:`VIEW[{elossa}]`

%%KUVAUS%%
>[!question] Vahvistamaton 
>Kuninkaan sielu on uhrattu [[Filverelin Sampo]]oon. 
>Tai
>==[[Greli]] tappoi hänet armosta/uhrina==
>>[!quote] Lähteet
>> [[Filverelin Sampo]] on kultainen, joka sopii kuvaukseen.
>> 
>> Toisaalta niin ovat myös Grelin suomut. Kidan alttarin patsaassa mainitaan myös Grelin lentäneen kohti itää verisin kynsin. Ralfonin kirjaston arvoituksissa sanotaan seuraavaa:
>>  
>> ![[Ralfonin kirjaston arvoitukset#^cbf1ca]]
>
>> Todennäköisesti siis [[Bôl-Thazâdin kadonnut kaupunki|Bôl-Thazâd]]in sortuessa Seroville kuningas antoi Grelin uhrata hänen henkensä, jottei hän saa ikävämpää kohtaloa Serovin uhrina.



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








