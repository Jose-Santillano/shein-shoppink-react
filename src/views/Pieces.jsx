import { useContext, useState } from "react";
import UserContext from "../context/User/UserContext";

//Components Flowbite
import { Button, ToggleSwitch } from "flowbite-react";

//Components
import NavbarCpt from "../components/NavbarCpt";
import FooterCpt from "../components/FooterCpt";

//Constants
import pieces from "../constants/piecesData";

const Pieces = () => {
  const [piecesSelected, setPiecesSelected] = useState([]);

  //Context
  const { email, pass, img, colors, setData } = useContext(UserContext);

  //Funcion para guardar los colores en el estado global.
  const handleSavePieces = () => {
    if (piecesSelected.length > 0) {
      const data = {
        email: email,
        pass: pass,
        img: img,
        colors: colors,
        pieces: piecesSelected,
        clothes: "",
        options: "",
        price: 0,
      };

      setData(data);
      console.log(data);

      alert("Conjuntos guardados.");
    } else {
      alert("Debes seleccionar al menos 1 conjuntos.");
      console.log(piecesSelected);
    }
  };

  //Funcion para actualizar el estado de los colores seleccionados.
  const handleColorSelect = (color) => {
    const actuallyColors = [...piecesSelected];
    if (actuallyColors.includes(color)) {
      actuallyColors.splice(actuallyColors.indexOf(color), 1);
    } else if (actuallyColors.length < 2) {
      actuallyColors.push(color);
    } else {
      alert("Solo puedes seleccionar 2 conjuntos");
    }
    setPiecesSelected(actuallyColors);
    console.log(piecesSelected);
  };

  return (
    <div>
      <NavbarCpt />
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-xl">
          ¡Elige tus conjuntos favoritos para vestir a la moda!
        </h1>
        <p>Sesión iniciada con: {email}</p>

        <div className="flex flex-wrap text-center justify-center align-center gap-5 my-5">
          {pieces.map((pieces) => {
            return (
              <div key={pieces.id} className="border rounded-xl overflow-hidden">
                <div
                  className="w-full h-42 sm:w-80"
                >
                  <img src={pieces.img} alt={pieces.name} />
                </div>
                <div className="p-5">
                  <h5 className="text-xl font-bold tracking-tight text-gray-500">
                    {pieces.name}
                  </h5>
                  <div
                    className="flex justify-center align-center pt-1"
                    id="toggle"
                  >
                    <ToggleSwitch
                      checked={piecesSelected.includes(pieces)}
                      label="Quiero este conjunto"
                      onChange={() => {
                        handleColorSelect(pieces);
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <Button
          type="submit"
          gradientDuoTone="purpleToPink"
          onClick={handleSavePieces}
          className="mt-5"
        >
          Guardar conjunto (s)
        </Button>
      </div>
      <FooterCpt />
    </div>
  );
};

export default Pieces;
