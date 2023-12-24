---
type:henkilö
<%* var nimi = await tp.system.prompt("Nimi:")
await tp.file.rename(nimi) %> 
nimi: <% nimi %>
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
>>Kuvaus...
>>%%KUVAUS
>
>>%%TIEDOT%%
>>![[IMG_3083.png]]
>> ## <%nimi%>
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
INPUT[listSuggester(title(Järjestöt:),optionQuery("Notes")):järjestöt]
```
#### Suku:
`INPUT[suggester(title(Suku:),optionQuery("Notes")):suku]`
#### Lvl:
`INPUT[number:lvl]`
#### Elossa:
`INPUT[toggle:elossa]`







