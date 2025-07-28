import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Mind77 futuristic color system
				neural: 'hsl(var(--neural-glow))',
				metallic: 'hsl(var(--metallic-base))',
				tech: 'hsl(var(--tech-surface))',
				energy: 'hsl(var(--energy-pulse))',
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-neural': 'var(--gradient-neural)',
				'gradient-metallic': 'var(--gradient-metallic)',
				'gradient-energy': 'var(--gradient-energy)',
			},
			boxShadow: {
				'neural': 'var(--shadow-neural)',
				'neural-soft': '0 0 15px hsl(190 100% 44% / 0.2)',
				'neural-intense': '0 0 40px hsl(190 100% 44% / 0.6), 0 0 80px hsl(190 100% 44% / 0.3)',
				'neural-deep': '0 8px 32px rgba(0, 0, 0, 0.8), 0 0 30px hsl(190 100% 44% / 0.2)',
				'neural-border': '0 0 20px hsl(190 100% 44% / 0.4), inset 0 0 20px hsl(190 100% 44% / 0.1)',
				'neural-glow': '0 0 25px hsl(190 100% 44% / 0.4), inset 0 0 15px hsl(190 100% 44% / 0.2)',
				'neural-core': '0 0 60px hsl(190 100% 44% / 0.5), 0 0 120px hsl(190 100% 44% / 0.3)',
				'energy-line': '0 0 10px hsl(190 100% 44% / 0.8)',
				'pulse': 'var(--shadow-pulse)',
				'metallic': 'var(--shadow-metallic)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						opacity: '0.5',
						transform: 'scale(1)'
					},
					'50%': {
						opacity: '1',
						transform: 'scale(1.05)'
					}
				},
				'pulse-glow-slow': {
					'0%, 100%': {
						opacity: '0.3',
						transform: 'scale(1)'
					},
					'50%': {
						opacity: '0.8',
						transform: 'scale(1.1)'
					}
				},
				'neural-float': {
					'0%, 100%': {
						transform: 'translate(0, 0) scale(1)',
						opacity: '0.2'
					},
					'25%': {
						transform: 'translate(10px, -10px) scale(1.1)',
						opacity: '0.6'
					},
					'50%': {
						transform: 'translate(-5px, -20px) scale(0.9)',
						opacity: '0.8'
					},
					'75%': {
						transform: 'translate(-15px, -5px) scale(1.05)',
						opacity: '0.4'
					}
				},
				'pulse-wave': {
					'0%': {
						transform: 'translateX(-100%)'
					},
					'100%': {
						transform: 'translateX(100%)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'pulse-glow-slow': 'pulse-glow-slow 5s ease-in-out infinite',
				'neural-float': 'neural-float 12s ease-in-out infinite',
				'pulse-wave': 'pulse-wave 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;