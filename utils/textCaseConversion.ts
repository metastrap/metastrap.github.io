export function pascalToSpaces(pascalString: string): string {
  return pascalString
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase())
    .trim();
}

export function npmNameToPascal(npmName: string): string {
  return npmName
    .trim()
    .replace(/[@]/g, '')
    .split(/[-_/]/)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join('')
    .trim();
}
