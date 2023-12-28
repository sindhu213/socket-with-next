import { IMessages } from "../lib/definitions"

export default function Messages(
    {messageGroupProps} : {messageGroupProps:IMessages}
){
    const {messageGroup, index} = messageGroupProps;
    return (
        <ul>
            {messageGroup?.map((element) => (
                <li key={index}>{element}</li>
            ))}
        </ul>
    )
}