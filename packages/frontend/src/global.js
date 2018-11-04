/**
 * BUG: here will wrong when school number start with 3
 * I think 1, 2 is enough, because I don 't think this app
 * can live 12 years.
 * MUST Start with `/^` and end with `$/`
 *
 * @global
 * @export SCHOOL_NUMBER_RULE
 */
export const SCHOOL_NUMBER_RULE = /^[12][0-9]{7,7}$/

export const PASSWORD_RULE = /^[0-9a-zA-Z!@#$%^&*_=+]{6,20}$/

export const TERM_START_DATE = '2018-09-10'
