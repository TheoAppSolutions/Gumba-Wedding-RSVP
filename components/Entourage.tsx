type Pair = readonly [string, string];

const PRINCIPAL: Pair[] = [
  ["DR. GREG L. GALOS", "DR. ROLENE PEÑAFRANCIA GALOS"],
  ["DR. MIGUEL V. DUMAS JR.", "MRS. LILY JULIANA T. DUMAS"],
  ["MR. EDWIN S. ESCULTOR", "MRS. VIVIAN G. ESCULTOR"],
  ["MR. MARK CHESTER ANTHONY G. TAMAYO", "DR. FRANCISCA SOFIA V. LILAGAN"],
  ["MR. IRWIN ROBERTO C. VILLACARILLO", "MRS. ROSANA C. VILLACARILLO"],
  ["MR. ALBERTO G. BALDESCO JR.", "MRS. MARLYN G. BALDESCO"],
  ["MR. MORTEN SAETRE", "MRS. MARIBEL N. SAETRE"],
  ["MR. YONGCHUN CAI", "MRS. MARIA MARGARITA J. CAI"],
  ["MR. PEDRO JOHN V. JATULAN", "MRS. MARGARET KIMBERLY D. CABOTE-JATULAN"],
  ["MR. EMMANUEL O. CHONG", "MRS. MONICAR M. CHONG"],
  ["MR. JOFRE M. RUALES", "MRS. JOSEPHINE M. RUALES"],
];
const SECONDARY: { role: string; pair: Pair }[] = [
  { role: "Candle", pair: ["MR. OLIVER L. COLARTE", "MRS. ANNALIZA C. COLARTE"] },
  { role: "Veil", pair: ["MR. MARK DAANTOS", "MRS. MORENA B. DAANTOS"] },
  { role: "Cord", pair: ["MR. RODERICK V. NAVERA", "MRS. JOSELITA E. NAVERA"] },
];
const HONOR: Pair[] = [["MR. AARON A. PEREZ", "MS. HARLENE G. CASTAÑARES"]];
const PARTY: Pair[] = [
  ["MR. ISIDRO VALENTINE V. JATULAN", "MS. CHERRY L. DACUNES"],
  ["MR. FRANCIS LLOYD O. NAVERA", "MS. MA. ANGELIE Q. ANINO"],
  ["MR. CHRISTIAN O. NAVERA", "MS. CARRIE KATHLYN S. IBAÑEZ"],
  ["MR. JOHN ARTHUR L. URSAL", "MS. NORAFE O. NAVERA"],
  ["MR. PAUL GIDEON D. GADUGDUG", "MS. MARY ANN L. MONTAJES"],
  ["MR. EMELIO D. GADUGDUG JR.", "MS. ZEPHANIAH PRAISE D. MACABUS"],
];
const BEARERS: { role: string; names: string[] }[] = [
  { role: "Ring Bearer", names: ["KENNETH FELIX D. QUIREQUIRE"] },
  { role: "Coin Bearer", names: ["ZERR ADAM J. CRUZ"] },
  { role: "Bible Bearer", names: ["DJ T. PACAANAS"] },
  { role: "Flower Girls", names: ["MIREILLE A. NAVERA", "ELICIA VERON G. GUMBA", "VIRCEL Y. CABACABA", "BERNICE MIRACLE KYRYN A. PALATINO", "ELISHA ANGELY DACUNES"] },
];

const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.3em] text-dusty-500 mb-2">{children}</p>
);
const Name = ({ children }: { children: React.ReactNode }) => (
  <p className="font-sans font-light text-xs sm:text-sm tracking-[0.12em] text-dusty-900 leading-relaxed">{children}</p>
);
function Pairs({ pairs, heads }: { pairs: readonly Pair[]; heads?: Pair }) {
  return (
    <div>
      {heads && <div className="grid grid-cols-2 gap-4 sm:gap-10 mb-3"><Label>{heads[0]}</Label><Label>{heads[1]}</Label></div>}
      <div className="space-y-2">{pairs.map(([a, b]) => (<div key={a} className="grid grid-cols-2 gap-4 sm:gap-10"><Name>{a}</Name><Name>{b}</Name></div>))}</div>
    </div>
  );
}
const Block = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mt-12 pt-10 border-t border-dusty-200 first:mt-0 first:pt-0 first:border-0"><h3 className="font-serif text-xl sm:text-2xl text-dusty-700 mb-5 ">{title}</h3>{children}</div>
);

export default function Entourage() {
  return (
    <section className="bg-white border-t border-dusty-100 px-6 py-16" aria-labelledby="entourage-title">
      <div className="max-w-3xl mx-auto text-center">
        <h2 id="entourage-title" className="font-serif text-3xl md:text-4xl mb-12">Our Entourage</h2>
        <Block title="Principal Sponsors"><Pairs pairs={PRINCIPAL} /></Block>
        <Block title="Secondary Sponsors">
          <div className="space-y-6">{SECONDARY.map((s) => (<div key={s.role}><Label>{s.role}</Label><Pairs pairs={[s.pair]} /></div>))}</div>
        </Block>
        <Block title="Best Man & Maid of Honor"><Pairs pairs={HONOR} heads={["Best Man", "Maid of Honor"]} /></Block>
        <Block title="Groomsmen & Bridesmaids"><Pairs pairs={PARTY} heads={["Groomsmen", "Bridesmaids"]} /></Block>
        <Block title="Little Ones">
          <div className="space-y-6">{BEARERS.map((b) => (<div key={b.role}><Label>{b.role}</Label><div className="space-y-1">{b.names.map((n) => <Name key={n}>{n}</Name>)}</div></div>))}</div>
        </Block>
      </div>
    </section>
  );
}
