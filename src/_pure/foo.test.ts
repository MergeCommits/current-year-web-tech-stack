import { calculateThreePlusFive } from "_pure/foo";
import { describe, expect, it } from "vitest";

describe("calculateThreePlusFive", () => {
    it("should return 8", () => {
        expect(calculateThreePlusFive()).toBe(8);
    });
});
