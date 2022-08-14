import { body } from "express-validator";

export const userCreateValidation = () => {
  return [
    body("name")
      .isString()
      .withMessage("O campo 'nome' é obrigatório")
      .isLength({ min: 3 })
      .withMessage("O nome deve conter pelo menos 3 caracteres"),

    body("age")
      .isNumeric()
      .withMessage("O campo idade é obrigatório")
      .custom((age) => {
        if (age < 18) {
          throw new Error("Idade mínima para cadastro é de 18 anos.");
        }
        return true;
      }),

    body("job")
      .isString()
      .withMessage(
        "O campo trabalho é obrigatório, pode ser preenchido como 'Estudante' ou também 'Desempregado'"
      ),

    body("hobbies")
      .isArray()
      .isLength({ min: 1 })
      .withMessage("É obrigatório ao menos um hobbie"),
  ];
};
