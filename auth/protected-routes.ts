export function isProtectedRoute(pathname: string): boolean {
  const protectedPatterns = [
    /^\/dashboard(\/.*)?$/,
    // /^\/committee\/application\/page(\/.*)?$/,
  ];
  return protectedPatterns.some((pattern) => pattern.test(pathname));
}
