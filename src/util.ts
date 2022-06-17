export const random =
  typeof crypto === "undefined" || !crypto.randomUUID
    ? function random() {
        return Math.random().toString(32).substring(2);
      }
    : function random() {
        return crypto.randomUUID();
      };
