type SubmitButtonElementBlockProps = {
    content: any
}

export default function SubmitButtonElementBlock({content}: SubmitButtonElementBlockProps){
    return(
        <button className="btn" type="submit" name={content.Name}>{content.Name}</button>
    );
}