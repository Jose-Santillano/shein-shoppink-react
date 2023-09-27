"use client";
import { useRef } from "react";

//Components Flowbite
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

//Components
import NavbarCpt from "../components/NavbarCpt";
import FooterCpt from "../components/FooterCpt";

export default function Client() {
  
  const emailRef = useRef(null)
  const passRef = useRef(null);
  const passTwoRef = useRef(null);
  const checkRef = useRef(false);

  //Evento para registrar una nueva cuenta.
  const handleClientRegister = (e) => {
    const email = emailRef.current.value;
    const pass = passRef.current.value;
    const passTwo = passTwoRef.current.value;
    const check = checkRef.current.checked;

    if(pass !== passTwo) {
        alert("Las contraseñas no coinciden.");
        e.preventDefault();   
    } else if(pass.length <= 0 || passTwo.length <= 0 || email.length <= 0 || check === false){
        alert("Por favor, llena todos los campos.");
        e.preventDefault();
    }
    else{
        alert("Cuenta registrada con éxito.");
    }
  }

  return (
    <div>
      <NavbarCpt />
      <div className="flex flex-col items-center">
        <h1 className="font-bold">Detalles de la cuenta</h1>

        <div className="m-10">
          <form className="flex max-w-md flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email2" value="Correo electrónico" />
              </div>
              <TextInput
                id="email2"
                placeholder="Ingresa tu correo electrónico"
                required
                shadow
                type="email"
                ref={emailRef}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password2" value="Contraseña" />
              </div>
              <TextInput id="password2" required shadow type="password" ref={passRef}/>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="repeat-password" value="Repite la contraseña" />
              </div>
              <TextInput id="repeat-password" required shadow type="password" ref={passTwoRef} />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="agree" ref={checkRef}/>
              <Label className="flex" htmlFor="agree">
                <p>Estoy de acuerdo con los términos y condiciones.</p>
              </Label>
            </div>
            <Button type="submit" onClick={handleClientRegister}>Registrar nueva cuenta</Button>
          </form>
        </div>
      </div>
      <FooterCpt />
    </div>
  );
}
