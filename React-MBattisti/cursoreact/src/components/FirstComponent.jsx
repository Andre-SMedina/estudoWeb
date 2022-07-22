import AnotherComponent from "./AnotherComponent";

function FirstComponent() {
  // comentário normal JS
  const name = "André";

  return (
    <div>
      {/* Comentário no JSX */}
      <p>Primeiro component</p>
      {2 + 2}
      <p>Nome: {name}</p>
      <AnotherComponent />
    </div>
  );
}

export default FirstComponent;
