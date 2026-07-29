/**
 * Everything known about one pile, with its sources, derived geometry and any
 * issues raised against it.
 */

import { PileDesign, PileRecord, hasValue } from '../core/schema';
import {
  compareToDesign,
  effectiveTopRL,
  pileLength,
  rockheadRL,
  socketCompliance,
  socketLength,
  toeRLFromDepth,
} from '../core/calc';
import { validatePile } from '../core/validate';
import { FieldValue } from './FieldValue';

export function PileDetail({
  pile,
  design,
}: {
  pile: PileRecord;
  design: PileDesign | undefined;
}) {
  const compliance = socketCompliance(pile);
  const issues = validatePile(pile);
  const comparison = compareToDesign(pile, design);

  return (
    <div className="detail">
      <div className="detail-head">
        <h2>{pile.id}</h2>
        <span className={`verdict v-${compliance.verdict}`}>
          {compliance.verdict === 'compliant'
            ? 'Socket compliant'
            : compliance.verdict === 'non-compliant'
              ? 'Socket short'
              : 'Compliance unknown'}
        </span>
      </div>
      <p className="reason">{compliance.reason}</p>

      <h3>Levels</h3>
      <FieldValue label="Ground / platform RL" field={pile.groundRL} unit="m RL" />
      <FieldValue label="Pile top RL" field={effectiveTopRL(pile)} unit="m RL" />
      <FieldValue label="Top of bedrock RL" field={rockheadRL(pile)} unit="m RL" />
      <FieldValue label="Toe RL" field={toeRLFromDepth(pile)} unit="m RL" />

      <h3>Geometry</h3>
      <FieldValue label="Diameter" field={pile.diameter} unit="m" precision={3} />
      <FieldValue label="Total depth" field={pile.totalDepth} unit="m" />
      <FieldValue label="Pile length" field={pileLength(pile)} unit="m" />
      <FieldValue label="Socket — required" field={pile.requiredSocketLength} unit="m" />
      <FieldValue label="Socket — constructed" field={socketLength(pile)} unit="m" />

      <h3>Ground conditions</h3>
      <FieldValue label="Founding material" field={pile.foundingMaterial} />
      <FieldValue label="Bedrock class / zone" field={pile.bedrockClass} />
      <FieldValue label="Groundwater RL" field={pile.groundwaterRL} unit="m RL" />

      <h3>Inspection</h3>
      <FieldValue label="Date" field={pile.inspectionDate} />
      <FieldValue label="Acceptance" field={pile.acceptance} />
      <FieldValue label="Notes" field={pile.inspectionNotes} />

      <h3>Position</h3>
      <div className="posrow">
        <FieldValue label="X" field={pile.position.x} unit="m" />
        <FieldValue label="Y" field={pile.position.y} unit="m" />
      </div>
      <div className="accuracy">
        Coordinate accuracy: <b>{pile.position.accuracy}</b>
        {pile.position.accuracy !== 'surveyed' && (
          <span> — not survey accuracy; do not set out from these values.</span>
        )}
      </div>

      {design ? (
        <>
          <h3>Design vs constructed</h3>
          <div className="cmp">
            <div>
              Toe difference:{' '}
              <b>{comparison.toeDifference === null ? '—' : `${comparison.toeDifference} m`}</b>
            </div>
            <div>
              Socket difference:{' '}
              <b>
                {comparison.socketDifference === null ? '—' : `${comparison.socketDifference} m`}
              </b>
            </div>
          </div>
          {comparison.warnings.map((w, i) => (
            <div key={i} className="issue sev-warning">
              {w}
            </div>
          ))}
        </>
      ) : (
        <>
          <h3>Design vs constructed</h3>
          <div className="issue sev-info">
            No design record loaded for this pile — comparison unavailable.
          </div>
        </>
      )}

      <h3>Issues ({issues.length})</h3>
      {issues.length === 0 ? (
        <div className="issue sev-info">Nothing raised against this pile.</div>
      ) : (
        issues.map((i, k) => (
          <div key={k} className={`issue sev-${i.severity}`}>
            <b>{i.field ?? 'record'}</b> — {i.message}
            {i.action ? <div className="action">{i.action}</div> : null}
          </div>
        ))
      )}

      <h3>Photographs</h3>
      {pile.photos.length === 0 ? (
        <div className="issue sev-info">No inspection photographs linked.</div>
      ) : (
        <div className="photos">
          {pile.photos.map((ph) => (
            <figure key={ph.id}>
              <img src={ph.url} alt={ph.caption ?? pile.id} />
              <figcaption>{ph.caption ?? ph.takenAt ?? ''}</figcaption>
            </figure>
          ))}
        </div>
      )}

      <div className="verif">
        Record verification: <b>{pile.verification}</b>
        {!hasValue(pile.toeRL) && pile.verification === 'verified' ? (
          <span> — check: verified with an unknown toe level.</span>
        ) : null}
      </div>
    </div>
  );
}
