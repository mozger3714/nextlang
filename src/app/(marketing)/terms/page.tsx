export default function Terms() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">Regulamin świadczenia usług</h1>
      <p className="mb-6 italic">Ostatnia aktualizacja: lipiec 2025</p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        1. Postanowienia ogólne
      </h2>
      <p className="mb-4">
        <ul className="list-disc pl-6">
          <li>
            Usługi edukacyjne świadczone są przez SpeakLab English Academy w
            formie online.
          </li>
          <li>
            Każdy użytkownik korzystający z naszych usług akceptuje niniejszy
            regulamin.
          </li>
        </ul>
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">2. Rodzaje usług</h2>
      <p className="mb-4">
        <ul className="list-disc pl-6">
          <li>Zajęcia grupowe – 4 godziny tygodniowo w małych grupach,</li>
          <li>Zajęcia indywidualne – do 3 godzin w tygodniu z lektorem,</li>
          <li>Darmowa lekcja próbna – 30 minut, po uprzedniej rezerwacji.</li>
        </ul>
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">
        3. Subskrypcja i płatności
      </h2>
      <p className="mb-4">
        <ul className="list-disc pl-6">
          <li>Płatności realizowane są miesięcznie przez system Stripe,</li>
          <li>
            Subskrypcję można anulować w każdej chwili – dostęp pozostaje do
            końca opłaconego okresu,
          </li>
          <li>
            W przypadku niezadowolenia klienta oferujemy{' '}
            <b>100% zwrot pieniędzy w ciągu 7 dni</b> od rozpoczęcia pierwszego
            miesiąca nauki (nie dotyczy lekcji próbnej).
          </li>
        </ul>
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">
        4. Rezygnacja i reklamacje
      </h2>
      <p className="mb-4">
        Rezygnację lub reklamację należy przesłać na adres e-mail: {''}
        <a href="mailto:kontakt@speaklab.pl" className="underline">
          kontakt@speaklab.pl
        </a>
        . Zwrot zostanie dokonany do 14 dni roboczych na to samo konto, z
        którego dokonano płatności.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">
        5. Wymagania techniczne
      </h2>
      <p className="mb-4">Do korzystania z lekcji online wymagane jest:</p>
      <ul className="list-disc pl-6">
        <li>stabilne połączenie internetowe,</li>
        <li>przeglądarka internetowa,</li>
        <li>słuchawki i mikrofon,</li>
        <li>założenie konta na stronie SpeakLab English Academy,</li>
        <li>Konto na platformie Discord dla dostępu do prowadzonych lekcji.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        6. Postanowienia końcowe
      </h2>
      <p className="mb-2">
        Regulamin może być aktualizowany – użytkownicy zostaną poinformowani
        drogą mailową, W sprawach nieuregulowanych zastosowanie mają przepisy
        prawa polskiego i RODO.
      </p>
    </div>
  )
}
