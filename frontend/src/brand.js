// Brand white-label: valori letti dalle variabili d'ambiente del container
// (VITE_BRAND_NAME, VITE_BRAND_TAGLINE, VITE_SOURCE_URL), con default neutri.
export const BRAND_NAME = import.meta.env.VITE_BRAND_NAME || 'Simulation Lab'
export const BRAND_TAGLINE = import.meta.env.VITE_BRAND_TAGLINE || 'Multi-Agent Simulation Engine'
// Link al codice sorgente (licenza AGPL-3.0): se vuoto, il link non viene mostrato
export const SOURCE_URL = import.meta.env.VITE_SOURCE_URL || ''
