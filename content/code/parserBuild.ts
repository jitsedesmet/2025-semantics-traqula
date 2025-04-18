import { ParserBuilder } from '@traqula/core';
const parser = ParserBuilder
  .create([ iriOrNil, rule1 ])
  .addRule(rule2)
  .patchRule(rule1Alternative)
  .build({
    tokenVocabulary: myLexerBuilder.tokenVocabulary,
  });
// The argument and return types of the function are known,
// ast will thus be inferred to have the type `URL | null`.
const ast = parser.iriOrNil(myString, myContext, myParameters)