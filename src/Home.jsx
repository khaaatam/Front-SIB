// import Hello from "./Hello";

function Home() {
  // const fruits = ["Apple", "Banana", "Orange", "Manggo", "Pineapple"];
  // const handleClick = () => {
  //   alert("Button Clicked");
  // };

  let object1 = { nama: "Tami" };
  let object2 = { age: 22 };

  let combinedObject = { ...object1, ...object2 };
  console.log(combinedObject);

  return (
    <main>
      {/* <button onClick={handleClick}>Click Me!</button> */}
      {/* <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul> */}

      {/* <Hello name="Tami" />
      <Hello name="Arsa" />
      <Hello name="Reki" /> */}
    </main>
  );
}

export default Home;
