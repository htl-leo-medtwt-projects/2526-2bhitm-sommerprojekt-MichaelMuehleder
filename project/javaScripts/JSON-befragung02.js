const data02 = {

    // BESUCHER (0–4)
    frage0: "Warum wussten Sie so genau, worauf man bei Fälschungen achten muss?",
    antwort0: "Ich interessiere mich einfach dafür… vielleicht ein bisschen zu sehr. Aber das heißt nicht, dass ich etwas damit zu tun habe.",
    score0: 2,
    summary0: "Der Besucher zeigt auffälliges Wissen über Fälschungen, streitet eine Beteiligung aber ab.",

    frage1: "Sie haben das Bild ungewöhnlich lange betrachtet – warum?",
    antwort1: "Weil ich mir sicher sein wollte… ich meine, einfach weil es interessant war.",
    score1: 1,
    summary1: "Der Besucher verhielt sich auffällig aufmerksam beim Betrachten des Werks.",

    frage2: "Hatten Sie einen bestimmten Grund, genau dieses Werk zu analysieren?",
    antwort2: "Nein… zumindest keinen, den ich erklären müsste.",
    score2: 2,
    summary2: "Der Besucher bleibt bei seinen Beweggründen unklar und ausweichend.",

    frage3: "Waren Sie schon einmal bei ähnlichen Ausstellungen?",
    antwort3: "Natürlich. Kunst interessiert mich schon seit Jahren.",
    score3: 1,
    summary3: "Der Besucher kennt sich mit Kunst und Ausstellungen gut aus.",

    frage4: "Warum wirkten Sie nervös, als das Bild untersucht wurde?",
    antwort4: "Vielleicht, weil plötzlich alle verdächtigt wurden.",
    score4: 1,
    summary4: "Der Besucher reagierte sichtbar nervös auf die Situation.",

    // MUSEUMSFRAU (5–9)
    frage5: "Wie konnten Sie sicher sein, dass alles normal ablief?",
    antwort5: "Weil ich die Abläufe kenne. Es gab keinen Grund, etwas anderes anzunehmen.",
    score5: 0,
    summary5: "Die Museumsfrau vertraut den Abläufen und sieht keinen Verdacht.",

    frage6: "Hatten Sie Zugang zu den betroffenen Bereichen?",
    antwort6: "Ja, aber nur im Rahmen meiner Arbeit.",
    score6: 0,
    summary6: "Sie bestätigt offiziellen Zugang zu den Bereichen.",

    frage7: "Könnte jemand Ihr Vertrauen ausgenutzt haben?",
    antwort7: "Das wäre möglich… aber ich habe nichts bemerkt.",
    score7: 1,
    summary7: "Sie hält Manipulation für möglich, hat aber keine Hinweise bemerkt.",

    frage8: "Gab es an diesem Abend ungewöhnliche Besucher?",
    antwort8: "Einige wirkten sehr interessiert an den Sicherheitswegen.",
    score8: 1,
    summary8: "Die Museumsfrau bemerkte auffälliges Verhalten einiger Gäste.",

    frage9: "Haben Sie jemanden in gesperrten Bereichen gesehen?",
    antwort9: "Nicht direkt… aber ich dachte, ich hätte Schritte gehört.",
    score9: 2,
    summary9: "Sie erinnert sich an verdächtige Geräusche nahe gesperrter Bereiche.",

    // TECHNIKER (10–14)
    frage10: "Warum ist der Systemausfall genau zur Tatzeit passiert?",
    antwort10: "Zufall… denke ich. Oder jemand wollte genau diesen Moment nutzen.",
    score10: 2,
    summary10: "Der Techniker hält Zufall für möglich, sieht aber auch gezielte Manipulation.",

    frage11: "Hätten Sie die Möglichkeit gehabt, das selbst zu verursachen?",
    antwort11: "Technisch gesehen ja… aber das gilt für jeden mit Zugriff.",
    score11: 2,
    summary11: "Der Techniker bestätigt, dass mehrere Personen das System manipulieren könnten.",

    frage12: "Warum waren Sie direkt im Raum und nicht nur im System?",
    antwort12: "Ich wollte sicher gehen… oder vielleicht musste ich etwas überprüfen.",
    score12: 1,
    summary12: "Der Techniker war vor Ort, gibt aber keine klare Begründung.",

    frage13: "Gab es vorher schon Probleme mit dem System?",
    antwort13: "Kleinere Fehler, aber nichts in diesem Ausmaß.",
    score13: 1,
    summary13: "Es gab bereits technische Probleme vor dem Vorfall.",

    frage14: "Wer hatte außer Ihnen noch Zugriff?",
    antwort14: "Ein paar Mitarbeiter… die Liste ist nicht besonders kurz.",
    score14: 1,
    summary14: "Mehrere Personen hatten Zugriff auf die Techniksysteme.",

    // WACHMANN (15–19)
    frage15: "Warum haben Sie den Ausfall nicht sofort als kritisch eingestuft?",
    antwort15: "Weil solche Fehler vorkommen. Es sah nicht sofort verdächtig aus.",
    score15: 0,
    summary15: "Der Wachmann wertete den Ausfall zunächst als normalen Fehler.",

    frage16: "Kennen Sie alle Schwachstellen des Systems?",
    antwort16: "Ja… aber um sie zu schützen.",
    score16: 1,
    summary16: "Der Wachmann kennt die Schwachstellen angeblich zum Schutz.",

    frage17: "Könnte jemand diese Schwachstellen gezielt nutzen?",
    antwort17: "Wenn er sich auskennt… ja.",
    score17: 1,
    summary17: "Er bestätigt, dass Systemschwächen ausnutzbar sind.",

    frage18: "Haben Sie während des Ausfalls jemanden gesehen?",
    antwort18: "Nur Schatten im Flur. Ich konnte niemanden erkennen.",
    score18: 2,
    summary18: "Der Wachmann sah eine unbekannte Person während des Ausfalls.",

    frage19: "Warum waren Sie nicht direkt beim betroffenen Raum?",
    antwort19: "Ich musste zuerst die anderen Bereiche absichern.",
    score19: 1,
    summary19: "Der Wachmann war wegen anderer Sicherheitsaufgaben abgelenkt.",

    // ARBEITERIN (20–24)
    frage20: "Warum wurde Ihr Zugang im falschen Bereich registriert?",
    antwort20: "Ich… weiß es nicht genau. Vielleicht war es ein Fehler.",
    score20: 2,
    summary20: "Die Arbeiterin hat eine ungeklärte Zugangsabweichung.",

    frage21: "Sie kannten die Abläufe sehr gut – ein Vorteil?",
    antwort21: "Vielleicht… aber das macht mich nicht schuldig.",
    score21: 1,
    summary21: "Sie kennt die Abläufe gut, weist aber Schuld zurück.",

    frage22: "Warum wirkten Sie nervös bei der Befragung?",
    antwort22: "Weil mich die Situation belastet… mehr nicht.",
    score22: 1,
    summary22: "Sie wirkt emotional belastet während der Befragung.",

    frage23: "Haben Sie an diesem Abend Überstunden gemacht?",
    antwort23: "Ja, ich musste noch einige Aufgaben erledigen.",
    score23: 1,
    summary23: "Die Arbeiterin war länger als üblich im Gebäude.",

    frage24: "Ist Ihnen etwas Ungewöhnliches aufgefallen?",
    antwort24: "Einige Türen standen offen, obwohl sie geschlossen sein sollten.",
    score24: 2,
    summary24: "Sie bemerkte offene Türen in gesicherten Bereichen."
};