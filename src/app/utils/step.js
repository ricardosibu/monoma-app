export const steps = [
  "Información Personal",
  "Dirección",
  "Detalles de la Cuenta",
  "Preferencias",
];

export const insertAditionalStep = (option) => {
   if (option === 'personal') {
    steps.splice(3, 0, "Información Personal Adicional")
   } else {
    steps.splice(3, 0, "Información de Negocios")
   }
}