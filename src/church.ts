/**
 * REPRESENTATION OF BOOLEAN LAMBDA CALCULUS
 *
 * True = Lambda(x).Lambda(y).x
 * False = Lambda(x).Lambda(y).y
 */
export const True = (x: any) => (y: any) => x
export const False = (x: any) => (y: any) => y

/**
 * REPRESENTATION OF IF STATEMENT LAMBDA CALCULUS
 *
 * If = Lambda(x).Lambda(y).Lambda(z).xyz
 *
 * If(True)(x)(y) = x
 * If(False)(x)(y) = y
 */
export const If = (x: any) => (y: any) => (z: any) => x(y)(z)

/**
 * REPRESENTATION OF NUMBERS LAMBDA CALCULUS
 */
export const toInt = (f: any) => f((x: any) => x + 1)(0)
export const Zero = (f: any) => (x: any) => x
export const One = (f: any) => (x: any) => f(x)
export const Two = (f: any) => (x: any) => f(f(x))
export const Three = (f: any) => (x: any) => f(f(f(x)))

/**
 * ALPHA CONVERSION
 * Lambda(x)u.v = u[x := v]
 *
 * Lambda(x).x - identity function
 * Lambda(x).x(Lambda(x).x) => x[x := Lambda(x).x] => Lambda(x).x
 *
 * We can create recursion as a function itself:
 * Lambda(x).xx(Lambda(x).xx) => x[x := Lambda(x).xx] => Lambda(x).xx(Lambda(x).xx)
 *
 * Omega-combinator or looping combinator
 * Recursively loops over a given function
 */
const Omega = (x: any) => x(x)

/**
 * COMBINATOR
 *
 * Y-combinator is a recursive, fixed-point function
 * Fixed-point function returns its argument, e.g. x^2 - 3X + 4 at x = 2 returns 2
 *
 * Y = Lambda(f).(Lambda(x).f(xx))(Lambda(x).f(xx))
 *
 * Bit of explanation. As in Omega-combinator we have:
 * Lambda(x).f(xx)(Lambda(x).f(xx)) => f(xx)[x := Lambda(x).f(xx)] => Lambda(x).f(xx)(Lambda(x).f(xx))
 */
export const Y = (f: any) =>
  ((x: any) => x(x))((x: any) => f((y: any) => x(x)(y)))

/**
 * List of Fibonacci numbers: 1, 1, 2, 3, 5, 8, ...
 */
export const fib = (f: any) => (n: number) => (n <= 1 ? n : f(n - 1) + f(n - 2))
export const Fib = Y(fib)
