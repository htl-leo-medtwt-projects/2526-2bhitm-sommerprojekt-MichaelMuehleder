const data = {

    // -----------Besucher--------------

    frage0: "Wie lange waren Sie ungefähr im Ausstellungsraum?",
    antwort0: "Ich glaube… länger als geplant. Ich wollte eigentlich nur kurz hineinsehen, aber dieses eine Gemälde hat mich irgendwie festgehalten. Ich habe die Zeit ein wenig aus den Augen verloren.",
    score0: 1,
    summary0: "[Besucher] Zu lange geblieben, auffällige Faszination für Gemälde, mögliches Zielinteresse",

    frage1: "Warum haben Sie sich gerade dieses eine Gemälde so genau angesehen?",
    antwort1: "Es hatte eine besondere Ausstrahlung… schwer zu erklären. Die Technik wirkte fast zu perfekt, fast so, als hätte jemand sehr viel Kontrolle darüber gehabt, was man sieht.",
    score1: 1,
    summary1: "[Besucher] Analysiert Technik statt Kunst, ungewöhnliches Interesse an Kontrolle und Wirkung",

    frage2: "Ist Ihnen aufgefallen, dass das Personal Sie mehrfach beobachtet hat?",
    antwort2: "Vielleicht… ich bin mir nicht sicher. Ich habe mich nicht wirklich beobachtet gefühlt, eher… als würde jemand sicherstellen wollen, dass alles korrekt abläuft.",
    score2: 0,
    summary2: "[Besucher] Weicht Beobachtungsfrage aus, versucht ruhig und unauffällig zu wirken",

    frage3: "Haben Sie schon einmal ähnliche Werke gesehen?",
    antwort3: "Ja, einige. Ich beschäftige mich privat ein wenig mit Kunst… Fälschungen, Originale, solche Unterschiede sind manchmal interessanter als das Werk selbst.",
    score3: 2,
    summary3: "[Besucher] Großes Interesse an Fälschungen und Originalen, mögliches Wissen über Kunstbetrug",

    frage4: "Warum haben Sie den Raum so plötzlich verlassen?",
    antwort4: "Ich wollte nicht auffallen. Außerdem hatte ich das Gefühl, dass ich genug gesehen hatte… mehr als ich eigentlich geplant hatte.",
    score4: 1,
    summary4: "[Besucher] Verließ Raum abrupt, wollte nicht auffallen, mögliches verdächtiges Verhalten",

    // ------------MuseumFrau-------------

    frage5: "Wie verlief die Führung zur Tatzeit?",
    antwort5: "Die Führung verlief ganz normal. Ich habe den Besuchern die wichtigsten Werke gezeigt und bin dabei wie üblich durch die Haupt- und Nebenräume gegangen. Es gab keine besonderen Vorkommnisse.",
    score5: 0,
    summary5: "[MuseumFrau] Sehr routinierte und kontrollierte Aussage ohne Details",

    frage6: "Hatten Sie während der Führung Zugang zu allen Bereichen?",
    antwort6: "Ja, ich habe als leitende Kunsthistorikerin Zugang zu den relevanten Ausstellungs- und Vorbereitungsräumen. Das ist notwendig, damit ich die Führung korrekt durchführen kann.",
    score6: 0,
    summary6: "[MuseumFrau] Hatte Zugang zu allen wichtigen Bereichen und Räumen",

    frage7: "Ist Ihnen im Museum etwas Ungewöhnliches aufgefallen?",
    antwort7: "Nein, nichts Auffälliges. Alles war wie gewohnt vorbereitet, die Sicherheits- und Lichtsysteme haben normal funktioniert.",
    score7: 0,
    summary7: "[MuseumFrau] Keine Auffälligkeiten erwähnt, wirkt sehr glatt und vorbereitet",

    frage8: "Wie gut kennen Sie die Abläufe im Museum?",
    antwort8: "Sehr gut. Ich arbeite seit vielen Jahren hier und kenne sowohl die Kunstwerke als auch die organisatorischen Abläufe sehr genau.",
    score8: 0,
    summary8: "[MuseumFrau] Langjährige Erfahrung und detailliertes Insiderwissen",

    frage9: "Gab es während der Führung Probleme oder Unterbrechungen?",
    antwort9: "Nein, die Führung lief ruhig und ohne Zwischenfälle ab. Die Besucher waren interessiert und alles verlief wie geplant.",
    score9: 0,
    summary9: "[MuseumFrau] Beschreibt Situation als zu perfekt und problemlos",

    // ------------IT_Arbeiter-------------

    frage10: "Was ist mit den Kameras zur Tatzeit passiert?",
    antwort10: "Es gab eine kurze Unterbrechung im System. Ich dachte zuerst, es wäre nur ein kleiner Aussetzer, aber ich musste es mir genauer ansehen.",
    score10: 1,
    summary10: "[IT_Arbeiter] Kameraausfall wird heruntergespielt, mögliche Kenntnis der Ursache",

    frage11: "Warum hat das Licht im Ausstellungsraum kurz geflackert?",
    antwort11: "Das hängt oft mit den Steuerungssystemen zusammen. Wenn etwas neu gestartet wird, kann es kurz zu solchen Effekten kommen.",
    score11: 1,
    summary11: "[IT_Arbeiter] Sehr technische Erklärung, kennt Systemabläufe genau",

    frage12: "Haben Sie die Kameras selbst neu gestartet?",
    antwort12: "Ja, ich habe einen Reset durchgeführt, um das Problem zu beheben. Das ist ein Standardvorgang in solchen Situationen.",
    score12: 1,
    summary12: "[IT_Arbeiter] Direkter Eingriff ins Sicherheitssystem während des Vorfalls",

    frage13: "Könnte jemand das System manipuliert haben?",
    antwort13: "Theoretisch ja… aber dafür bräuchte man Zugriff und ein gewisses Verständnis der Technik. Das ist nichts, was ein normaler Besucher einfach so macht.",
    score13: 1,
    summary13: "[IT_Arbeiter] Beschreibt Täterprofil mit technischem Insiderwissen",

    frage14: "Warum waren Sie währenddessen im Ausstellungsraum?",
    antwort14: "Ich musste prüfen, ob Licht und Kameras wieder korrekt funktionieren. Dafür muss man manchmal direkt vor Ort nachsehen.",
    score14: 1,
    summary14: "[IT_Arbeiter] War genau während der Störung direkt vor Ort",

    // ------------Wachmann-------------

    frage15: "Wo waren Sie zur Tatzeit?",
    antwort15: "Ich war im Sicherheitsbüro und habe die Kameras überwacht. Das ist meine Hauptaufgabe während solcher Veranstaltungen.",
    score15: 0,
    summary15: "[Wachmann] Beruft sich stark auf berufliche Routine und Alibi",

    frage16: "Wie erklären Sie den Ausfall der Kameras?",
    antwort16: "Solche Systeme sind nicht unfehlbar. Es gab eine kurze Störung, aber nichts, was sofort auf Sabotage hindeuten würde.",
    score16: 1,
    summary16: "[Wachmann] Spielt mögliche Sabotage bewusst herunter",

    frage17: "Haben Sie den Technikmitarbeiter sofort informiert?",
    antwort17: "Ja, ich habe ihn verständigt, sobald ich die Unregelmäßigkeit bemerkt habe. Dafür ist er schließlich zuständig.",
    score17: 0,
    summary17: "[Wachmann] Versucht korrekt und verantwortungsvoll zu wirken",

    frage18: "Gab es Sicherheitslücken im Ausstellungsraum?",
    antwort18: "Offiziell nein. Aber in solchen Momenten reicht schon ein kleines Zeitfenster, damit jemand etwas ausnutzen kann.",
    score18: 1,
    summary18: "[Wachmann] Kennt mögliche Schwachstellen und Tatgelegenheiten",

    frage19: "Kennen Sie die Schwachstellen des Systems?",
    antwort19: "Natürlich. Es ist meine Aufgabe, sie zu kennen, um sie zu sichern… nicht um sie auszunutzen.",
    score19: 2,
    summary19: "[Wachmann] Kennt Sicherheitslücken genau und rechtfertigt sich auffällig",

    frage20: "Warum wirken Sie so ruhig bei dem Vorfall?",
    antwort20: "Panik hilft niemandem. In meinem Beruf muss man auch in kritischen Situationen einen klaren Kopf behalten.",
    score20: 0,
    summary20: "[Wachmann] Bleibt ungewöhnlich ruhig und kontrolliert",

    // ------------Arbeiterin-------------

    frage21: "Wo waren Sie genau zur Tatzeit?",
    antwort21: "Ich war im Archiv unten… es ist dort immer etwas still und kühl, fast schon beruhigend. Ich musste mich auf die Unterlagen konzentrieren, aber ehrlich gesagt… war ich auch ein wenig nervös wegen der bevorstehenden Führung.",
    score21: 1,
    summary21: "[Arbeiterin] Beschreibt Archiv auffällig detailliert, schwaches Alibi",

    frage22: "Warum hat Sie niemand im Archiv gesehen?",
    antwort22: "Das ist nicht ungewöhnlich… ich arbeite dort oft alleine. Ich schätze diese Ruhe, wissen Sie. Es gibt Tage, da verbringe ich Stunden dort, ohne einer einzigen Person zu begegnen.",
    score22: 1,
    summary22: "[Arbeiterin] Keine Zeugen, betont Isolation und Alleinarbeit",

    frage23: "Ihr Zugang wurde beim Ausstellungsraum registriert…",
    antwort23: "Ja… das hat mich selbst überrascht. Vielleicht bin ich kurz daran vorbeigegangen, ohne es bewusst wahrzunehmen. An solchen Abenden ist man ständig in Bewegung, alles verschwimmt ein wenig.",
    score23: 1,
    summary23: "[Arbeiterin] Kann registrierten Zugang nicht klar erklären",

    frage24: "Sie kennen die Sicherheitsbereiche sehr gut, stimmt das?",
    antwort24: "Nun ja… nach all den Jahren wäre es eher seltsam, wenn ich es nicht täte. Ich habe mich immer sehr für die Abläufe interessiert… man entwickelt mit der Zeit ein Gefühl dafür, wie das System funktioniert.",
    score24: 0,
    summary24: "[Arbeiterin] Großes Interesse an Sicherheitsabläufen und Systemen",

    frage25: "Warum wirkt es, als würde Sie der Fall persönlich beschäftigen?",
    antwort25: "Weil es mich auch betrifft. Dieses Museum ist mehr als nur ein Arbeitsplatz für mich… ich habe so viel Zeit hier verbracht. Der Gedanke, dass so etwas hier passieren konnte… lässt mich einfach nicht los.",
    score25: 0,
    summary25: "[Arbeiterin] Starke emotionale Bindung zum Museum und Vorfall"
};