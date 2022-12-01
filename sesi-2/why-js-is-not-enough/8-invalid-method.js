/**
 * JS doesn't prevent you from calling a non-existing method on a data type.
 */

const str = "This is a string";

// How fast can you spot the typo?
str.toLocalLowerCase();
str.toLocaleLowercase();
