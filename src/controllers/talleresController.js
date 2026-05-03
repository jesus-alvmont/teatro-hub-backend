const supabase = require('../db/supabase');
const { DISTRITOS_MADRID, validarDistrito } = require('../utils/distritos');

// Obtener todos los talleres con filtros
exports.obtenerTalleres = async (req, res) => {
  try {
    const { distrito, nivel, tipo, precio_max, frecuencia, pagina = 1, por_pagina = 20 } = req.query;
    
    let query = supabase.from('talleres').select('*');
    
    // Aplicar filtros
    if (distrito && validarDistrito(distrito)) {
      query = query.eq('ubicacion_distrito', distrito);
    }
    if (nivel) {
      query = query.eq('nivel_requerido', nivel);
    }
    if (tipo) {
      query = query.eq('tipo', tipo);
    }
    if (precio_max) {
      query = query.lte('precio_mensual', parseFloat(precio_max));
    }
    if (frecuencia) {
      query = query.eq('frecuencia', frecuencia);
    }
    
    // Paginación
    const from = (pagina - 1) * por_pagina;
    const to = from + por_pagina - 1;
    query = query.range(from, to);
    
    const { data, error, count } = await query;
    
    if (error) throw error;
    
    res.json({
      success: true,
      data: data || [],
      total: count || 0,
      pagina: parseInt(pagina),
      por_pagina: parseInt(por_pagina)
    });
  } catch (error) {
    console.error('Error en obtenerTalleres:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Error al obtener talleres'
    });
  }
};

// Obtener un taller por ID
exports.obtenerTallerPorId = async (req, res) => {
  try {
    const { id } = req.params;
    
    const { data, error } = await supabase
      .from('talleres')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    
    res.json({
      success: true,
      data: data
    });
  } catch (error) {
    console.error('Error en obtenerTallerPorId:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Error al obtener taller'
    });
  }
};

// Obtener lista de distritos
exports.obtenerDistritos = (req, res) => {
  res.json({
    success: true,
    data: DISTRITOS_MADRID
  });
};

// Obtener tipos de talleres
exports.obtenerTiposTalleres = (req, res) => {
  const tipos = [
    'interpretación',
    'improvisación',
    'método',
    'mixto',
    'escritura teatral',
    'microteatro'
  ];
  res.json({
    success: true,
    data: tipos
  });
};
