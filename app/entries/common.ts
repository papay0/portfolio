export enum ExperienceType {
    Personnal = 0,
    Professional = 1,
    Academic = 2
}

export enum ContentType {
    PDFDocumentURL,
    MarkdownDocumentURL, // not supported
    RawMarkdownDocument,
    Link
}

export interface Content
{
    contentType : ContentType
    contentValue : string
}

export interface Entry 
{
    name : string, 
    experienceType : ExperienceType
    category : string
    tags : string[]
    abstract : string
    conclusion : string
    content : Content
}

export class Library
{
    public entries : Entry[]

    public constructor() { 
        this.entries = []
    }
}

let library = new Library();

export { library }