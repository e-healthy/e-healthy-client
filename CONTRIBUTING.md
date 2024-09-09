# Guideline de Contribuição 

### Conteúdo 

- [Criando Pull Requests](#repeat-criando-pull-requests)
- [Escrevendo Commits](#memo-escrevendo-commits)
- [Code Review](#white_check_mark-code-review)
- [Estilo de Código](#nail_care-estilo-de-código)
- [Créditos](#pray-créditos)


## :repeat: Criando Pull Requests

- **Envie PRs pequenas:** Cada PR deve abordar uma correção, feature ou refatoração. Pequenas solicitações são mais fáceis de revisar.

- **Priorize clareza:** Escreva código simples e legível, com lógica clara. Adicione comentários explicativos se necessário.

- **Mantenha a consistência:** Siga o estilo e as convenções de codificação do projeto.

- **Inclua testes:** Adicione testes para suas mudanças e siga os padrões de testes já existentes.

- **Atualize o projeto de exemplo e a documentação:** Se necessário, revise exemplos de uso e documente suas mudanças.

- **Use a branch padrão:** Envie suas alterações para a branch padrão, como *main* ou *develop*.

- **Use `rebase` para fazer sync com a *main*:** Caso sua *branch* esteja atrás da *main*, faça o *sync* usando `rebase`.

- **Corrija conflitos e falhas de CI:** Resolva conflitos de merge e falhas em testes ou build rapidamente.

- **Formate corretamente:** Use espaços ao invés de tabulações e escreva comentários completos com pontuação adequada.


## :memo: Escrevendo Commits

Escreva bons commits, utilizando a especificação de [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

```git
<type>: <description>
```

###  Quais tipos existentes?

| type | descrição |
| - | - |
| `chore` | Não afeta a *codebase* |
| `docs` | Mudanças em docs |
| `feat` | Novo recurso |
| `fix` | Correção de *bug* |
| `refactor` | Melhorias na *codebase* |
| `test` | Adição/Correção de testes |

## :white_check_mark: Code Review
- **Revise o código, não o autor:** Foque em melhorias objetivas e ofereça feedback claro e construtivo.

- **Você não é seu código:** Encare críticas ao código como oportunidades de aprendizado, sem levá-las para o lado pessoal.

- **Dê o seu melhor:** Ninguém cria bugs de propósito; erros são parte do processo de aprendizado.

- **Corrija com gentileza:** Aponte violações às diretrizes de forma respeitosa e construtiva.


## :nail_care: Estilo de Código

Mantenha a consistência do estilo de código. Seguir o padrão de formatação e as convenções de nomenclatura do projeto é essencial. Não respeitar esses padrões pode prolongar o processo de revisão, desviando o foco da funcionalidade e desempenho para ajustes superficiais.

Por exemplo, se propriedades privadas são prefixadas com _, mantenha o mesmo padrão ao adicionar novas. Se métodos seguem o estilo camelCase, como thisIsMyMethod, evite variações como this_is_my_method. Em caso de dúvida, pergunte ou consulte exemplos no código.

Sempre que possível, o estilo e a formatação serão reforçados por um linter.

## :pray: Créditos

O Guideline de Contribuição foi criado pela [@jessesquires](https://github.com/jessesquires) e adaptado para este projeto.