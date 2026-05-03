const DISTRITOS_MADRID = [
  'Centro',
  'Arganzuela',
  'Retiro',
  'Salamanca',
  'Chamberí',
  'Tetuán',
  'Chamartín',
  'Moncloa-Aravaca',
  'Latina',
  'Carabanchel',
  'Usera',
  'Puente de Vallecas',
  'Moratalaz',
  'Ciudad Lineal',
  'Hortaleza',
  'Villaverde',
  'Villa de Vallecas',
  'Vistalegre',
  'San Blas-Canillejas',
  'Barajas',
  'Vicálvaro'
];

const validarDistrito = (distrito) => {
  return DISTRITOS_MADRID.includes(distrito);
};

module.exports = {
  DISTRITOS_MADRID,
  validarDistrito
};
