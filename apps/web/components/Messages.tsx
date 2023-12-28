import { IMessages } from "../lib/definitions";

export default function Messages({ messageGroupProps }: { messageGroupProps: IMessages }) 
{
    const { messages, } = messageGroupProps;
    return (
        <ul>
            {messages?.map((element, index) => (
                <li key={index}>{element}</li>
            ))}
        </ul>
    );
}
