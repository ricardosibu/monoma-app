import { heardOptions } from "@/app/utils/constants";


export const PreferencesInfo = ({ handleInputChange }) => {
  

  return (
    <form className="w-full max-w-lg">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
          >
            Deseas recibir notificaciones via correo electonico
          </label>
          <div className="flex flex-row gap-10">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2 ml-1">
              <input className="ml-1" name="notifications" onChange={handleInputChange} value={true} type="radio" /> SI
            </label>
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
              <input name="notifications" onChange={handleInputChange} value={false} type="radio" className="accent-pink-500" />{" "}
              NO
            </label>
          </div>
          
        </div>
       
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
          >
            Donde escuchaste sobre nuestros servicios
          </label>
          <div className="flex flex-row gap-10">
          {heardOptions.map((option) => (
            <label key={option} className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
              <input name="how_heard" type="radio" value={option} /> {option}
            </label>

          ))}
          </div>
          
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
          >
            Terminos y condiciones
          </label>
          <div className="flex flex-row gap-10">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
              <input name="terms_agreed" value={true} onChange={handleInputChange} type="checkbox" /> Estoy de acuerdo con los terminos y condiciones
            </label>
          </div>
          
        </div>
      </div>
      
    </form>
  );
};
