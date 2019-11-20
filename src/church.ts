/**
 * Representing booleans in Lambda calculus
 * True = Lambda(x).Lambda(y).x
 * False = Lambda(x).Lambda(y).y
 */
export const True = (x: any) => (y: any) => x
export const False = (x: any) => (y: any) => y

/**
 * Representing `if` statement
 * If = Lambda(x).Lambda(y).Lambda(z).xyz
 */
export const If = (x: any) => (y: any) => (z: any) => x(y)(z)

/**
 * Representing numbers in Lambda calculus
 */
export const toInt = (f: any) => f((x: any) => x + 1)(0)
export const Zero = (f: any) => (x: any) => x
export const One = (f: any) => (x: any) => f(x)
export const Two = (f: any) => (x: any) => f(f(x))
export const Three = (f: any) => (x: any) => f(f(f(x)))
