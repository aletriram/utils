
class Forms {


	public validate(formulario: string, options: any) {

		var data: any = {};
		var result  = { ok: false, data: data };
		var options = options || {};

		var form = <HTMLFormElement>document.getElementById(formulario);
		if (!form) return result;

		this.checkCustomValidation(form);

		if (!form.checkValidity()) {
			form.classList.add('was-validated');
			return result;
		} else {
			result.ok = true;
		}

		var formData = new FormData(form);
		for (var field of formData.keys()) {
			result.data[field] = formData.get(field);
		};

		return result;
	}


	private checkCustomValidation(form: HTMLFormElement) {
		var data = new FormData(form);
		for (var field of data.keys()) {

			this.equals(form, field)
		}
	}


	private equals(form: HTMLFormElement, field: string) {

		var campo = <HTMLInputElement>form.querySelector('[name="' + field + '"]');

		if (campo && campo.hasAttribute('equals')) {
			var field2 = campo.getAttribute('equals') || '';
			var campo2 = <HTMLInputElement>document.getElementById(field2);
			if (campo.value != campo2.value) {
				campo.setCustomValidity(field2 + ' must match ' + field);
			} else {
				campo.setCustomValidity('');
			}
		};
	}

}

export default new Forms();