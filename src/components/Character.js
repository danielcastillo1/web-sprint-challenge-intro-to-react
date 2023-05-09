// Write your Character component here
export const Character = (props) => {
    return (
        <div>{props.character.name} = {props.character.birth_year}</div>
    )
}