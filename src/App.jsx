/**
 * To showcase legacy styling with the dnb-ui-lib
 *
 */

import React, { PureComponent } from 'react'
import styled from '@emotion/styled'

import LegacyMenu from './legacy/LegacyMenu.jsx'

// 2. Import Components and Elements
import { Button, Input, Icon } from 'dnb-ui-lib/components'
import { H2, H4, P, Code } from 'dnb-ui-lib/elements'
import { bell } from 'dnb-ui-lib/icons'

// 3. We dont import this, as we will have controll
// import 'dnb-ui-lib/style'; // Import the global DNB stylesheet

// 4. We dont import this, as we will have controll
// import 'dnb-ui-lib/style/elements'

export default class App extends PureComponent {
  render() {
    return (
      <>
        <LegacyCodeExample>
          <Code>Legacy code with old CSS reset ↓</Code>
          <hr />
          <Spacer />

          {/* Legacy Menu */}
          <LegacyMenu />
          <h1>
            Legacy {`<h1>`} <Icon icon={bell} size="auto" />
          </h1>

          <h4 className="dnb-h4">
            I have a Eufemia Style (<code>.dnb-h4</code>) without a correct
            CSS reset, I'm only <b>20px</b> (1.25rem) high!
          </h4>

          <Button text="Crying Button 😢" />
          <Input label="Input:" value="Input ..." />
        </LegacyCodeExample>

        <Cases />
      </>
    )
  }
}

const Cases = () => (
  <>
    {/* Use of core style reset */}
    <CoreStyleExample className="dnb-core-style dnb-dev-grid">
      <Code>{'<div class="dnb-core-style">'}</Code>
      <H4>
        I'm using the Eufemia CSS reset, so I'm <b>1.5rem</b> high!{' '}
      </H4>
      <P>Me as well {'😇'}</P>
      <H2>
        And I'm a <Code>{`<h2>`}</Code> <Icon icon={bell} size="auto" />
      </H2>
      <Button text="I'm looking good" icon="chevron_right" />
      <Input label="Input:" value="Input ..." />
      <br />
      <br />
      <Code>{'</div>'}</Code>
      <ShowPixelBounding>I'm still on the Pixel Grid</ShowPixelBounding>
    </CoreStyleExample>

    {/* Use of spacing */}
    <SpacingExample className="dnb-core-style dnb-spacing dnb-dev-grid">
      <Code>{'<div class="dnb-core-style dnb-spacing">'}</Code>
      <H2>
        I'm a <Code>{`<h2>`}</Code> in an Article, and have the defualt
        spacing!
      </H2>
      <P>
        I'm a happy paragraph with spacing, written as <Code>{`<p>`}</Code>
        .
      </P>
      <p className="dnb-p">
        And I cloned Your style, but written as{' '}
        <Code>{`<p class="dnb-p">`}</Code>
      </p>
      <Button
        variant="secondary"
        text="I'm looking good"
        icon="add"
        icon_position="left"
      />
      <Input label="Input:" value="Input ..." />
      <br />
      <br />
      <Code>{'</div>'}</Code>
      <ShowPixelBounding>I'm still on the Pixel Grid</ShowPixelBounding>
    </SpacingExample>
  </>
)

const ShowPixelBounding = styled(P)`
  .dnb-core-style & {
    margin-top: 3rem;
  }
  color: var(--color-sky-blue);
  background-color: rgba(164, 255, 255, 0.3);
`
const LegacyCodeExample = styled.article`
  padding: 3rem 2rem 4rem;
  background-color: var(--color-mint-green-12);
`
const CoreStyleExample = styled.article`
  margin: 0;
  padding: 3rem 2rem 4rem;
  background-color: var(--color-sea-green-alt-30);
  code:first-of-type,
  code:last-of-type {
    margin-bottom: 1rem;
  }
  .show-pixel-bounding {
    background-color: rgba(255, 255, 255, 0.5);
  }
`
const SpacingExample = styled.article`
  padding: 3rem 2rem 4rem;
  background-color: var(--color-mint-green-50);
  .show-pixel-bounding {
    background-color: rgba(255, 255, 255, 0.5);
  }
`
const Spacer = styled.div`
  margin-bottom: 2rem;
`
