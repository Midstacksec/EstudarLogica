export function List() {
  const cats = ["Runrun", "Ariskni", "Silvestre", "Juninho"]

  return (
    <ul>
      {cats.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  )
}

