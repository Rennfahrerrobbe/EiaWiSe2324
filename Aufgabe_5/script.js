document.addEventListener("DOMContentLoaded", function () {
    // DOM-Elemente abrufen
    const inputField = document.getElementById("input");
    const outputField = document.getElementById("output");

    // Funktion zur Anzeige des Textes im Ausgabefeld
    function displayText(text) {
        outputField.textContent = text;
    }

    // Starttext anzeigen
    displayText("Du gehst gerne spazieren und kommst gerade in einen tiefen Wald, wo du plötzlich vor zwei Höhlen stehst. In beiden Höhlen befindet sich ein extrem hungrig aussehender Bär, und nun stehst du vor der Entscheidung, welchen der beiden Bären du füttern sollst. Beide sehen aber so aus, als würden sie es dir übel nehmen, wenn du sie nicht wählst. Fütterst du nun den *braunen* oder den *schwarzen* Bären?");

    // Funktion zur Verarbeitung der Eingabe und Aktualisierung der Ausgabe
    function handleDecision() {
        let SchwierigeEntscheidung = inputField.value.toLowerCase();
        let BraunerBärEntscheidung;
        let SchwarzerBärEntscheidung;

        // Entscheidungsweg 1 mit dem braunen Bären
        if (SchwierigeEntscheidung === 'braunen') {
            displayText('Der braune Bär scheint sich sehr zu freuen, dass du ihn gewählt hast. Wie erwartet ist er extrem hungrig und schaut dich erwartungsvoll an. Du hörst jedoch ein tiefes Brummen aus der anderen Höhle und fragst dich, was das bedeutet. Möchtest du *weiterfüttern* oder den *Wald verlassen*?');

            // Zusätzlichen Text im Ausgabefeld anzeigen
            inputField.addEventListener("keydown", function (event) {
                if (event.key === "Enter") {
                    BraunerBärEntscheidung = inputField.value.toLowerCase();

                    // Verschiedene Eingabemöglichkeiten und dementsprechende Antworten
                    if (BraunerBärEntscheidung === 'weiterfüttern') {
                        displayText('Du ignorierst das tiefe Brummen geschickt und fütterst weiter. Nach ein paar Sekunden kommt der schwarze Bär um die Ecke, schaut dich zuerst kurz hungrig an, gesellt sich dann aber zu dir und dem braunen Bären dazu und genießt das leckere Essen :D');
                    } else if (BraunerBärEntscheidung === 'wald verlassen') {
                        displayText('Du verlässt den Wald zügig nach dem tiefen Brummen, nur um an der Ecke vom schwarzen Bären abgefangen zu werden. Er sieht jedoch so aus, als würde er dir für ein paar Leckerbissen verzeihen, dass du ihn nicht direkt gewählt hast. Also fütterst du ihn, und alle sind satt und zufrieden :)');
                    } else {
                        displayText('Falsche Eingabe, du wirst gefressen :(');
                    }

                    // Eingabefeld leeren
                    inputField.value = '';
                }
            });

            // Entscheidungsweg 2 mit dem schwarzen Bären
        } else if (SchwierigeEntscheidung === 'schwarzen') {
            displayText("Du wählst den schwarzen Bären und während du zu ihm läufst, um ihn mit deinen Leckerbissen zu verwöhnen, hörst du noch ein tiefes Brummen aus der anderen Höhle. Du überlegst, ob es die richtige Entscheidung war, jedoch ist der schwarze Bär schon sehr hungrig und niedlich. Möchtest du *weiterfüttern* oder deine *Entscheidung überdenken*?");

            // Zusätzlichen Text im Ausgabefeld anzeigen
            inputField.addEventListener("keydown", function (event) {
                if (event.key === "Enter") {
                    SchwarzerBärEntscheidung = inputField.value.toLowerCase();

                    // Verschiedene Eingabemöglichkeiten und dementsprechende Antworten
                    if (SchwarzerBärEntscheidung === 'weiterfüttern') {
                        displayText('Du fütterst tiefenentspannt weiter und mittendrin kommt der braune Bär aus der anderen Höhle, beobachtet dich kurz und entscheidet sich dann mitzufuttern. Alle sind satt und zufrieden am brummen :)');
                    } else if (SchwarzerBärEntscheidung === 'überdenken') {
                        displayText('Du überdenkst deine Entscheidung, und gerade als du den Wald verlassen wolltest, fängt dich der braune Bär an der Ecke ab und brummt dir nochmals hungrig entgegen, lässt sich dann aber sehr motiviert von dir füttern. So sind am Ende alle glücklich und satt :)');
                    } else {
                        displayText('Falsche Eingabe, du wirst gefressen :(');
                    }

                    // Eingabefeld leeren
                    inputField.value = '';
                }
            });
        } else {
            displayText('Falsche Eingabe, du wirst gefressen :(');
        }
    }

    // Event-Listener für die Enter-Taste hinzufügen
    inputField.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            handleDecision();
        }
    });
});
