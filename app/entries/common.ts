/**
 * Represents the different kind of experience types.
 */
export enum ExperienceType {
    Personnal = 0,
    Professional = 1,
    Academic = 2
}

/**
 * Represents the different kind of content type.
 * Content Type support can be added by expanding the entry-viewer component 
 * (in app/components/entry-viewer.template.html)
 */
export enum ContentType {
    PDFDocumentURL,
    MarkdownDocumentURL, // not supported
    RawMarkdownDocument,
    Link
}

/**
 * Represents some content.
 * Content can have different types, and the contentValue will represent
 * something depending on the contentType.
 * For instance, if contentType = PDFDocumentURL, it will be an URL.
 * if contentType = RawMarkdownDocument, it will be raw markdown data.
 */
export interface Content
{
    contentType : ContentType
    contentValue : string
}

/**
 * Represents an entry in the portfolio.
 */
export interface Entry 
{
    name : string, 
    experienceType : ExperienceType
    category : string
    tags : string[]
    abstract : string
    conclusion : string
    content : Content
    thumbnailUrl: string
}

/**
 * The library contains all the data needed to display the portfolio website.
 * It contails all the entries and can be extended to support more functionnalities.
 */
export class Library
{
    public entries : Entry[]

    public constructor() { 
        this.entries = []
    }
}

// Library singleton instance.
let library = new Library();

// Converts an ExperienceType enum value to a displayable string.
function experienceType2Str(ct : ExperienceType) : string {
    switch(ct) {
        case ExperienceType.Personnal: return "Personnal";
        case ExperienceType.Professional: return "Professional";
        case ExperienceType.Academic: return "Academic";
        default: return "Unknown"
    }
}

export { library }
export { experienceType2Str }