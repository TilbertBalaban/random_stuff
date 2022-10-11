/* solid
 принципи розробки програм, при дотриманні яких частини програми максимально незалежні і 
 зміни в одній частині не будуть ламати логіку іншої частини 
*/

/* s - single responsibility
 один клас (функція) повинна виконувати одну дію (потрібно великі розбивати на менші)
 причини
 - важко підтримувати (при зміні однієї частини - необхідно тестувати інші)
 - можливі конфлікти при співльній роботі з декількома розробниками в одному файлі
*/

/* o - open-closed
  додавати нову логіку, замість того, щоб міняти вже існуючу
  причини
  - необхідно заново тестуватии старий код
*/

/* l - liskov substitution 
  дочірній клас не повинен заміняти поведінку батьківського, він повинен її доповнювати. 
  (батьківський клас можна замінити дочірнім)
  1. тобто не потрібно додавати методи в батьківський клас, якщо вони не будуть потрібні всім дочірнім
  2. оверрайднуті методи повинні приймати такі самі аргументи (або включати їх, розширений список) і повертати такий самий тип результату (або підтип)
  прични
  - можлива неочікувана поведінка дочірніх класів

  interface Form {
    onSubmit: () => void,
  }

  interface ValidateForm extends Form {
    onValidate: () => boolean,
  }

  interface CancelableForm extends Form {
    onCancel: () => void,
  }
*/

/* i - interface segregation
  класи (функції) не повинні залежати від методів, які вони не використовують
  тобто не потрібно створювати загальні інтерфейси, які будуть універсальні (і використовувати багато ?:)
  (щоб класам не доводилося реалізовувати багато методів і тд, які їм не потрібні)
  прични
  - можлива неочікувана поведінка

  interface Modal {
    onSumbit: () => void,
    onClose: () => void,
  }

  interface CancelableModal extends Modal {
    onCancel: () => void,
  }
*/

/* d - dependency inversion
  батьківські компоненти (класи) не повинні залежати від дочірніх
  (при зміні дочірнього класу - не повинен ламатися батьківський)
  потрібно створювати абстрактний прошарок між ними
*/