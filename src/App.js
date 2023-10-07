function App()
{
  function handleChange()
  {
    const names=["start","learn","do"];
    const int=Math.floor(Math.random()*3);
    return names[int]
  }
  return(
    <div>
      i am learning
      <p>lets we {handleChange()} react</p>
    </div>
  );
}
export default App;