declare class Forms {
    validate(formulario: string, options: any): {
        ok: boolean;
        data: any;
    };
    private checkCustomValidation;
    private equals;
}
declare const _default: Forms;
export default _default;
