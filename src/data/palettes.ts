export interface ThemePalette {
  id: string
  name: string
  tokens: {
    bgPrimary: string
    bgSurface: string
    bgSurfaceElevated: string
    borderSubtle: string
    borderFocus: string
    textPrimary: string
    textSecondary: string
    textMuted: string
    accentPrimary: string
    accentGlow: string
  }
}

export const palettes: Record<string, ThemePalette> = {
  '1': {
    id: '1',
    name: 'Midnight Cyan (Actual)',
    tokens: {
      bgPrimary: '#080B10',
      bgSurface: '#0E131F',
      bgSurfaceElevated: '#161E31',
      borderSubtle: 'rgba(255, 255, 255, 0.08)',
      borderFocus: 'rgba(56, 189, 248, 0.4)',
      textPrimary: '#F1F5F9',
      textSecondary: '#94A3B8',
      textMuted: '#475569',
      accentPrimary: '#38BDF8',
      accentGlow: 'rgba(56, 189, 248, 0.12)',
    },
  },
  '2': {
    id: '2',
    name: 'Cobalt Slate (Monavon Vibe)',
    tokens: {
      bgPrimary: '#07090E',
      bgSurface: '#0D111A',
      bgSurfaceElevated: '#141A28',
      borderSubtle: 'rgba(255, 255, 255, 0.07)',
      borderFocus: 'rgba(99, 102, 241, 0.4)',
      textPrimary: '#F8FAFC',
      textSecondary: '#94A3B8',
      textMuted: '#475569',
      accentPrimary: '#6366F1',
      accentGlow: 'rgba(99, 102, 241, 0.14)',
    },
  },
  '3': {
    id: '3',
    name: 'Deep Emerald / Teal (High-Tech)',
    tokens: {
      bgPrimary: '#060A09',
      bgSurface: '#0B1311',
      bgSurfaceElevated: '#121F1C',
      borderSubtle: 'rgba(255, 255, 255, 0.07)',
      borderFocus: 'rgba(45, 212, 191, 0.4)',
      textPrimary: '#F0FDF4',
      textSecondary: '#99F6E4',
      textMuted: '#2DD4BF',
      accentPrimary: '#2DD4BF',
      accentGlow: 'rgba(45, 212, 191, 0.14)',
    },
  },
  '4': {
    id: '4',
    name: 'Monochrome Carbon (Jesper Landberg)',
    tokens: {
      bgPrimary: '#0A0A0A',
      bgSurface: '#121212',
      bgSurfaceElevated: '#1C1C1C',
      borderSubtle: 'rgba(255, 255, 255, 0.1)',
      borderFocus: 'rgba(255, 255, 255, 0.4)',
      textPrimary: '#FFFFFF',
      textSecondary: '#A3A3A3',
      textMuted: '#525252',
      accentPrimary: '#E5E5E5',
      accentGlow: 'rgba(255, 255, 255, 0.1)',
    },
  },
}

