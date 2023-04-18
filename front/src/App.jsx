function App() {
  return (
    <div className="bg-color1 max-w-screen-md min-h-screen flex flex-col justify-start items-center pt-16 px-4 mx-auto">
      <form className="flex w-full">
        <input
          type="text"
          className="grow border-2 border-gray-300 rounded-lg focus:outline-color2 px-2 py-1"
        />
        <input
          type="submit"
          value={"Submit"}
          className=" mx-4 px-2 py-1 border-mutsa border-2 rounded-lg text-mutsa "
        />
      </form>
      <div className="mt-14 bg-color2 p-4 text-gray-50">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
        molestiae vel sequi hic optio sapiente corporis distinctio quis
        laudantium, quidem magni, minima at quos cumque. Rerum sunt natus
        facilis est.
      </div>
    </div>
  );
}

export default App;
