render: function() {
  const elements = ['one', 'two', 'three'];
  return (
    <ul>
      {elements.map((value, index) => {
        return <li key={index}>{value}</li>
      })}
    </ul>
  )
}