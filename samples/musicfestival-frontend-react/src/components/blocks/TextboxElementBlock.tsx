type TextboxElementBlockProps = {
    content: any
}

export default function TextboxElementBlock({content}: TextboxElementBlockProps){
    return(
        <input type="text" name={content.Name} />
    );
}