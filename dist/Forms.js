"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Forms {
    validate(formulario, options) {
        var data = {};
        var result = { ok: false, data: data };
        var options = options || {};
        var form = document.getElementById(formulario);
        if (!form)
            return result;
        this.checkCustomValidation(form);
        form.classList.add('was-validated');
        if (!form.checkValidity()) {
            return result;
        }
        else {
            result.ok = true;
        }
        var formData = new FormData(form);
        for (var field of formData.keys()) {
            result.data[field] = formData.get(field);
        }
        ;
        return result;
    }
    checkCustomValidation(form) {
        var data = new FormData(form);
        for (var field of data.keys()) {
            this.equals(form, field);
        }
    }
    equals(form, field) {
        var campo = form.querySelector('[name="' + field + '"]');
        if (campo && campo.hasAttribute('equals')) {
            var field2 = campo.getAttribute('equals') || '';
            var campo2 = document.getElementById(field2);
            if (campo.value != campo2.value) {
                campo.setCustomValidity(field2 + ' must match ' + field);
            }
            else {
                campo.setCustomValidity('');
            }
        }
        ;
    }
}
exports.default = new Forms();
