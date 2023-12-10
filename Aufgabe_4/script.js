// Starterfenster
let SchwierigeEntscheidung = prompt("Du gehst gerne spazieren und kommst gerade in einen tiefen Wald, wo du plötzlich vor zwei Höhlen stehst. In beiden Höhlen befindet sich ein extrem hungrig aussehender Bär, und nun stehst du vor der Entscheidung, welchen der beiden Bären du füttern sollst. Beide sehen aber so aus, als würden sie es dir übel nehmen, wenn du sie nicht wählst. Fütterst du nun den 'braunen' oder den 'schwarzen' Bären?");

let BraunerBärEntscheidung;

// Entscheidungsweg 1 mit dem braunen Bären
if (SchwierigeEntscheidung === 'braunen') {
    BraunerBärEntscheidung = prompt('Der braune Bär scheint sich sehr zu freuen, dass du ihn gewählt hast. Wie erwartet ist er extrem hungrig und schaut dich erwartungsvoll an. Du hörst jedoch ein tiefes Brummen aus der anderen Höhle und fragst dich, was das bedeutet. Möchtest du weiterfüttern oder den Wald verlassen?');

    // Verschiedene Eingabemöglichkeiten und dementsprechende Antworten
    if (BraunerBärEntscheidung === 'Weiterfüttern') {
        alert('Du ignorierst das tiefe Brummen geschickt und fütterst weiter. Nach ein paar Sekunden kommt der schwarze Bär um die Ecke, schaut dich zuerst kurz hungrig an, gesellt sich dann aber zu dir und dem braunen Bären dazu und genießt das leckere Essen :D');
    } else if (BraunerBärEntscheidung === 'Wald verlassen') {
        alert('Du verlässt den Wald zügig nach dem tiefen Brummen, nur um an der Ecke vom schwarzen Bären abgefangen zu werden. Er sieht jedoch so aus, als würde er dir für ein paar Leckerbissen verzeihen, dass du ihn nicht direkt gewählt hast. Also fütterst du ihn, und alle sind satt und zufrieden :)');
    } else {
        alert('Falsche Eingabe, du wirst gefressen :(');
    }

let SchwarzerBärEntscheidung; 
    // Entscheidungsweg 2 mit dem schwarzen Bären
} else if (SchwierigeEntscheidung === 'schwarzen') {
    SchwarzerBärEntscheidung = prompt('Du wählst den schwarzen Bären und während du zu ihm läufst, um ihn mit deinen Leckerbissen zu verwöhnen, hörst du noch ein tiefes Brummen aus der anderen Höhle. Du überlegst, ob es die richtige Entscheidung war, jedoch ist der schwarze Bär schon sehr hungrig und niedlich. Möchtest du weiterfüttern oder deine Entscheidung überdenken?');

    // Verschiedene Eingabemöglichkeiten und dementsprechende Antworten
    if (SchwarzerBärEntscheidung === 'Weiterfüttern') {
        alert('Du fütterst tiefenentspannt weiter und mittendrin kommt der braune Bär aus der anderen Höhle, beobachtet dich kurz und entscheidet sich dann mitzufuttern. Alle sind satt und zufrieden am brummen :)');
    } else if (SchwarzerBärEntscheidung === 'überdenken') {
        alert('Du überdenkst deine Entscheidung, und gerade als du den Wald verlassen wolltest, fängt dich der braune Bär an der Ecke ab und brummt dir nochmals hungrig entgegen, lässt sich dann aber sehr motiviert von dir füttern. So sind am Ende alle glücklich und satt :)');
    } else {
        alert('Falsche Eingabe, du wirst gefressen :(');
    }
} else {
    alert('Falsche Eingabe, du wirst gefressen :(');
}
