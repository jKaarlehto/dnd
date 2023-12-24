---
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
>>![[IMG_3083.png]]|
>> ##### <%nimi%>
>> ###### `VIEW[{titteli}]`
>> 
>>##### Rotu: `INPUT[rodut]`
>>##### Ikä: `INPUT[suggester(title(Rotu:),option(hminen)):rotu]`
>>##### Sijainti: `INPUT[suggester(title(Rotu:),option(hminen)):rotu]`
>>##### Järjestöt: `INPUT[suggester(title(Rotu:),option(hminen)):rotu]`
>>##### Suku: `INPUT[suggester(title(Rotu:),option(hminen)):rotu]`
>>##### Lvl: `INPUT[suggester(title(Rotu:),option(hminen)):rotu]`
>>##### Elossa: `INPUT[suggester(title(Rotu:),option(hminen)):rotu]`






### Tiedot
#### Titteli: 
`INPUT[text(title(Titteli:)):titteli]`
#### Rotu:
`INPUT[suggester(title(Rotu:),option(hminen)):rotu]`









