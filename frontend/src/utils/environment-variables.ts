export function getRequiredEnvironmentVariable(
  name: string,
  defaultValue?: string
): string {
  const value = process.env[name] ?? defaultValue;
  if (value === undefined) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

export function getOptionalEnvironmentVariable(
  name: string,
  defaultValue?: string
): string | undefined {
  return process.env[name] ?? defaultValue;
}
