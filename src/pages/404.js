/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

import {Page} from 'components/Layout/Page';
import {MDXComponents} from 'components/MDX/MDXComponents';
import sidebarLearn from '../sidebarLearn.json';

const {Intro, MaxWidth, p: P, a: A} = MDXComponents;

export default function NotFound() {
  return (
    <Page toc={[]} meta={{title: 'Not Found'}} routeTree={sidebarLearn}>
      <MaxWidth>
        <Intro>
          <P>Esta página não existe.</P>
          <P>
<<<<<<< HEAD
            Se isso é um erro{', '}
            <A href="https://github.com/reactjs/pt-br.react.dev/issues/new">
              nos informe
=======
            If this is a mistake{', '}
            <A href="https://github.com/reactjs/react.dev/issues/new">
              let us know
>>>>>>> e5fd79cdbb296b87cab7dff17c3b7feee5dba96b
            </A>
            {', '}e vamos tentar corrigi-lo!
          </P>
        </Intro>
      </MaxWidth>
    </Page>
  );
}
