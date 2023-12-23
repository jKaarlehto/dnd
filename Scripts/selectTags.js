async function selectTags(tp, tagName,prompt="Select:", tagAmount=0) {
    const allTags = Object.entries(app.metadataCache.getTags());
    const tagPrefix = `#${tagName}/`;
    var henkiloTags = allTags.filter(t => String(t[0]).startsWith(tagPrefix)).sort((a, b) => a[0].localeCompare(b[0]));
    const selectedTags = [];

    try {
        while (true) {
		if (tagAmount !== 0 && tagAmount == selectedTags.length) {
			break;
		}

            //Prompt user 
            var suggestedTag = (await tp.system.suggester(t => t[0], henkiloTags.map(tag => [tag[0]]), true, prompt))[0];

            if (!suggestedTag) {
                break;
            }

            henkiloTags = henkiloTags.filter(tag => tag[0] !== suggestedTag);
            console.log(suggestedTag);
            selectedTags.push(suggestedTag.substring(1));
        }
    } catch (error) {
	console.error("Error during tag selection:", error);
        console.log("escaped from tag selection");
	return selectedTags;
    }


    return selectedTags;
}

module.exports = selectTags;
