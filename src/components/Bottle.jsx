export default function Bottle({ color = '#d4af37', name = 'HAPSAT DUO', large = false }) {
  return (
    <div className={`bottle-wrap ${large ? 'bottle-large' : ''}`} style={{ '--bottle': color }} aria-label={`${name} perfume bottle`}>
      <div className="bottle-shadow" />
      <div className="bottle-cap" />
      <div className="bottle-neck" />
      <div className="bottle-glass">
        <div className="bottle-liquid" />
        <div className="bottle-label"><b>H</b><span>{name}</span><small>PERFUME · LONDON</small></div>
      </div>
    </div>
  )
}
