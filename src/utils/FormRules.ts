// import { Rule } from "antd/lib/form";

import type { Rule } from "antd/lib/form";

/**
 * Function to create a rule to validate a required field
 * @param errorMessage 
 * @returns 
 */
export const RuleRequired = (errorMessage: string): Rule => {
    return {
        required: true,
        message: errorMessage
    };
}
/**
 * Function to create a rule to validate an email
 * @param errorMessage 
 * @returns 
 */
export const RuleEmail = (errorMessage: string): Rule => {
    return {
        type: 'email',
        message: errorMessage
    };
}
/**
 * Function to create a rule to validate no special characters within a string
 * @param errorMessage 
 * @returns 
 */
export const RuleNoSpecialCharacters = (errorMessage: string): Rule => {
    return {
        pattern: RegExp(/^[a-zA-Z0-9.,:áéíóúÁÉÍÓÚàèìòùÀÈÌÒÙäëïöüÄËÏÖÜâêîôûÂÊÎÔÛãñõÃÑÕçÇ\s]+$/),
        message: errorMessage
    };
};