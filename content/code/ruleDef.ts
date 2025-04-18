import type { SparqlRule } from '@traqula/core';
const iriOrNil: SparqlRule<'iriOrNil', URL | null> = <const>{
  name: 'iriOrNil',
  impl: ({SUBRULE, CONSUME, OR}) => () => OR<URL | null>([
    {ALT: () => SUBRULE(iri, undefined)},
    {ALT: () => {
        CONSUME(l.terminals.nil);
        return null;
      } },
  ]),
};