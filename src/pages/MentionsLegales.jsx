import React from "react";
import { Link } from "react-router-dom";

const MentionsLegales = () => {
  return (
    <section className="section-mentions-legales">
      <h1>Mentions légales</h1>

      <p>En vigueur au 03/02/2026</p>

      <p>
        Conformément aux dispositions de la loi n°2004-575 du 21 juin 2004 pour
        la Confiance en l’économie numérique, il est porté à la connaissance des
        utilisateurs et visiteurs, ci-après l' "Utilisateur", du site
        http://localhost:5173/ , ci-après le "Site", les présentes mentions
        légales.
      </p>

      <p>
        La connexion et la navigation sur le Site par l’Utilisateur implique
        acceptation intégrale et sans réserve des présentes mentions légales.
      </p>

      <p>
        Ces dernières sont accessibles sur le Site à la rubrique "Mentions
        légales".
      </p>

      <h2>EDITION DU SITE</h2>

      <p>
        L’édition et la direction de la publication du Site est assurée par
        Monsieur Matthieu Marchand, domicilié 7 rue de la jolie maison, dont le
        numéro de téléphone est 0600000000, et l'adresse e-mail
        jolie.maison@gmail.com.
      </p>

      <p>ci-après l'"Editeur".</p>

      <h2>HEBERGEUR</h2>

      <p>
        L'hébergeur du Site est la société localhost, dont le siège social est
        situé au 6 rue de la jolie maison 33000 Bordeaux.
      </p>

      <h2>ACCES AU SITE</h2>

      <p>
        Le Site est normalement accessible, à tout moment, à l'Utilisateur.
        Toutefois, l'Editeur pourra, à tout moment, suspendre, limiter ou
        interrompre le Site afin de procéder, notamment, à des mises à jour ou
        des modifications de son contenu. L'Editeur ne pourra en aucun cas être
        tenu responsable des conséquences éventuelles de cette indisponibilité
        sur les activités de l'Utilisateur.
      </p>

      <p>ci-après l'"Editeur".</p>

      <h2>HEBERGEUR</h2>

      <p>
        L'hébergeur du Site est la société localhost, dont le siège social est
        situé au 6 rue de la jolie maison 33000 Bordeaux . Le numéro de
        téléphone de l'hébergeur est le 0600000001.
      </p>

      <h2>ACCES AU SITE</h2>

      <p>
        Le Site est normalement accessible, à tout moment, à l'Utilisateur.
        Toutefois, l'Editeur pourra, à tout moment, suspendre, limiter ou
        interrompre le Site afin de procéder, notamment, à des mises à jour ou
        des modifications de son contenu. L'Editeur ne pourra en aucun cas être
        tenu responsable des conséquences éventuelles de cette indisponibilité
        sur les activités de l'Utilisateur.
      </p>

      <p>
        Toute utilisation, reproduction, diffusion, commercialisation,
        modification de toute ou partie du Site, sans autorisation expresse de
        l’Editeur est prohibée et pourra entraîner des actions et poursuites
        judiciaires telles que prévues par la règlementation en vigueur.
      </p>

      <Link to="/">Retour</Link>
    </section>
  );
};

export default MentionsLegales;
