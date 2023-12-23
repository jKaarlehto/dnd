---
<%* var name = await tp.system.prompt("Nimi:")
await tp.file.rename(name) %> 
nimi: <% name %>
rotu: 
ikä: 
sijainti: 
elossa: 
suku: 
järjestöt: 
lvl: 
Rotu: Ihminen
---
>[!col]
> #### Kuvaus
>>[!col-md]
>> 
>>```meta-bind
>>INPUT[suggester(title(Rotu:),option(Ihminen)):Rotu]
>>
>>```





