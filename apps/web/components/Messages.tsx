export default function Messages(
    {messagesProps}: {messagesProps ?: string[]}
){
    return (
        <ul>
            {messagesProps?.map((element) => (
                <li>{element}</li>
            ))}
        </ul>
    )
}