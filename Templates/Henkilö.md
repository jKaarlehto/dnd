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
>### Kuvaus
>>[!col-md-0.5]
>>>![[IMG_3083.png]]
>>> ##### <%nimi%>
>> >###### `VIEW[{titteli}]`
>>>##### Rotu: `VIEW[{rotu}]`
>>>##### Ikä: `VIEW[{ikä}]`
>>>##### Sijainti: `VIEW[{lokaatio}]`
>>>##### Järjestöt: `VIEW[{järjestöt}]`
>>>##### Suku: `VIEW[{suku}]`
>>>##### Lvl: `VIEW[{lvl}]`
>>>##### Elossa:`VIEW[{elossa}]`






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
`INPUT[suggester(title(Suku:),optionQuery("Notes")):rotu]`
#### Lvl:
`INPUT[number:lvl]`
#### Elossa:
`INPUT[toggle:elossa]`







