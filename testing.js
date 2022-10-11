/* піраміда тестування
e2e (невелика к-ть)
integration
screenshots
unit (модульне) (велика к-ть)
*/

/* технології
Jest
React-testing-library
webdriverIO
storybook + loki
*/

/* 
 для чого
 1. перевірити чи працює
 2. описати сценарій, як це має працювати

 види
 1. функціональне (інтеграційні, е2е, юніт і тд)
 2. не функціональне (тести безпеки, тести перформенс і тд)
*/

/* Модульне (юніт) - 70-80%
тести для невеликих +- незалежних частин коду (функцій, методів, компонентів)
стек - Jest
https://jestjs.io/uk/
describe('name', () => {
  test('test case name', () => {
      expect(funcName(value)).toBe(expected output);
  })
  ...
})

.toBe
.toEqual
.not.toEqual
.toBeCalledTimes etc
*/

/* Скріншотне - 70-80%
стек - Jest
(порівнюється старий і новий скріншоти) 
*/

/* Інтеграційне - 20-30%
тестування декільках модулів у звязці 
*/

/* е2е - 10%
тест виконується у браузері, використовує справжній бекенд і тд (симулює поведінку користувача)
*/

/* тести, покривати наступні сценарії
1. валідне значення
2. крайнє валідне значення (макс і мін значення)
3. не валідні значення
*/

/* Integration
React testing
stack - react testing library
screen.debug()
data-testid="testIdForGettingInTests"
fireEvent/userEvent

describe('TEST APP', () => {
  test('renders learn react link', () => {
    render(<App />);
    const helloWorldElem = screen.getByText(/hello world/i)
    const btn = screen.getByRole('button')
    const input = screen.getByPlaceholderText(/input value/i)
    expect(helloWorldElem).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toMatchSnapshot(); // ?
  });
}

*/

/* e2e (для головного функціоналу)
stack - webdrivenIO (cypress, puppeteer etc) 
*/

/* storybook + snaphots (loki) (юніт тести для ui)
створює фотографії сторібуку з різних девайсів
*/