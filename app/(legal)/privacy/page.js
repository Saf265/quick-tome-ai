export default function Privacy() {
  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-4">
          Politique de Confidentialité
        </h1>
        <p className="text-center text-muted-foreground mb-4">
          Comment nous traitons vos données personnelles
        </p>
      </div>
      <div className="space-y-6">
        <section className="space-y-3">
          <h3 className="text-xl font-semibold">
            1. Collecte des données personnelles
          </h3>
          <p>
            Dans le cadre de l'utilisation de QuickTome AI, nous sommes amenés à
            collecter les données personnelles suivantes :
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Informations d'identification (nom, prénom, adresse email)</li>
            <li>Informations de facturation et de paiement</li>
            <li>
              Contenu des formulaires que vous remplissez pour générer des
              ebooks
            </li>
            <li>Données de connexion et d'utilisation du service</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h3 className="text-xl font-semibold">2. Finalités du traitement</h3>
          <p>Les données personnelles collectées sont utilisées pour :</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Fournir et améliorer nos services de génération d'ebooks</li>
            <li>Gérer votre compte utilisateur</li>
            <li>Traiter vos paiements</li>
            <li>Vous envoyer des communications relatives au service</li>
            <li>Personnaliser votre expérience utilisateur</li>
            <li>Analyser l'utilisation de notre service pour l'améliorer</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h3 className="text-xl font-semibold">
            3. Base légale du traitement
          </h3>
          <p>Le traitement de vos données personnelles est fondé sur :</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              L'exécution du contrat qui nous lie lorsque vous utilisez nos
              services
            </li>
            <li>
              Votre consentement, notamment pour l'envoi de communications
              marketing
            </li>
            <li>
              Notre intérêt légitime à améliorer et promouvoir nos services
            </li>
            <li>Le respect de nos obligations légales</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h3 className="text-xl font-semibold">
            4. Destinataires des données
          </h3>
          <p>Vos données personnelles peuvent être partagées avec :</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Notre personnel autorisé</li>
            <li>Nos sous-traitants techniques (hébergement, paiement, etc.)</li>
            <li>
              Les services d'intelligence artificielle utilisés pour générer les
              ebooks
            </li>
            <li>
              Les autorités administratives ou judiciaires lorsque la loi
              l'exige
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h3 className="text-xl font-semibold">5. Durée de conservation</h3>
          <p>
            Vos données personnelles sont conservées pour la durée nécessaire à
            la fourniture de nos services et au respect de nos obligations
            légales :
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Données de compte : pendant toute la durée de votre inscription,
              puis archivées selon les délais légaux
            </li>
            <li>
              Données de paiement : selon les obligations légales en matière
              comptable et fiscale
            </li>
            <li>
              Contenu des formulaires : pendant toute la durée de votre
              inscription après la génération de l'ebook
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h3 className="text-xl font-semibold">6. Vos droits</h3>
          <p>
            Conformément au Règlement Général sur la Protection des Données
            (RGPD), vous disposez des droits suivants :
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Droit d'accès à vos données</li>
            <li>Droit de rectification des données inexactes</li>
            <li>Droit à l'effacement (droit à l'oubli)</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit à la portabilité des données</li>
            <li>Droit d'opposition au traitement</li>
          </ul>
          <p>
            Pour exercer ces droits, vous pouvez nous contacter à l'adresse
            email suivante : boucetsafwan@gmail.com
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="text-xl font-semibold">7. Sécurité des données</h3>
          <p>
            Nous mettons en œuvre des mesures techniques et organisationnelles
            appropriées pour protéger vos données personnelles contre la
            destruction accidentelle ou illicite, la perte, l'altération, la
            divulgation non autorisée ou l'accès non autorisé.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="text-xl font-semibold">
            8. Transferts internationaux de données
          </h3>
          <p>
            Dans le cadre de nos activités et pour les besoins des traitements
            mentionnés, vos données personnelles peuvent être transférées vers
            des pays situés en dehors de l'Union Européenne. Nous nous assurons
            que ces transferts sont effectués dans le respect de la
            réglementation applicable et garantissent un niveau de protection
            adéquat de votre vie privée et de vos droits fondamentaux.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="text-xl font-semibold">
            9. Cookies et technologies similaires
          </h3>
          <p>
            Notre site utilise des cookies et technologies similaires pour
            améliorer votre expérience utilisateur, analyser notre trafic et
            personnaliser le contenu. Pour plus d'informations sur notre
            utilisation des cookies, veuillez consulter notre politique de
            cookies.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="text-xl font-semibold">
            10. Modification de la politique de confidentialité
          </h3>
          <p>
            Nous nous réservons le droit de modifier la présente politique de
            confidentialité à tout moment. Toute modification sera publiée sur
            cette page et, si les modifications sont significatives, nous vous
            fournirons une notification plus visible.
          </p>
          <p>Date de dernière mise à jour : 11/04/2025</p>
        </section>
      </div>
    </div>
  );
}
