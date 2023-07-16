export class showTags {
    [key: string]: any;
    constructor(title?:string, subject?:string, date?:string, description?:string) {
        this.title = title;
        this.subject = subject;
        this.date = date;
        this.description = description;
    }
}
