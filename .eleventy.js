module.exports = function(eleventyConfig) {
    // Copy `img/` to `_site/img`
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("style.css");
    
    return {
        dir: {
            input: "src",
            output: "_site"
        }
    };
};
