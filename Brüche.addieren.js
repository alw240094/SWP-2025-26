let bruch1 = "1_2/4";
let bruch2 = "1_3/3";

function parseBruch(bruch) {
    if (typeof bruch !== "string") throw "Bruch muss ein String sein!";
    let ganze = 0, zaehler, nenner;
    if (bruch.includes("_")) {
        const [g, bruchteil] = bruch.split("_");
        const [z, n] = bruchteil.split("/");
        ganze = Number(g);
        zaehler = Number(z);
        nenner = Number(n);
        if (isNaN(ganze) || isNaN(zaehler) || isNaN(nenner)) throw "Ungültige Zahlen im Bruch!";
        if (nenner === 0) throw "Nenner darf nicht 0 sein!";
        zaehler = ganze * nenner + zaehler;
    } else {
        const [z, n] = bruch.split("/");
        zaehler = Number(z);
        nenner = Number(n);
        if (isNaN(zaehler) || isNaN(nenner)) throw "Ungültige Zahlen im Bruch!";
        if (nenner === 0) throw "Nenner darf nicht 0 sein!";
    }
    return { zaehler, nenner };
}

function berechneKGV(a, b) {
    let kgv = Math.max(a, b);
    while (kgv % a !== 0 || kgv % b !== 0) {
        kgv++;
    }
    return kgv;
}

function berechneGGT(a, b) {
    while (b !== 0) [a, b] = [b, a % b];
    return a;
}

try {
    const b1 = parseBruch(bruch1);
    const b2 = parseBruch(bruch2);

    const kgv = berechneKGV(b1.nenner, b2.nenner);

    const z1 = b1.zaehler * (kgv / b1.nenner);
    const z2 = b2.zaehler * (kgv / b2.nenner);
    const summe = z1 + z2;

    console.log("Gemeinsamer Nenner:", kgv);
    console.log("Erweiterter erster Bruch:", z1 + "/" + kgv);
    console.log("Erweiterter zweiter Bruch:", z2 + "/" + kgv);
    console.log("Summe der Brüche:", summe + "/" + kgv);

    const ggt = berechneGGT(summe, kgv);
    const gekürztZ = summe / ggt;
    const gekürztN = kgv / ggt;

    console.log("GGT:", ggt);
    console.log("Gekürzter Bruch:", gekürztZ + "/" + gekürztN);

    if (gekürztZ > gekürztN) {
        const ganze = Math.floor(gekürztZ / gekürztN);
        const rest = gekürztZ % gekürztN;
        console.log("Gemischter Bruch:", ganze + "_" + rest + "/" + gekürztN);
    }
} catch (err) {
    console.error("Fehler:", err);
}