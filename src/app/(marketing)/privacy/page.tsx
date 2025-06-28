export default function PrivacyPolicy() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">Polityka prywatności</h1>
      <p className="mb-6 italic">Ostatnia aktualizacja: lipiec 2025</p>
      <p className="mb-4">
        Niniejsza Polityka Prywatności określa, w jaki sposób SpeakLab English
        Academy (dalej: &quot;my&quot;, &quot;nasz&quot;, &quot;nasza
        szkoła&quot;) gromadzi, wykorzystuje i chroni dane osobowe użytkowników
        strony internetowej oraz naszych usług edukacyjnych.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">
        1. Administrator danych
      </h2>
      <p className="mb-4">
        Administratorem danych osobowych jest właściciel jednoosobowej
        działalności gospodarczej prowadzącej SpeakLab English Academy z
        siedzibą w Polsce.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">
        2. Jakie dane zbieramy
      </h2>
      <p>
        Zbieramy dane osobowe tylko w zakresie niezbędnym do świadczenia naszych
        usług:
      </p>
      <ul className="mb-4">
        <li>
          Imię i adres e-mail – w formularzu kontaktowym lub przy zapisie na
          lekcję próbną,
        </li>
        <li>
          Dane do płatności – przetwarzane za pośrednictwem Stripe (nie
          przechowujemy danych kart płatniczych),
        </li>
        <li>
          Dane konta – obsługiwane przez Clerk do logowania i autoryzacji
          użytkowników.
        </li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6 mb-4">
        3. Cel przetwarzania danych
      </h2>
      <p>Dane osobowe są przetwarzane w celu:</p>
      <ul className="mb-4">
        <li>świadczenia usług edukacyjnych,</li>
        <li>realizacji płatności subskrypcyjnych,</li>
        <li>zapewnienia kontaktu z użytkownikami,</li>
        <li>obsługi reklamacji i zwrotów,</li>
        <li>spełnienia obowiązków prawnych (np. podatkowych).</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6 mb-4">
        4. Podstawy prawne przetwarzania
      </h2>
      <p className="mb-4">
        Art. 6 ust. 1 lit. b RODO – wykonanie umowy (np. dostęp do lekcji), Art.
        6 ust. 1 lit. a RODO – zgoda użytkownika (np. newsletter), Art. 6 ust. 1
        lit. c RODO – obowiązek prawny.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">
        5. Udostępnianie danych
      </h2>
      <p className="mb-4">Dane mogą być przekazywane:</p>
      <ul>
        <li>firmie Stripe – do obsługi płatności,</li>
        <li>firmie Clerk – do zarządzania kontami użytkowników,</li>
        <li>podmiotom wspierającym utrzymanie strony (np. hosting).</li>
      </ul>
      <p className="mb-4">
        Nie przekazujemy danych poza Europejski Obszar Gospodarczy, chyba że
        zapewnione są odpowiednie środki ochrony danych (np. SCC).
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">6. Prawa użytkownika</h2>
      <p className="mb-2">Masz prawo do:</p>
      <ul>
        <li>dostępu do swoich danych,</li>
        <li>ich sprostowania,</li>
        <li>usunięcia („prawo do bycia zapomnianym”),</li>
        <li>ograniczenia przetwarzania,</li>
        <li>przeniesienia danych,</li>
        <li>wniesienia sprzeciwu.</li>
      </ul>
      <p className="mb-4">
        Wszelkie prośby prosimy kierować na:{' '}
        <a href="mailto:kontakt@speaklab.pl" className="underline">
          kontakt@speaklab.pl
        </a>
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">
        7. Czas przechowywania danych
      </h2>
      <p className="mb-4">
        Dane przechowujemy przez czas trwania subskrypcji i do 6 lat po jej
        zakończeniu (ze względu na przepisy podatkowe).
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">8. Pliki cookies</h2>
      <p className="mb-4">
        Na naszej stronie używamy plików cookies w celach statystycznych oraz do
        poprawnego działania funkcji logowania.
      </p>
    </div>
  )
}
