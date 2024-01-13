import { npmNameToPascal } from 'utils/textCaseConversion';

describe('npmNameToPascal', () => {
  it('should convert npm name with hyphens to pascal case', () => {
    const npmName = 'my-package-name';
    const expectedPascalCase = 'MyPackageName';
    const result = npmNameToPascal(npmName);
    expect(result).toBe(expectedPascalCase);
  });

  it('should convert npm name with underscores to pascal case', () => {
    const npmName = 'my_package_name';
    const expectedPascalCase = 'MyPackageName';
    const result = npmNameToPascal(npmName);
    expect(result).toBe(expectedPascalCase);
  });

  it('should convert npm name with mixed case to pascal case', () => {
    const npmName = 'my-Package_Name';
    const expectedPascalCase = 'MyPackageName';
    const result = npmNameToPascal(npmName);
    expect(result).toBe(expectedPascalCase);
  });

  it('should convert npm name with leading/trailing spaces to pascal case', () => {
    const npmName = '  my-package-name  ';
    const expectedPascalCase = 'MyPackageName';
    const result = npmNameToPascal(npmName);
    expect(result).toBe(expectedPascalCase);
  });

  it('should convert npm name with numbers to pascal case', () => {
    const npmName = 'my-package-123';
    const expectedPascalCase = 'MyPackage123';
    const result = npmNameToPascal(npmName);
    expect(result).toBe(expectedPascalCase);
  });

  it('should convert npm name with special characters to pascal case', () => {
    const npmName = '@my_package/$full_name';
    const expectedPascalCase = 'MyPackage$fullName';
    const result = npmNameToPascal(npmName);
    expect(result).toBe(expectedPascalCase);
  });
});
