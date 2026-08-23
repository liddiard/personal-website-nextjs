'use client'

const PrintButton = () => (
  <div
    className="print"
    role="button"
    tabIndex={-1}
    onClick={() => window.print()}
    onKeyDown={() => window.print()}
  >
    Print / PDF <img src="/img/download.svg" alt="" />
  </div>
)

export default PrintButton
