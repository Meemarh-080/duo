import { useState } from 'react'
import Bottle from '../components/Bottle'
import { formatNaira } from '../utils/currency'
import { products } from '../data/products'

export default function Quiz({ onAdd }) {
  const [step, setStep] = useState(1)
  const [notes, setNotes] = useState([])
  const [occasion, setOccasion] = useState('')

  const toggleNote = note => setNotes(current => current.includes(note) ? current.filter(item => item !== note) : [...current, note])
  const recommendation = occasion === 'Night' ? products.find(product => product.id === 'noir')
    : notes.includes('Floral') ? products.find(product => product.id === 'aura') : products.find(product => product.id === 'brume')

  return (
    <main className="page quiz-page">
      <header className="page-header"><p className="eyebrow">THE SCENT CONCIERGE</p><h1>Find Your Signature</h1><p>A private consultation of three simple questions.</p></header>
      <div className="quiz-shell">
        <div className="progress"><span className={step >= 1 ? 'active' : ''} /><span className={step >= 2 ? 'active' : ''} /><span className={step >= 3 ? 'active' : ''} /></div>
        {step === 1 && <section className="quiz-step"><p className="step-count">01 — OLFACTIVE PREFERENCES</p><h2>Which notes draw you in?</h2><div className="choice-grid">{['Floral', 'Woody', 'Citrus', 'Spiced'].map(note => <button key={note} className={notes.includes(note) ? 'selected' : ''} onClick={() => toggleNote(note)}><span>{note}</span><small>{note === 'Floral' ? 'Rose · Jasmine' : note === 'Woody' ? 'Cedar · Oud' : note === 'Citrus' ? 'Bergamot · Neroli' : 'Saffron · Pepper'}</small></button>)}</div><button className="gold-button" disabled={!notes.length} onClick={() => setStep(2)}>Continue</button></section>}
        {step === 2 && <section className="quiz-step"><p className="step-count">02 — YOUR OCCASION</p><h2>When should it be worn?</h2><div className="choice-grid two"><button className={occasion === 'Day' ? 'selected' : ''} onClick={() => setOccasion('Day')}><span>By Day</span><small>Effortless, luminous, intimate</small></button><button className={occasion === 'Night' ? 'selected' : ''} onClick={() => setOccasion('Night')}><span>After Dark</span><small>Deep, magnetic, unforgettable</small></button></div><div className="quiz-actions"><button className="text-button" onClick={() => setStep(1)}>← Back</button><button className="gold-button" disabled={!occasion} onClick={() => setStep(3)}>Reveal my scent</button></div></section>}
        {step === 3 && <section className="quiz-result"><p className="step-count">YOUR BESPOKE MATCH</p><Bottle color={recommendation.color} name={recommendation.name} /><div><p className="eyebrow">YOUR SIGNATURE</p><h2>{recommendation.name}</h2><p>{recommendation.intro}</p><p className="result-notes">{recommendation.top.join(' · ')}</p><div className="quiz-actions"><button className="text-button" onClick={() => { setStep(1); setNotes([]); setOccasion('') }}>Begin again</button><button className="gold-button" onClick={() => onAdd(recommendation)}>Add to Cart — {formatNaira(recommendation.price)}</button></div></div></section>}
      </div>
    </main>
  )
}
