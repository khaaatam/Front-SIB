function Hello(props) {
  // eslint-disable-next-line react/prop-types
  const { name } = props;

  return (
    <div>
      <h1>Helo React</h1>
      <p>Saya {name} - Frontend Engineer</p>
    </div>
  );
}

export default Hello;
