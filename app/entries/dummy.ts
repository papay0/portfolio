import * as common from './common'

let entry : common.Entry = {
    name: "Dummy Entry",
    experienceType: common.ExperienceType.Academic,
    category: "Category1",
    tags: ["TagLulz", "TagLalz"],
    abstract: `This is an abstract description`,
    conclusion: `This is the conclusion`,
    content: {
        contentType: common.ContentType.RawMarkdownDocument,
        contentValue: 
        `
# This is markdown
See what i *mean*        
`
    }
};

common.library.entries.push(entry)