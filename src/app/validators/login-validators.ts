import {AsyncValidatorFn, FormControl, ValidatorFn} from "@angular/forms";
import {Observable} from "rxjs";

export function isINFNEmail(): ValidatorFn {
  return ((control: FormControl) => {
    if (control.value.includes("@infn.it")) {
      return null;
    }else{
      return {isEmailInconsistent: true};
    }
  });
}

export function isGlueLabsEmail(): ValidatorFn {
  return ((control: FormControl) => {
    if (control.value.includes("@glue-labs.it")) {
      return null;
    }else{
      return {isEmailInconsistent: true};
    }
  });
}

export function isAsyncEmail(emailCompany: string): AsyncValidatorFn {
  return ((control: FormControl) => {
    return new Observable((observer) => {
      if (control.value && control.value.includes(emailCompany)) {
        observer.next(null);
      }else{
        observer.next({isEmailInconsistent: true});
      }
      observer.complete();
      setTimeout(() => {}, 2000)
    })
  });
}
