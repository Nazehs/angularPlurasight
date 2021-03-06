export interface eventsModel{
    id:Number,
    name:string,
    date:Date,
    time:string,
    price:number,
    imageUrl:string,
    location?:{
        address:string,
        city:string,
        country:string
    },
    onlineUrl?:string,
    sessions:Isession[]
}

export interface Isession{
    id:Number,
    name:string,
    presenter:string,
    duration:number,
    level:string,
    abstract:string,
    voters:string[]
}