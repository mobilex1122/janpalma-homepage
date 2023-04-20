#konfigurace
**soubor:** `/src/props.ts`
`props.ts` Je soubor kde jsou uložený všechny výchozí a permanentní data pro užiatele.

## Ukázka
```ts
import { reactive } from "vue";

export const state = reactive({
	lighttheme: false,
	reducedanim: false,
	blur: true
})

export const pages = [
	{
		name: "Stránky",
		ismain:true,
		type: "routes",
		pages: [
			{title: "Domov", url:"/"},
			{title: "O mně", url:"/about"},
			{title: "Galerie", url:"/gallery"},
			{title: "Projekty", url:"/projects"},
		]
	},
	{
		name: "Socialní sítě",
		ismain:false,
		type: "links",
		pages: [
			{title: "Github", url:"https://github.com/mobilex1122"},
			{title: "Yotube", url:"https://www.youtube.com/@mobilexENCZ"},
			{
				title: "Facebook",
				url:"https://www.facebook.com/mobilex1122.cz/"
			},
			{
				title: "Instagram",
				url:"https://www.instagram.com/mobilex1122_cz/"
			},
		]
	}
]
```

## Vysvětlení:

### Nastavení
```ts
export const state = reactive({
	lighttheme: false,
	reducedanim: false,
	blur: true
})
```

Výchozí nastavení pro uživatele které se načte po prvním otevření stránky. Pokud uživatel změní nastavení dané změněné nastavení se uloží do `localstorage`.

#### Ukázka (Využití)
![[settings.png]]

### Stránky a odkazy pro navigaci
```ts
export const pages = [
	{
		name: "Stránky",
		ismain:true,
		type: "routes",
		pages: [
			{title: "Domov", url:"/"},
			{title: "O mně", url:"/about"},
			{title: "Galerie", url:"/gallery"},
			{title: "Projekty", url:"/projects"},
		]
	},
	{
		name: "Socialní sítě",
		ismain:false,
		type: "links",
		pages: [
			{title: "Github", url:"https://github.com/mobilex1122"},
			{title: "Yotube", url:"https://www.youtube.com/@mobilexENCZ"},
			{
				title: "Facebook",
				url:"https://www.facebook.com/mobilex1122.cz/"
			},
			{
				title: "Instagram",
				url:"https://www.instagram.com/mobilex1122_cz/"
			},
		]
	}
]
```

Tato proměná je konstantní (takže se nikde v kodu nemění) a má v sobě data o odkazech a stránkách rozdělených do kategorií které jsou vidět úplně dole na stránce

##### Ukázka (Využití)
![[footer.png]]