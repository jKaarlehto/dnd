---
<%*
const allTags = Object.entries(app.metadataCache.getTags())
const henkiloTags = allTags.filter(t => String(t[0]).startsWith("#Henkilö/")).sort( (a, b) => a[0].localeCompare(b[0]))
const selectedTag = (await tp.system.suggester(t => t[0], henkiloTags,"Tags:"))[0].substring(1)
%>
tags:
- <% selectedTag %>

---
