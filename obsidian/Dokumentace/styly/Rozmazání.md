#styly
soubor: `/src/jp-extend/blur.scss`

Custom implementace rozmazání pomocí Bootstrap Utilities který automaticky generuje kod pro responzivitu.
V tomhle případu přidávám css proměnou `backdrop-filter:blur()` ktarý v reálném čase rozmazává vše co pod daným elementem je. 

K rozmazání je taky potřeba pruhlednost daného elementu proto tam taky je přidaná proměná `bg-opacity` která už v bootstrap je jen není nastavená jako responzivní (což je potřeba když na mobilních zařizení nechcete dělat rozmazání).