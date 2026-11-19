import { Token } from 'aws-cdk-lib';

/**
 * Options for internal prop-path assertion helpers.
 */
interface CriteriaAssertPropOptions {
  /**
   * Property path included in the error message (for example, `props.name`).
   */
  readonly propPath: string;
}

/** True when the string is empty or whitespace-only. */
const isBlankText = (value: string): boolean =>
  !Token.isUnresolved(value) && value.trim().length === 0;

/** Sentence used when a list has no entries. The property path is prefixed by the caller. */
export const AT_LEAST_ONE_VALUE_MESSAGE = 'must contain at least one value.';

/**
 * Internal assertion helpers for non-blank strings and string lists.
 *
 * Not part of the package public API.
 */
export class CriteriaAssert {
  /**
   * Throws if `value` is empty or whitespace-only.
   *
   * @param value - Candidate string.
   * @param options - Options for the error message path.
   * @throws Error when `value` is blank.
   */
  public static nonBlankString(
    value: string,
    options: CriteriaAssertPropOptions,
  ): void {
    if (isBlankText(value)) {
      throw new Error(`${options.propPath} must be a non-blank string.`);
    }
  }

  /**
   * Throws if `values` is empty or any element is blank.
   *
   * @param values - Candidate string list.
   * @param options - Options for the error message path.
   * @throws Error when the list is empty or contains a blank string.
   */
  public static nonEmptyStringList(
    values: string[],
    options: CriteriaAssertPropOptions,
  ): void {
    if (values.length === 0) {
      throw new Error(`${options.propPath} ${AT_LEAST_ONE_VALUE_MESSAGE}`);
    }

    for (const value of values) {
      if (isBlankText(value)) {
        throw new Error(`${options.propPath} must not contain blank strings.`);
      }
    }
  }
}
