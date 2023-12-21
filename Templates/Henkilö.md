---

<%*
const allTags = Object.entries(app.metadataCache.getTags())
const projectTags = allTags.filter(t => String(t[0]).startsWith("#Henkilö/")).sort( (a, b) => a[0].localeCompare(b[0]))
const selectedTag = (await tp.system.suggester(t => t[0], projectTags,"Tags:"))[0]

%>
tags: <% selectedTag %>

---
