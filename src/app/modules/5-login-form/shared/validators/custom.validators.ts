import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';

export const CustomValidators = {
  name: ({ value: username }: AbstractControl): ValidationErrors | null => {
    let error = '';

    if (!username || username?.length < 3) {
      error = 'Too short value';
    } else if (/[,;\/\\!"'@$%^:*()]/.test(username)) {
      error = 'Illegal characters';
    }

    return error.length ? { name: error } : null;
  },

  password: ({ value: pwd }: AbstractControl): ValidationErrors | null => {
    let error = '';

    if (!pwd || pwd?.length < 8) {
      error = 'Too short password';
    } else if (!/[,;\/\\!"'@$%^:*() ]/.test(pwd)) {
      error = 'Password must contains special characters';
    }

    return error.length ? { password: error } : null;
  }
};
