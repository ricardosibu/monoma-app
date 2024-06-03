
export const RegisterInfo = ({ handleInputChange }) => {

  return (
    <form className="w-full max-w-lg">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            Nombre de usuario
          </label>
          <input
            name="username"
            onChange={handleInputChange}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="Jane"
          />
          
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            Password
          </label>
          <input
            name="password"
            onChange={handleInputChange}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="password"
            placeholder="******************"
          />
          
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            Confirmar Password
          </label>
          <input
            name="confirm_password"
            onChange={handleInputChange}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="password"
            placeholder="******************"
          />
         
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            Perfil de usuario
          </label>
          <div className="flex flex-row gap-10">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              <input
                name="profile_type"
                value="personal"
                onChange={handleInputChange}
                type="radio"
              />{" "}
              Personal
            </label>
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              <input
                name="profile_type"
                value="business"
                onChange={handleInputChange}
                type="radio"
                className="accent-pink-500"
              />{" "}
              Negocio
            </label>
          </div>
        </div>
      </div>
    </form>
  );
};
