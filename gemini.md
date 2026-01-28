Creează o structură web cu două carduri așezate vertical. Fiecare card are o lățime fixă de 1920px.

Arhitectura de straturi (Layering):

Cardul de bază (Rama): Un div în spate cu border-radius: 12px care acționează ca fundal și ramă.

Imaginea: Plasată peste card, având propriul border-radius. Inițial, imaginea este mai mică decât cardul, lăsând marginile acestuia vizibile (efect de ramă).

Textul: Centrat perfect deasupra imaginii.

Logica animației la Hover:

Scale Up Imagine: Imaginea se mărește până când atinge dimensiunile cardului din spate, acoperind rama. Important: Imaginea trebuie să își păstreze colțurile rotunjite în timpul și după scalare.

Filtre: Odată ce imaginea s-a extins, aplică-i un efect de blur și un overlay de noise (grain).

Scale Down Text: În timp ce imaginea crește, textul trebuie să se micșoreze (scale down).

Specificații tehnice:

Gestionează elementele separat (card vs. imagine) pentru a păstra independența border-radius-ului.

Folosește transition pentru a asigura o fluiditate de aproximativ 0.5s.

Efectul de noise trebuie să apară subtil peste imagine la hover.
