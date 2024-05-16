import { useEffect, useState } from "react";

export const JugaOnline = () => {
  const [data, setdata] = useState([]);
  const [infoParticipantes, setInfoParticipantes] = useState([]);
  const [markedNumbers, setMarkedNumbers] = useState(new Set());
  const [mostrarBloque, setMostrarBloque] = useState(false);
  const [mostrarDNI, setMostrarDNI] = useState(true);
  const [dni, setDni] = useState('');
  const defaultAvatar = "https://www.w3schools.com/w3images/avatar2.png";
  const [numeroCarton, setNumeroCarton] = useState("");
  const [numeroDataCarton, setNumeroDataCarton] = useState("")

  useEffect(() => {
    fetch('http://localhost:5050/agosto')
      .then(res => res.json())
      .then(data => setdata(data))
      .catch(err => console.log(err))
  }, []);

  useEffect(() => {
    fetch('http://localhost:5050/participantes')
      .then(res => res.json())
      .then(infoParticipantes => setInfoParticipantes(infoParticipantes))
      .catch(err => console.log(err))
  }, []);

  const handleNumberClick = (number) => {
    setMarkedNumbers((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(number)) {
        newSet.delete(number);
      } else {
        newSet.add(number);
      }
      return newSet;
    });
  };

  const handleGenerarCarton = () => {
    const participante = infoParticipantes.find(participante => participante.Solicitud == dni);
    const numeroDatoCartonNuevo = data.find(numeroDatoCartonNuevo => numeroDatoCartonNuevo.ncheq == participante.Chequera)
    if (participante) {
      setNumeroDataCarton(numeroDatoCartonNuevo.ncheq)
      setNumeroCarton(participante.Solicitud);
      setMostrarDNI(false);
      setMostrarBloque(true);
    } else {
      console.log("DNI no válido o cartón no encontrado");
    }
  };



  return (
    <div className="mt-32 px-4 sm:px-12 md:px-24 my-12">
      <div className="w-full flex flex-col items-center">
        <iframe
          className="w-full aspect-video shadow-[0_0px_10px_-0px_rgba(0,0,0,0.1)] shadow-yellow-500 xl:w-2/3 sm:w-3/4 md:w-full"
          src="https://www.youtube.com/embed/tFUTNZcUjqE?si=D1Q9kk8YluCGUESZ&start=1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Video de YouTube"
        ></iframe>
      </div>

      {mostrarDNI && (
        <div className="flex text-center mx-auto mt-5 flex-col w-1/3">
          <input
            type="text"
            placeholder="Ingrese su DNI"
            className="rounded-md"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
          />
          <button
            className="text-white bg-black p-3 rounded-lg mt-3"
            onClick={handleGenerarCarton}
          >
            Generar cartón
          </button>
        </div>
      )}

      {mostrarBloque && (
        <div className="flex flex-col md:flex-row justify-center items-stretch space-r-4 md:space-x-4 mt-12">
          <div className="mx-auto mb-6 md:mb-0 md:mx-0 w-full md:w-1/2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center pb- h-full">
              <img
                className="w-24 h-24 my-4 rounded-full shadow-lg"
                src={defaultAvatar}
                alt="Perfil de usuario"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                Santiago Peratta
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">DNI: {dni}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">Cartón: {numeroCarton}</span>
              <button type="button" className="text-white font-semibold bg-yellow-500 hover:bg-yellow-600 rounded-xl m-4 p-3">DESCARGAR CARTÓN</button>
            </div>
          </div>

          <div className="w-full md:w-1/2 bg-yellow-600 rounded-lg shadow-lg dark:bg-gray-700 dark:border-gray-600">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 h-full">
              {data && data.length > 0 && Object.keys(data[1]).slice(1).map((key) => (
                <div
                  key={key}
                  className={`flex justify-center items-center h-10 text-white font-bold text-2xl rounded-full ${markedNumbers.has(key) ? 'bg-gray-500' : 'bg-yellow-500'}`}
                  onClick={() => handleNumberClick(key)}
                >
                  {data[numeroDataCarton][key]}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
