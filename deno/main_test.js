"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("jsr:@std/assert");
const bruch_ts_1 = require("./bruch.ts");
Deno.test("Bruch wird automatisch gekürzt", () => {
    const b = new bruch_ts_1.Bruch(2, 4);
    (0, assert_1.assertEquals)(b.toString(), "1/2");
});
Deno.test("Addition zweier Brüche", () => {
    const b1 = new bruch_ts_1.Bruch(1, 2);
    const b2 = new bruch_ts_1.Bruch(1, 3);
    const sum = b1.add(b2);
    (0, assert_1.assertEquals)(sum.toString(), "5/6");
});
Deno.test("Subtraktion zweier Brüche", () => {
    const b1 = new bruch_ts_1.Bruch(3, 4);
    const b2 = new bruch_ts_1.Bruch(1, 4);
    const diff = b1.sub(b2);
    (0, assert_1.assertEquals)(diff.toString(), "1/2");
});
Deno.test("Multiplikation zweier Brüche", () => {
    const b1 = new bruch_ts_1.Bruch(2, 3);
    const b2 = new bruch_ts_1.Bruch(3, 4);
    const prod = b1.mul(b2);
    (0, assert_1.assertEquals)(prod.toString(), "1/2");
});
Deno.test("Division durch Bruch", () => {
    const b1 = new bruch_ts_1.Bruch(1, 2);
    const b2 = new bruch_ts_1.Bruch(1, 4);
    const quot = b1.div(b2);
    (0, assert_1.assertEquals)(quot.toString(), "2/1");
});
Deno.test("Division durch 0 wirft Fehler", () => {
    const b1 = new bruch_ts_1.Bruch(1, 2);
    const b2 = new bruch_ts_1.Bruch(0, 3);
    (0, assert_1.assertThrows)(() => b1.div(b2));
});
Deno.test("Bruch mit Nenner 0 wirft Fehler", () => {
    (0, assert_1.assertThrows)(() => new bruch_ts_1.Bruch(1, 0));
});
Deno.test("Negativer Bruch wird korrekt dargestellt", () => {
    const b = new bruch_ts_1.Bruch(-1, 2);
    (0, assert_1.assertEquals)(b.toString(), "-1/2");
    const b2 = new bruch_ts_1.Bruch(1, -2);
    (0, assert_1.assertEquals)(b2.toString(), "-1/2");
    const b3 = new bruch_ts_1.Bruch(-1, -2);
    (0, assert_1.assertEquals)(b3.toString(), "1/2");
});
Deno.test("Gleiche Brüche sind gleich", () => {
    const b1 = new bruch_ts_1.Bruch(2, 4);
    const b2 = new bruch_ts_1.Bruch(1, 2);
    (0, assert_1.assertEquals)(b1.equals(b2), true);
});
Deno.test("Ungleiche Brüche sind ungleich", () => {
    const b1 = new bruch_ts_1.Bruch(1, 3);
    const b2 = new bruch_ts_1.Bruch(1, 2);
    (0, assert_1.assertEquals)(b1.equals(b2), false);
});
//# sourceMappingURL=main_test.js.map