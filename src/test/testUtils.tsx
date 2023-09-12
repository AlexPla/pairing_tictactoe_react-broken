/* eslint-disable import/export */
// eslint-disable-next-line import/named
import { render, RenderOptions, RenderResult } from '@testing-library/react'
import { ReactElement } from 'react'

const customRender = (
  ui: ReactElement,
  options: RenderOptions = {} as RenderOptions,
): RenderResult => {
  return render(
    <>
      {ui}
      <div id="root-popups" />
    </>,
    options,
  )
}

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
export { customRender as render }
