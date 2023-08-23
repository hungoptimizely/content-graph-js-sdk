import TextboxElementBlock from "./TextboxElementBlock";
import SubmitButtonElementBlock from "./SubmitButtonElementBlock";

type FormContainerBlockProps = {
    content: any
}

export default function FormContainerBlock({ content }: FormContainerBlockProps) {
    return (

        <form>
            {content.ElementsArea.map((el: any) => {
                const element = el.ContentLink.Expanded;
                return (
                    <>
                        {element.__typename == "TextboxElementBlock" && <TextboxElementBlock content={element}></TextboxElementBlock>}
                        {element.__typename == "SubmitButtonElementBlock" && <SubmitButtonElementBlock content={element}></SubmitButtonElementBlock>}
                    </>
                )

            })}
        </form>

    );
}