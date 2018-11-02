/**
 * BUG: here will wrong when school number start with 3
 * I think 1, 2 is enough, because I don 't think this app
 * can live 12 years.
 * MUST Start with `/^` and end with `$/`
 *
 * @global
 * @export SCHOOL_NUMBER
 */
export const SCHOOL_NUMBER = /^[12][0-9]{7,7}$/

export const TERM_START_DATE = '2018-09-10'
