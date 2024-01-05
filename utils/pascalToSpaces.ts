export default function pascalToSpaces(pascalString: string): string {
  return pascalString
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase())
    .trim();
}
