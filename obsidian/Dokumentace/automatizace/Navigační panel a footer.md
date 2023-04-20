#automatizace
Oba jsou generovaný automaticky ze souboru [[props.ts]]

## Generační kod pro Navigační panel
```html
<template v-for="data in pages" >
	<!-- Generates only if ismain == true -->
	<navmenu v-if="data.ismain == true">
		<template v-for="page in data.pages">
			<navbutton :to="page.url">{{ page.title }}</navbutton>
		</template>
	</navmenu>
</template>
```