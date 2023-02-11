
/* Essa interface representará um curso. Ela existe apenas em tempo de desenvolvimento. Quando for
* transpilado para o JavaScript, não teremos essa interface. */

/* Só devemos ter uma classe caso tenhamos uma lógica que deva ser inserida dentro do modelo. */
export interface Course {

  _id: string;
  name: string;
  category: string;

}
