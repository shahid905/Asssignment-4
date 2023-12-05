export type ButtonProps = {
    title: string,
    data?:string,
    onClickhandler:() => void
}

export type CardPropsTypes = {
    coursTitle : string,
    tag : string,
    description:string,
    date:string,
    showTag?: boolean,
    showDescription?:boolean,
    // style:{}
}

export type TagPropsTypes = {
    tagText : string,
}