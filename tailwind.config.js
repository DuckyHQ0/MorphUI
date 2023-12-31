/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*"],
	theme: {
		fontSize: {
			0: "100px",
			1: "50px",
			2: "36px",
			3: "21px",
			"strong-body": "16px",
			body: "15px",
			sub: "12.8px",
			mono: "13px",
		},
		spacing: {
			256: "256px",
			200: "200px",
			128: "128px",
			110: "110px",
			96: "96px",
			86: "86px",
			72: "72px",
			64: "64px",
			56: "56px",
			48: "48px",
			36: "36px",
			32: "32px",
			30: "30px",
			28: "28px",
			24: "24px",
			20: "20px",
			18: "18px",
			16: "16px",
			12: "12px",
			10: "10px",
			8: "8px",
			6: "6px",
			4: "4px",
			0: "0px",
		},
		borderRadius: {
			24: "24px",
			32: "32px",
			out: "16px",
			in: "9px",
			small: "7px",
		},
		fontFamily: {
			sans: ["Outfit"],
		},
		boxShadow: {
			fg: "0px -6px 24px -2px rgba(0, 0, 0, 0.14) inset, 0px 0px 56px 0px rgba(0, 0, 0, 0.08)",
		},
		extend: {
			backgroundImage: {
				fg: "linear-gradient(to bottom,rgba(122,122,122,0.13),rgba(122,122,122,0.05))",
				"fg-disabled":
					"linear-gradient(to bottom,rgba(122,122,122,0.05),rgba(122,122,122,0.07))",
			},
			colors: {
				// ui styles
				"stroke-1": "rgba(255,255,255,0.09)",
				"stroke-2": "rgba(255,255,255,0.04)",
				"text-1": "#DEDEDE",
				// colours
				selected: "#0db7ff",
				"brand-blue": "#0db7ff",
				"brand-blue-2": "#007bff",
				"brand-purple": "#4e00ff",
				red: "#F5254A",
				yellow: "#EACA22",
				green: "#26D958",
				blue: "#0784F6",
				purple: "#BC4DFF",
			},
			backdropBlur: {
				main: "32px",
			},
		},
	},
	plugins: [require("tailwindcss-radix")()],
};
