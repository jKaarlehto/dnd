---
<%* var nimi = await tp.system.prompt("Nimi:")
await tp.file.rename(nimi) %> 
nimi: <% nimi %>
titteli:
rotu: 
ikä: 
sijainti: 
elossa: 
suku: 
järjestöt: 
lvl: 
rotu: 

aliases:
- 
---
>[!col]
>### Kuvaus
>>[!col-md-0.5]
>>![[IMG_3083.png]]
>> ### <%nimi%>
>>```meta-bind
>>INPUT[suggester(title(Rotu:),option(hminen)):rotu]
>>```
>>```meta-bind
>>INPUT[suggester(title(Sijainti:),optionQuery(#Maantiede)):sijainti]
>>```



### Tiedot
#### Titteli: 
`INPUT[text(title(Titteli:)):titteli]`
#### Rotu:
`INPUT[suggester(title(Rotu:),option(hminen)):rotu]`









