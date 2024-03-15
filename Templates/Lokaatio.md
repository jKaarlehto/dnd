---
tags:
 - Maantiede
<%* var nimi = await tp.system.prompt("Nimi:")
await tp.file.rename(nimi) %> 
nimi: <% nimi %>
type:

---
###### Nähtävää

>```dataview
>LIST
>WHERE contains(file.frontmatter.sijaitsee, this.file.name) OR contains(this.file.frontmatter.sisältää, file.name)
>```

### Tiedot
#### Tyyppi:
`INPUT[lokaatiot][:type]`