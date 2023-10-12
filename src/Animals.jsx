const ListItem = props => {
  return <li>{props.animal}</li>
}

const List = props => {
  return (
    <>
      { !props.animals && <div>Loading...</div> }
      { props.animals && props.animals.length > 0 && (
          <ul>
            {props.animals.map(animal => {
              return animal.startsWith('L') && <ListItem key={animal} animal={animal} />;
            })}
          </ul>
        )}
        { props.animals && props.animals.length ===  0 && <div>There are no animals!</div>}
    </>
  )
}

const Animals = () => {
  const animals = ['Lion', 'Cow', 'Snake', 'Lizard'];

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  );
}
export default Animals;